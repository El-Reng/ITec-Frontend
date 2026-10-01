import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritosContext from "./context/FavoritosContext";

function Favoritos() {
  const { favoritos, quitarFavorito } = useContext(FavoritosContext);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            Tu colección
          </p>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-black tracking-tight md:text-5xl">
                Mis favoritos
              </h1>

              <p className="mt-3 text-slate-400">
                Los juegos que decidiste guardar para volver a ellos.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-3">
              <p className="text-sm text-slate-400">Juegos guardados</p>
              <p className="text-2xl font-black text-blue-400">
                {favoritos.length}
              </p>
            </div>
          </div>
        </div>

        {favoritos.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-12 text-center">
            <p className="mb-3 text-4xl">🎮</p>

            <h2 className="mb-2 text-2xl font-bold">Tu colección está vacía</h2>

            <p className="mb-6 text-slate-400">
              Explorá el catálogo y agregá algunos juegos a favoritos.
            </p>

            <Link
              to="/juegos"
              className="inline-block rounded-lg bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-500"
            >
              Explorar juegos →
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {favoritos.map((juego) => (
              <div
                key={juego.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:border-blue-500/50 md:flex-row"
              >
                {juego.background_image && (
                  <img
                    src={juego.background_image}
                    alt={juego.name}
                    className="h-40 w-full object-cover md:h-32 md:w-56"
                  />
                )}

                <div className="flex flex-1 flex-col justify-between gap-4 p-5 md:flex-row md:items-center">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {juego.name}
                    </h2>

                    {juego.rating && (
                      <p className="mt-1 text-sm text-yellow-400">
                        ★ {juego.rating}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Link
                      to={`/juegos/${juego.id}`}
                      className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                      Ver juego
                    </Link>

                    <button
                      onClick={() => quitarFavorito(juego.id)}
                      className="rounded-lg bg-red-600/90 px-4 py-2 font-semibold text-white transition hover:bg-red-500"
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Favoritos;
