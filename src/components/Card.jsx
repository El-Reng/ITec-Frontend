function Card({ name, email, phone }) {
  return (
    <div className="w-full bg-gray-800 border-gray-600 p-4 m-4 rounded-2xl shadow-lg">
      <section className="flex items-center gap-6">
        <div className="w-12 h-12 bg-blue-900 flex items-center justify-center rounded-full text-white text-lg font-bold hover:bg-blue-800">
          {name ? name.charAt(0).toUpperCase() : ""}
        </div>
        <div className="text-start">
          <p>{name}</p>
          <p className="text-gray-600">{email}</p>
        </div>
      </section>
      <section className="mt-4 border-t pt-4 border-gray-700 text-gray-600">
        <p className="mt-4 text-sm">
          Teléfono: <span className="font-bold">{phone}</span>
        </p>
      </section>
    </div>
  );
}

export default Card;
