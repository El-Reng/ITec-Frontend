import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import FavoritosContext from "./context/FavoritosContext";
import { API_KEY } from "./config";

function Juego() {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const { favoritos, agregarFavorito, quitarFavorito } =
    useContext(FavoritosContext);

  const esFavorito = favoritos.some(
    (juegoFavorito) => juegoFavorito.id === Number(id),
  );

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar el juego");
        }

        return respuesta.json();
      })
      .then((datos) => {
        setJuego(datos);
        setCargando(false);
      })
      .catch((error) => {
        setError("No se pudo cargar el juego");
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-slate-950">
        <p className="text-lg text-slate-400">Cargando juego...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-slate-950">
        <p className="text-lg text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          {juego.background_image && (
            <img
              src={juego.background_image}
              alt={juego.name}
              className="h-72 w-full object-cover"
            />
          )}

          <div className="p-6 md:p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">
              Videojuego
            </p>

            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              {juego.name}
            </h1>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm text-slate-400">Fecha de lanzamiento</p>
                <p className="mt-1 text-lg font-semibold">
                  {juego.released || "No disponible"}
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm text-slate-400">Puntuación</p>
                <p className="mt-1 text-lg font-semibold text-blue-400">
                  {juego.rating || "No disponible"}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  if (esFavorito) {
                    quitarFavorito(juego.id);
                  } else {
                    agregarFavorito(juego);
                  }
                }}
                className={`rounded-lg px-5 py-3 font-semibold transition ${
                  esFavorito
                    ? "bg-red-600 hover:bg-red-500"
                    : "bg-blue-600 hover:bg-blue-500"
                }`}
              >
                {esFavorito ? "× Quitar de favoritos" : "+ Agregar a favoritos"}
              </button>

              <Link
                to="detalles"
                className="rounded-lg border border-slate-700 bg-slate-800 px-5 py-3 font-semibold transition hover:bg-slate-700"
              >
                Ver detalles
              </Link>

              <Link
                to="/juegos"
                className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
              >
                Volver a juegos
              </Link>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-6">
              <Outlet context={{ juego }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Juego;
