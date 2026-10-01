import { useOutletContext } from "react-router-dom";

function DetallesJuego() {
  const { juego } = useOutletContext();

  return (
    <div className="space-y-6">
      <div>
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
          Información adicional
        </p>

        <h2 className="text-3xl font-black">Detalles del juego</h2>
      </div>

      {juego.description_raw && (
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
          <h3 className="mb-3 text-xl font-bold">Descripción</h3>

          <p className="leading-7 text-slate-400">{juego.description_raw}</p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm text-slate-400">Géneros</p>

          <p className="mt-2 font-semibold">
            {juego.genres?.map((genero) => genero.name).join(", ") ||
              "No disponible"}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm text-slate-400">Plataformas</p>

          <p className="mt-2 font-semibold">
            {juego.platforms
              ?.map((plataforma) => plataforma.platform.name)
              .join(", ") || "No disponible"}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm text-slate-400">Desarrolladores</p>

          <p className="mt-2 font-semibold">
            {juego.developers
              ?.map((desarrollador) => desarrollador.name)
              .join(", ") || "No disponible"}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm text-slate-400">Publicadores</p>

          <p className="mt-2 font-semibold">
            {juego.publishers?.map((publisher) => publisher.name).join(", ") ||
              "No disponible"}
          </p>
        </div>
      </div>

      {juego.website && (
        <a
          href={juego.website}
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg bg-blue-600 px-5 py-3 font-bold transition hover:bg-blue-500"
        >
          Visitar sitio oficial →
        </a>
      )}
    </div>
  );
}

export default DetallesJuego;
