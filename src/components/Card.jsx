import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:8000/tareas";

function Card({ task, onDelete, onEdit }) {
  const [isFav, setIsFav] = useState(false);
  const [open, setOpen] = useState(false);
  const [detalle, setDetalle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
    const exists = favs.some((t) => t.id === task.id);
    setIsFav(exists);
  }, [task.id]);

  function toggleFav() {
    const favs = JSON.parse(localStorage.getItem("favoritos")) || [];
    const exists = favs.some((t) => t.id === task.id);

    let updated;

    if (exists) {
      updated = favs.filter((t) => t.id !== task.id);
      setIsFav(false);
    } else {
      updated = [...favs, task];
      setIsFav(true);
    }

    localStorage.setItem("favoritos", JSON.stringify(updated));
  }

  async function toggleDetalle() {
    if (open) {
      setOpen(false);
      return;
    }

    try {
      setLoading(true);

      const response = await axios.get(`${API_URL}/${task.id}`);

      setDetalle(response.data);
      setOpen(true);
    } catch (error) {
      console.error("Error GET by id", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full bg-neutral-800 p-6 rounded-2xl shadow-lg">
      {/* HEADER */}
      <div className="flex justify-between items-start">
        <h2 className="text-white text-xl font-bold">{task.titulo}</h2>

        <button onClick={toggleFav} className="text-2xl">
          {isFav ? "💛" : "🤍"}
        </button>
      </div>

      {/* FECHA */}
      <p className="text-neutral-400 mt-2">Fecha: {task.fecha}</p>

      {/* BOTÓN DETALLE */}
      <button
        onClick={toggleDetalle}
        className="text-neutral-400 mt-3 flex items-center gap-2 hover:text-white"
      >
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
        Ver detalle
      </button>

      {/* DETALLE GET POR ID */}
      {open && (
        <div className="mt-3 text-neutral-300 border-t border-neutral-700 pt-3">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <>
              <p>
                <span className="text-white font-bold">ID:</span> {detalle?.id}
              </p>

              <p>
                <span className="text-white font-bold">Prioridad:</span>{" "}
                {detalle?.prioridad}
              </p>

              <p>
                <span className="text-white font-bold">Título:</span>{" "}
                {detalle?.titulo}
              </p>
            </>
          )}
        </div>
      )}

      {/* ACCIONES */}
      <div className="flex gap-3 mt-5">
        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-600 px-4 py-2 rounded-xl text-white"
        >
          ✏️ Editar
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-700 px-4 py-2 rounded-xl text-white"
        >
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
}

export default Card;
