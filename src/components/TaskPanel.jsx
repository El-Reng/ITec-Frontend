import { useEffect, useState } from "react";

function TaskPanel({ onSave, tareaEditando, onUpdate }) {
  const [task, setTask] = useState({
    id: "",
    titulo: "",
    fecha: "",
    prioridad: "",
  });

  useEffect(() => {
    if (tareaEditando) {
      setTask({
        id: tareaEditando.id,
        titulo: tareaEditando.titulo,
        fecha: tareaEditando.fecha,
        prioridad: tareaEditando.prioridad,
      });
    }
  }, [tareaEditando]);

  function handleChange(e) {
    setTask({
      ...task,

      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (tareaEditando) {
      onUpdate(tareaEditando.id, task);
    } else {
      onSave(task);
    }

    setTask({
      id: "",
      titulo: "",
      fecha: "",
      prioridad: "",
    });
  }

  return (
    <aside className="w-80 bg-neutral-800 p-6">
      <h2 className="text-white text-xl mb-5">
        {tareaEditando ? "Editar tarea" : "Nueva tarea"}
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="id"
          type="number"
          value={task.id}
          onChange={handleChange}
          placeholder="ID"
          className="p-2 rounded bg-neutral-700 text-white"
        />

        <input
          name="titulo"
          value={task.titulo}
          onChange={handleChange}
          placeholder="Título"
          className="p-2 rounded bg-neutral-700 text-white"
        />

        <input
          name="fecha"
          value={task.fecha}
          onChange={handleChange}
          placeholder="Fecha"
          className="p-2 rounded bg-neutral-700 text-white"
        />

        <input
          name="prioridad"
          value={task.prioridad}
          onChange={handleChange}
          placeholder="Prioridad"
          className="p-2 rounded bg-neutral-700 text-white"
        />

        <button className="bg-blue-700 p-2 rounded-xl text-white">
          {tareaEditando ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </aside>
  );
}

export default TaskPanel;
