const input = document.getElementById('SearchInput')
const search_button = document.getElementById('SearchButton')
const home_button = document.getElementById('HomeButton')
const profile_button = document.getElementById('ProfileButton')
const albums_container = document.getElementById('AlbumsContainer')
const header_container = document.getElementById('HeaderContainer')

const TOKEN = 'gkUVUhgNaMFxMgHMSdkSMeCVaLQZiUUvGBckWAre'
const BASE_URL = 'https://api.discogs.com'
const SEARCH_URL = `${BASE_URL}/database/search`
const RELEASE_URL = `${BASE_URL}/releases`

let last_rendered_albums = []
const default_albums_container_class = albums_container.className

search_button.addEventListener('click', () => {
    clear_containers()
    const query = input.value.trim()
    if (!query) return alert('Escribí un álbum para buscar.')
    search_albums(query)
})

profile_button.addEventListener('click', () => {
    clear_containers()
    const favs = get_all_favs()
    const albums = Object.values(favs)

    header_container.innerHTML = `
        <h1 class="text-2xl font-bold">LocalStorage</h1>
        <br>
        <p class="font-bold">Favoritos:</p>
    `
    render_albums(albums)
})

home_button.addEventListener('click', () => {
    clear_containers()
})

home_button.addEventListener("click", () => {
    search_randoms_albums();
});

async function search_albums(query) {
    albums_container.innerHTML = '<p class="text-gray-500 text-center w-full">Cargando...</p>'
    try{
        const url = `${SEARCH_URL}?q=${query}&type=release&per_page=20&token=${TOKEN}`
        const res = await fetch(url)
        clear_containers()

        if (!res.ok) throw new Error('Error en la búsqueda')
        const data = await res.json()
    
        render_albums(data.results)
        console.log("Resultados búsqueda:", data.results)
    } catch (err) {
        albums_container.innerHTML = `<p class="text-red-600 text-center">${err.message}</p>`
    }
}

async function load_album_details(id, detailsDiv) {
    try {
        const url = `${RELEASE_URL}/${id}?token=${TOKEN}`
        const res = await fetch(url)

        if (!res.ok) throw new Error('Error al cargar detalles')
        
        const data = await res.json()
        detailsDiv.innerHTML = `
        <section class="text-left">
            <p><strong>Artista:</strong> ${data.artists_sort || 'Desconocido'}</p>
            <p><strong>Género:</strong> ${data.genres ? data.genres.join(', ') : 'Desconocido'}</p>
            <p><strong>Estilo:</strong> ${data.styles ? data.styles.join(', ') : 'Desconocido'}</p>
            <p><strong>Año:</strong> ${data.year || 'Desconocido'}</p>
        </section>
        <br>
        <p><strong>Valoración:</strong></p>
        <p>${data.community.rating.average}/5</p>
        <br>
        <p><strong>Tracklist:</strong></p>
        `
        for (let i = 0; i < data.tracklist.length; i++) {
            const song = data.tracklist[i];
            detailsDiv.innerHTML += `
                <li class="list-none text-left"><strong class="pr-2">${i+1}:</strong>${song.title}</li>
                `
        }
        console.log("Detalle álbum:", data)
    } catch (err) {
        detailsDiv.innerHTML = `<p class="text-red-600">${err.message}</p>`
    }
}

async function show_album_page(id) {
    clear_containers()

    albums_container.className = 'w-full'
    albums_container.innerHTML = `
        <p class="text-gray-500 text-center">
            Cargando álbum...
        </p>
    `

    try {
        const url = `${RELEASE_URL}/${id}?token=${TOKEN}`
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error('Error al cargar el álbum')
        }

        const data = await res.json()

        albums_container.innerHTML = `
            <article class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-6xl mx-auto">

                <button id="backButton"
                    class="mb-8 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition">
                    🢀 Volver
                </button>

                <section class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    <div>
                        <img 
                            src="${data.images?.[0]?.uri || ''}" 
                            alt="${data.title}"
                            class="w-full max-w-md rounded-xl shadow-lg"
                        >
                    </div>

                    <div class="flex flex-col justify-start">

                        <h1 class="text-4xl font-bold leading-tight mb-8">${data.title}</h1>

                        <div class="space-y-5 text-lg">
                            <div>
                                <p class="font-bold text-gray-800">Artista</p>
                                <p class="text-gray-600">${data.artists_sort || 'Desconocido'}</p>
                            </div>

                            <div>
                                <p class="font-bold text-gray-800">Género</p>
                                <p class="text-gray-600">${data.genres?.join(', ') || 'Desconocido'}</p>
                            </div>

                            <div>
                                <p class="font-bold text-gray-800">Estilo</p>
                                <p class="text-gray-600">${data.styles?.join(', ') || 'Desconocido'}</p>
                            </div>

                            <div>
                                <p class="font-bold text-gray-800">Año</p>
                                <p class="text-gray-600">${data.year || 'Desconocido'}</p>
                            </div>

                            <div>
                                <p class="font-bold text-gray-800">Valoración</p>
                                <p class="text-gray-600">${data.community.rating.average || 'Sin datos'}/5</p>
                            </div>
                        </div>
                    </div>

                </section>

                <section class="mt-14">

                    <h2 class="text-2xl font-bold mb-6 border-b pb-3">
                        Tracklist
                    </h2>

                    <ul class="space-y-3">

                        ${data.tracklist.map((song, index) => `
                            <li class="
                                flex justify-between items-center
                                bg-gray-100
                                hover:bg-gray-200
                                transition
                                px-5 py-4 rounded-xl
                            ">

                                <div class="flex items-center gap-4">

                                    <span class="
                                        font-bold
                                        text-gray-500
                                        min-w-[35px]
                                    ">
                                        ${index + 1}.
                                    </span>

                                    <span class="text-lg">
                                        ${song.title}
                                    </span>

                                </div>

                                <span class="text-gray-500">
                                    ${song.duration || '--:--'}
                                </span>

                            </li>
                        `).join('')}

                    </ul>

                </section>

            </article>
        `

        document
            .getElementById('backButton')
            .addEventListener('click', () => {
                clear_containers()
                render_albums(last_rendered_albums)
            })

    } catch (err) {
        albums_container.innerHTML = `
            <p class="text-red-600 text-center">
                ${err.message}
            </p>
        `
    }
}

async function search_randoms_albums() {
    albums_container.innerHTML = '<p class="text-slate-500 text-center w-full">Cargando álbumes...</p>'
    try {
        const random_page = Math.floor(Math.random() * 100) + 1
        const url = `${SEARCH_URL}?&type=master&page=${random_page}&per_page=20&token=${TOKEN}`
        const res = await fetch(url)
        clear_containers()

        if (!res.ok) throw new Error('Error al cargar álbumes')
        const data = await res.json()

        render_albums(data.results)
    } catch (err) {
        albums_container.innerHTML = `<p class="text-red-600 text-center">${err.message}</p>`
    }
}

function render_albums(albums) {
    last_rendered_albums = albums
    albums_container.className = default_albums_container_class

    if (!albums.length) {
        albums_container.innerHTML = '<p class="text-gray-500 text-center w-full">No se encontraron álbumes.</p>'
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

            <button class="view-album text-sm text-blue-500" data-id="${id}">
                Ver más
            </button>
        `

        albums_container.appendChild(card)
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

            const album = {
                id: id,
                title: h.closest('article').querySelector('h3').textContent,
                cover_image: h.closest('article').querySelector('img').src
            }

            save_fav_state(album, newFav)

            h.innerHTML = newFav ? '&#128153;' : '&#129293;'
            h.dataset.fav = newFav
        })
    });
}

function save_fav_state(album, fav) {
    const favs = JSON.parse(localStorage.getItem('favs') || '{}')

    if (fav) {
        favs[album.id] = {
            id: album.id,
            title: album.title,
            cover_image: album.cover_image
        }
    } else {
        delete favs[album.id]
    }

    localStorage.setItem('favs', JSON.stringify(favs))
}

function get_fav_state(id) {
    const favs = JSON.parse(localStorage.getItem('favs') || '{}')
    return favs[id] || false
}

function get_all_favs() {
    return JSON.parse(localStorage.getItem('favs') || '{}')
}

function add_events_details() {
    const buttons = document.querySelectorAll('.view-album')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id
            show_album_page(id)
        })
    })
}

function clear_containers() {
    albums_container.innerHTML = ''
    header_container.innerHTML = ''
}