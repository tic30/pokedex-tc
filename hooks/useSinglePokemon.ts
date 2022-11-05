import { gql, OperationVariables, QueryResult, useQuery } from "@apollo/client";

export const SinglePokemonQuery = gql`
query PokemonByName($name: String!) {
    pokemonByName(name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      } 
      height {
        minimum
        maximum
      }
      types
      maxCP
      maxHP
      evolutions {
        id
        name
      }
      previousEvolutions {
        id
        name
      }
      image
      sound
      isFavorite
    }
}
`;

export const useSinglePokemon = (variables: OperationVariables): QueryResult<PokemonByName> => {
  return useQuery(SinglePokemonQuery, {
        variables
    });
};
