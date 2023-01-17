import React from "react";

const FavPokemonsContext = React.createContext({
    favoritePokemons: [],
    actualizarFavPokemons: (id) => null
});

export const FavPokemonsProvider = FavPokemonsContext.Provider;

export default FavPokemonsContext;