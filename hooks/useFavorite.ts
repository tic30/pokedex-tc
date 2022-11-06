import { gql, useMutation } from "@apollo/client";

export const FavoritePokemonMutation = gql`
mutation FavoritePokemon($id: ID!) {
    favoritePokemon(id: $id) {
        id
    }
}
`;

export const UnFavoritePokemonMutation = gql`
mutation UnFavoritePokemon($id: ID!) {
    unFavoritePokemon(id: $id) {
        id
    }
}
`;

export const useFavorite = (refetch: any) => {
  const [setFavoriteMutation] = useMutation(FavoritePokemonMutation);
  const [setUnfavoriteMutation] = useMutation(UnFavoritePokemonMutation);

  const setFavorite = (options) => {
    return setFavoriteMutation(options).then(() => refetch())
  }

  const setUnfavorite = (options) => {
    return setUnfavoriteMutation(options).then(() => refetch())
  }

  return {
    setFavorite, setUnfavorite
  }
};
