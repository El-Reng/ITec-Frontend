function Header() {
  return (
    <header className="w-full bg-gray-800 pl-6 pr-6 shadow-lg">
      <nav className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">StoreDevs</h1>

        <div className="flex gap-6 pt-12">
          <a
            href="#"
            className="text-gray-500 hover:text-white hover:scale-120"
          >
            Sign In
          </a>

          <a
            href="#"
            className="text-gray-500 hover:text-white hover:scale-120"
          >
            Register
          </a>

          <a href="#" className="text-gray-500 hover:scale-120">
            🛒
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
