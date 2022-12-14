import { gql, QueryResult, useQuery } from "@apollo/client";

export const BulkPokemonQuery = gql`
  query Pokemons(
    $offset: Int!
    $search: String
    $type: String
    $isFavorite: Boolean
  ) {
    pokemons(
      query: {
        limit: 20
        offset: $offset
        search: $search
        filter: { type: $type, isFavorite: $isFavorite }
      }
    ) {
      count
      edges {
        id
        name
        image
        types
        isFavorite
      }
    }
  }
`;

export const usePokemons = (
  variables: BulkPokemonQueryInput
): QueryResult<BulkPokemonQueryType> => {
  return useQuery<BulkPokemonQueryType>(BulkPokemonQuery, {
    variables,
  });
};
