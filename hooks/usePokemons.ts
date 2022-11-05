import { gql, OperationVariables, QueryResult, useQuery } from "@apollo/client";

export const BulkPokemonQuery = gql`
query Pokemons($offset: Int!) {
  pokemons(query: { limit: 20, offset: $offset }) {
    count
    edges {
      name
      image
      types
      isFavorite
    }
  }
}
`;

export const usePokemons = (variables: OperationVariables): QueryResult<PokemonConnection> => {
    return useQuery(BulkPokemonQuery, {
        variables
    });
};
