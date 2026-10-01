import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { API_KEY } from "./config";
import CardJuego from "./CardJuego";

function Juegos() {
  const [juegos, setJuegos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const pagina = Number(searchParams.get("page")) || 1;
  const busqueda = searchParams.get("search") || "";

  const [totalJuegos, setTotalJuegos] = useState(0);

  const juegosPorPagina = 20;
  const totalPaginas = Math.ceil(totalJuegos / juegosPorPagina);

  useEffect(() => {
    setCargando(true);
    setError(null);

    let url =
      `https://api.rawg.io/api/games?key=${API_KEY}` +
      `&page=${pagina}` +
      `&page_size=${juegosPorPagina}`;

    if (busqueda) {
      url += `&search=${encodeURIComponent(busqueda)}`;
    }

    fetch(url)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudieron cargar los juegos");
        }

        return respuesta.json();
      })
      .then((datos) => {
        setJuegos(datos.results);
        setTotalJuegos(datos.count);
        setCargando(false);
      })
      .catch(() => {
        setError("No se pudieron cargar los juegos");
        setCargando(false);
      });
  }, [pagina, busqueda]);

  function cambiarPagina(nuevaPagina) {
    const nuevosParametros = new URLSearchParams(searchParams);

    nuevosParametros.set("page", nuevaPagina);

    setSearchParams(nuevosParametros);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (cargando) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-lg text-slate-400">
            Cargando juegos...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border border-red-900 bg-red-950/40 p-6 text-center">
            <p className="text-red-400">{error}</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            Catálogo
          </p>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight md:text-5xl">
                {busqueda ? `Resultados para "${busqueda}"` : "Explorá juegos"}
              </h1>

              <p className="mt-3 max-w-2xl text-slate-400">
                {busqueda
                  ? "Encontrá videojuegos relacionados con tu búsqueda."
                  : "Descubrí nuevos títulos, consultá su información y guardá tus favoritos."}
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3">
              <p className="text-sm text-slate-400">Juegos disponibles</p>

              <p className="text-2xl font-black text-blue-400">
                {totalJuegos.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {juegos.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-12 text-center">
            <p className="mb-3 text-4xl">🎮</p>

            <h2 className="mb-2 text-2xl font-bold">No encontramos juegos</h2>

            <p className="text-slate-400">
              Probá con otro término de búsqueda.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {juegos.map((juego) => (
              <CardJuego key={juego.id} juego={juego} />
            ))}
          </div>
        )}

        {totalPaginas > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              onClick={() => cambiarPagina(pagina - 1)}
              disabled={pagina === 1}
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Anterior
            </button>

            <div className="rounded-lg border border-slate-800 bg-slate-900 px-5 py-3 text-center">
              <p className="text-sm text-slate-400">Página</p>

              <p className="font-bold text-white">
                {pagina} de {totalPaginas.toLocaleString()}
              </p>
            </div>

            <button
              onClick={() => cambiarPagina(pagina + 1)}
              disabled={pagina === totalPaginas}
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Siguiente →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Juegos;
