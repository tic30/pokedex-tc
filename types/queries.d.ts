interface BulkPokemonQueryType {
  pokemons: {
    count: number;
    edges: Pokemon[];
  };
}

interface BulkPokemonQueryInput {
  offset: number;
  search: string;
  type: string;
  isFavorite?: boolean;
}

interface SinglePokemonQueryType {
  pokemonByName: Pokemon;
}

interface SinglePokemonQueryInput {
  name: string;
}

interface FavoUnfavoResponseBody {
  id: string;
  isFavorite: boolean;
}

interface FavoritePokemonMutationType {
  favoritePokemon: FavoUnfavoResponseBody;
}

interface UnFavoritePokemonMutationType {
  unFavoritePokemon: FavoUnfavoResponseBody;
}

interface FavoUnfavoPokemonMutationInput {
  id: string;
}

interface PokemonTypesQueryResult {
  pokemonTypes: string[];
}
