import { gql, useQuery } from "@apollo/client";

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

export const usePokemons = (variables: any) => {
    const defaultVariables = {
        offset: 0
    }
    const result = useQuery(BulkPokemonQuery, {
        variables: {
            ...defaultVariables,
            ...variables
        }
    });

    return result;
};
