import { gql, QueryResult, useQuery } from "@apollo/client";

export const PokemonTypesQuery = gql`
query PokemonByName {
    pokemonTypes
}
`;

export const useType = (): QueryResult<PokemonTypesQueryResult> => {
  return useQuery(PokemonTypesQuery);
};
