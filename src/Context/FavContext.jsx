import React from "react";

const FavContext = React.createContext({
    favoritePokemons: [],
    actualizarFavPokemons: (id) => null
});

export const FavPokemonsProvider = FavContext.Provider;

export default FavContext;