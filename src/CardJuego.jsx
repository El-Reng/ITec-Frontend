import { Link } from "react-router-dom";

function CardJuego({ juego }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-blue-900/20">
      {juego.background_image ? (
        <div className="relative overflow-hidden">
          <img
            src={juego.background_image}
            alt={juego.name}
            className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent" />

          {juego.rating && (
            <div className="absolute right-3 top-3 rounded-lg border border-slate-700 bg-slate-950/90 px-3 py-1 text-sm font-bold text-yellow-400">
              ★ {juego.rating}
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-52 items-center justify-center bg-slate-800">
          <span className="text-slate-500">Sin imagen</span>
        </div>
      )}

      <div className="p-5">
        <h2 className="mb-2 min-h-14 line-clamp-2 text-xl font-bold text-white">
          {juego.name}
        </h2>

        <p className="mb-5 text-sm text-slate-500">
          {juego.released
            ? `Lanzamiento: ${juego.released}`
            : "Fecha no disponible"}
        </p>

        <Link
          to={`/juegos/${juego.id}`}
          className="block rounded-lg bg-blue-600 px-4 py-3 text-center font-bold text-white transition hover:bg-blue-500"
        >
          Ver juego →
        </Link>
      </div>
    </div>
  );
}

export default CardJuego;
