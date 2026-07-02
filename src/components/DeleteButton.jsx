function DeleteButton({ id, onDelete }) {
  return (
    <button
      onClick={() => onDelete(id)}
      className="bg-red-700 hover:bg-red-600 px-4 py-2 rounded-xl text-white"
    >
      🗑 Eliminar
    </button>
  );
}

export default DeleteButton;
