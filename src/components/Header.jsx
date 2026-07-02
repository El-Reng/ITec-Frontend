function Header({ onOpenFavorites }) {
  return (
    <header className="w-full bg-neutral-800 p-6 shadow-lg">
      <nav className="flex justify-between items-center">
        <h1 className="text-white text-5xl font-bold">Tasks</h1>

        <div className="flex gap-6 items-center">
          <button
            onClick={onOpenFavorites}
            className="text-yellow-400 hover:text-yellow-300 transition text-xl flex items-center gap-2"
          >
            ⭐ Favoritos
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
