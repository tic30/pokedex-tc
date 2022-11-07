interface PokemonDimension {
  minimum: string;
  maximum: string;
}

interface Pokemon {
  id: string;
  name: string;
  number?: number;
  weight?: PokemonDimension;
  height?: PokemonDimension;
  types: string[];
  maxCP?: number;
  maxHP?: number;
  evolutions?: Pokemon[];
  previousEvolutions?: Pokemon[];
  image: string;
  sound?: string;
  isFavorite: boolean;
}
