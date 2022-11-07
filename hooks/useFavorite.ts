import {
  gql,
  MutationFunctionOptions,
  ObservableQuery,
  useMutation,
} from "@apollo/client";

export const FavoritePokemonMutation = gql`
  mutation FavoritePokemon($id: ID!) {
    favoritePokemon(id: $id) {
      id
      isFavorite
    }
  }
`;

export const UnFavoritePokemonMutation = gql`
  mutation UnFavoritePokemon($id: ID!) {
    unFavoritePokemon(id: $id) {
      id
      isFavorite
    }
  }
`;

export type RefetchType = InstanceType<typeof ObservableQuery>["refetch"];

export type UseFavoriteReturnType = {
  setFavorite: (
    options: MutationFunctionOptions<
      FavoritePokemonMutationType,
      FavoUnfavoPokemonMutationInput
    >
  ) => Promise<void>;
  setUnfavorite: (
    options: MutationFunctionOptions<
      UnFavoritePokemonMutationType,
      FavoUnfavoPokemonMutationInput
    >
  ) => Promise<void>;
};

/**
 * This hook favorites/unfavorites an individual Pokemon
 * @param refetch The bulk query refetch function, which is called only in favorite tab to update the list
 * @param isFavoriteTab
 * @returns `setFavorite` and `setUnfavorite` functions
 */
export const useFavorite = (
  refetch?: RefetchType,
  isFavoriteTab = false
): UseFavoriteReturnType => {
  const [setFavoriteMutation] = useMutation<
    FavoritePokemonMutationType,
    FavoUnfavoPokemonMutationInput
  >(FavoritePokemonMutation);
  const [setUnfavoriteMutation] = useMutation<
    UnFavoritePokemonMutationType,
    FavoUnfavoPokemonMutationInput
  >(UnFavoritePokemonMutation);

  const setFavorite = (
    options: MutationFunctionOptions<
      FavoritePokemonMutationType,
      FavoUnfavoPokemonMutationInput
    >
  ) => {
    return setFavoriteMutation(options).then(() => {
      if (refetch && isFavoriteTab) {
        refetch();
      }
    });
  };

  const setUnfavorite = (
    options: MutationFunctionOptions<
      UnFavoritePokemonMutationType,
      FavoUnfavoPokemonMutationInput
    >
  ) => {
    return setUnfavoriteMutation(options).then(() => {
      if (refetch && isFavoriteTab) {
        refetch();
      }
    });
  };

  return {
    setFavorite,
    setUnfavorite,
  };
};
