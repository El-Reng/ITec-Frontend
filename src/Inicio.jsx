import { Link } from "react-router-dom";

function Inicio() {
  return (
    <main className="relative overflow-hidden bg-slate-950">
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-32 top-40 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />

      <section className="relative mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-blue-400">
            Tu catálogo gamer
          </p>

          <h1 className="mb-6 text-5xl font-black tracking-tight text-white md:text-7xl">
            Descubrí tu próximo
            <span className="block text-blue-400">videojuego favorito.</span>
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            Explorá videojuegos, descubrí información sobre cada título y guardá
            tus favoritos en un solo lugar.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/juegos"
              className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              Explorar juegos →
            </Link>
          </div>

          <div className="mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              href="https://github.com/El-Reng/ITec-Frontend/tree/TP03-REACT-MPA"
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800"
            >
              <p className="text-3xl">💻</p>

              <p className="mt-4 text-xl font-bold text-white">Este proyecto</p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Código fuente de este Trabajo Práctico Evaluativo disponible en
                GitHub.
              </p>

              <p className="mt-4 font-semibold text-blue-400 transition group-hover:text-blue-300">
                Ver repositorio →
              </p>
            </a>

            <a
              href="https://rawg.io/apidocs"
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-800"
            >
              <p className="text-3xl">⚡</p>

              <p className="mt-4 text-xl font-bold text-white">API de RAWG</p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                API pública utilizada por GameVault para obtener información
                sobre videojuegos.
              </p>

              <p className="mt-4 font-semibold text-blue-400 transition group-hover:text-blue-300">
                Ver documentación →
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Inicio;
