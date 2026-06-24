function Card({ image, title, description, price }) {
  return (
    <div className="w-full bg-gray-800 border-gray-600 p-6 rounded-2xl shadow-lg">
      <section className="flex items-center gap-6">
        <img
          src={image}
          alt="the product img"
          className="h-25 w-25 p-1 hover:scale-120"
        />
        <div className="text-start">
          <p className="text-white font-bold pb-1 line-clamp-1">{title}</p>
          <p className="text-gray-400 text-sm line-clamp-3">{description}</p>
        </div>
      </section>
      <section className="mt-4 border-t pt-4 border-gray-700 text-gray-400">
        <p className="mt-4 text-md hover:text-white hover:scale-130">
          $<span className="font-bold">{price}</span>
        </p>
      </section>
    </div>
  );
}

export default Card;
