import { createContext, useState } from "react";

const FavoritosContext = createContext();

function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  function agregarFavorito(juego) {
    setFavoritos((favoritosActuales) => {
      const yaExiste = favoritosActuales.some(
        (juegoFavorito) => juegoFavorito.id === juego.id,
      );

      if (yaExiste) {
        return favoritosActuales;
      }

      return [...favoritosActuales, juego];
    });
  }

  function quitarFavorito(id) {
    setFavoritos((favoritosActuales) =>
      favoritosActuales.filter((juego) => juego.id !== id),
    );
  }

  return (
    <FavoritosContext.Provider
      value={{ favoritos, agregarFavorito, quitarFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}

export { FavoritosProvider };
export default FavoritosContext;
