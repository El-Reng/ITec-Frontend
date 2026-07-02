import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import TaskPanel from "./components/TaskPanel";
import Page from "./pages/Page";

const API_URL = "http://localhost:8000/tareas";

function App() {
  const [taskEditando, setTaskEditando] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [mostrarFav, setMostrarFav] = useState(false);
  const [reload, setReload] = useState(false);

  function refrescar() {
    setReload((prev) => !prev);
  }

  // CREATE
  async function crearTarea(task) {
    const response = await axios.get(`${API_URL}/`);
    const tasks = response.data;

    const existe = tasks.some((t) => t.id === Number(task.id));

    if (existe) {
      alert("La ID ingresada ya existe");
      return;
    }

    await axios.post(`${API_URL}/`, {
      ...task,
      id: Number(task.id),
    });

    refrescar();
  }

  // UPDATE
  async function editarTarea(id, tarea) {
    await axios.put(`${API_URL}/${id}`, tarea);
    setTaskEditando(null);
    refrescar();
  }

  // DELETE
  async function eliminarTarea(id) {
    await axios.delete(`${API_URL}/${id}`);
    refrescar();
  }

  // FAVORITOS
  function abrirFavoritos() {
    const data = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(data);
    setMostrarFav(true);
  }

  function cerrarFavoritos() {
    setMostrarFav(false);
  }

  useEffect(() => {}, []);

  return (
    <>
      <Header onOpenFavorites={abrirFavoritos} />

      <main className="flex bg-neutral-900 min-h-screen">
        <TaskPanel
          onSave={crearTarea}
          tareaEditando={taskEditando}
          onUpdate={editarTarea}
        />

        {/* PAGE = SOLO GET + RENDER */}
        <Page
          reload={reload}
          onDelete={eliminarTarea}
          onEdit={setTaskEditando}
        />

        {/* FAVORITOS */}
        {mostrarFav && (
          <div className="fixed top-0 right-0 w-96 h-full bg-neutral-900 border-l border-neutral-700 p-6">
            <h2 className="text-white text-2xl mb-4">⭐ Favoritos</h2>

            {favoritos.length === 0 ? (
              <p className="text-neutral-400">No hay favoritos</p>
            ) : (
              favoritos.map((t) => (
                <div key={t.id} className="mb-3 p-3 bg-neutral-800 rounded">
                  <p className="text-white">{t.titulo}</p>
                  <p className="text-neutral-400 text-sm">ID: {t.id}</p>
                </div>
              ))
            )}

            <button onClick={cerrarFavoritos} className="mt-4 text-red-400">
              Cerrar
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
