interface PokemonDimension {
    minimum: string;
    maximum: string;
}

interface Pokemon {
    name: string;
    weight: PokemonDimension;
    height: PokemonDimension;
    types: string[];
    maxCP: number;
    maxHP: number;
    evolutions: Pokemon[]
    previousEvolutions: Pokemon[];
    image: string;
    sound: string;
    isFavorite: boolean
}

interface PokemonConnection {
    pokemons: {
        count: number;
        edges: Pokemon[]
    }
}

interface PokemonByName {
    pokemonByName: Pokemon 
}