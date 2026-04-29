const input = document.getElementById('SearchInput')
const search_button = document.getElementById('SearchButton')
const container = document.getElementById('AlbumsContainer')
const home_button = document.getElementById('HomeButton')
const profile_button = document.getElementById('ProfileButton')

const TOKEN = 'gkUVUhgNaMFxMgHMSdkSMeCVaLQZiUUvGBckWAre'
const BASE_URL = 'https://api.discogs.com'
const SEARCH_URL = `${BASE_URL}/database/search`
const RELEASE_URL = `${BASE_URL}/releases`

search_button.addEventListener('click', () => {
    const query = input.value.trim()
    if (!query) return alert('Escribí un álbum para buscar.')
    search_albums(query)
})

async function search_albums(query) {
    container.innerHTML = '<p class="text-gray-500 text-center w-full">Cargando...</p>'
    try{
        const url = `${SEARCH_URL}?q=${query}&type=release&per_page=20&token=${TOKEN}`
        const res = await fetch(url)
        if (!res.ok) throw new Error('Error en la búsqueda')
        const data = await res.json()
        render_albums(data.results)
        console.log("Resultados búsqueda:", data.results)
    } catch (err) {
        container.innerHTML = `<p class="text-red-600 text-center">${err.message}</p>`
    }
}

function render_albums(albums) {
    container.innerHTML = ''

    if (!albums.length) {
        container.innerHTML = '<p class="text-gray-500 text-center w-full">No se encontraron álbumes.</p>'
        return
    }

    albums.forEach(album => {
        const card = document.createElement('article')
        card.className = "bg-white p-4 rounded shadow text-center hover:shadow-lg transition relative"
        const front_page = album.cover_image
        const title = album.title || 'Sin título'
        const id = album.id

        card.innerHTML = `
            <div class="relative">
                <img src="${front_page}" alt="${title}" class="w-full h-60 object-cover rounded-md mb-3">
                ${create_hearts_HTML(id)}
            </div>

            <h3 class="font-bold text-gray-800 mb-2">${title}</h3>

            <button class="toggle-details text-sm text-blue-500" data-id="${id}">
                Ver más
            </button>

            <div class="details hidden mt-2 text-sm text-gray-600" id="details-${id}">
                <p>Cargando info...</p>
            </div>
        `

        container.appendChild(card)
    });

    add_events_hearts()
    add_events_details()
}

function create_hearts_HTML(id) {
    const fav = get_fav_state(id)
    const heart = fav ? '&#128153;' : '&#129293;'

    return `
        <span 
            class="heart absolute top-2 right-2 cursor-pointer text-2xl" 
            data-fav="${fav}" 
            data-id="${id}"
        >
            ${heart}
        </span>
    `
}

function add_events_hearts() {
    const hearts = document.querySelectorAll('.heart')
    hearts.forEach(h => {
        h.addEventListener('click', () => {
            const id = h.dataset.id
            const current = h.dataset.fav === 'true'
            const newFav = !current

            save_fav_state(id, newFav)

            h.innerHTML = newFav ? '&#128153;' : '&#129293;'
            h.dataset.fav = newFav
        })
    });
}

function save_fav_state(id, fav) {
    const favs = JSON.parse(localStorage.getItem('favs') || '{}')

    if (fav) {
        favs[id] = true
    } else {
        delete favs[id]
    }

    localStorage.setItem('favs', JSON.stringify(favs))
}

function get_fav_state(id) {
    const favs = JSON.parse(localStorage.getItem('favs') || '{}')
    return favs[id] || false
}

function add_events_details() {
    const buttons = document.querySelectorAll('.toggle-details')

    buttons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const id = btn.dataset.id
            const detailsDiv = document.getElementById(`details-${id}`)

            const isHidden = detailsDiv.classList.contains('hidden')

            if (isHidden) {
                detailsDiv.classList.remove('hidden')
                btn.textContent = 'Ocultar'

                await load_album_details(id, detailsDiv)

            } else {
                detailsDiv.classList.add('hidden')
                btn.textContent = 'Ver más'
            }
        })
    })
}

async function load_album_details(id, detailsDiv) {
    try {
        const url = `${RELEASE_URL}/${id}?token=${TOKEN}`
        const res = await fetch(url)

        if (!res.ok) throw new Error('Error al cargar detalles')
        
        const data = await res.json()
        detailsDiv.innerHTML = `
        <p><strong>Año:</strong> ${data.year || 'Desconocido'}</p>
        <p><strong>Artista:</strong> ${data.artists_sort || 'Desconocido'}</p>
        <p><strong>Género:</strong> ${data.genres ? data.genres.join(', ') : 'Desconocido'}</p>
        `
        console.log("Detalle álbum:", data)
    } catch (err) {
        detailsDiv.innerHTML = `<p class="text-red-600">${err.message}</p>`
    }
}