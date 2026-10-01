import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";

import Inicio from "./Inicio";
import Juegos from "./Juegos";
import Juego from "./Juego";
import Favoritos from "./Favoritos";
import DetallesJuego from "./DetallesJuego";

function Buscador() {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");

  function buscar(evento) {
    evento.preventDefault();

    const texto = busqueda.trim();

    if (texto === "") {
      navigate("/juegos");
      return;
    }

    navigate(`/juegos?search=${encodeURIComponent(texto)}&page=1`);
  }

  return (
    <form onSubmit={buscar} className="hidden md:block">
      <input
        type="text"
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
        placeholder="Buscar juegos..."
        className="w-56 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
      />
    </form>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <nav className="border-b border-slate-800 bg-slate-950/95 px-6 py-4 shadow-lg">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
            <Link
              to="/"
              className="shrink-0 text-2xl font-black tracking-tight text-white transition hover:text-blue-400"
            >
              🎮 GameVault
            </Link>

            <Buscador />

            <div className="flex shrink-0 items-center gap-2">
              <Link
                to="/"
                className="rounded-lg px-4 py-2 font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Inicio
              </Link>

              <Link
                to="/juegos"
                className="rounded-lg px-4 py-2 font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Juegos
              </Link>

              <Link
                to="/favoritos"
                className="rounded-lg px-4 py-2 font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                Favoritos
              </Link>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/juegos" element={<Juegos />} />

            <Route path="/juegos/:id" element={<Juego />}>
              <Route path="detalles" element={<DetallesJuego />} />
            </Route>

            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
