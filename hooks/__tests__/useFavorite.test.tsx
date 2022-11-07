import { PropsWithChildren } from "react";
import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { FavoritePokemonMutation, useFavorite } from "../useFavorite";

describe("useFavorite", () => {
  const wrapper = ({ children }: PropsWithChildren): React.ReactElement => (
    <MockedProvider
      mocks={[
        {
          request: {
            query: FavoritePokemonMutation,
            variables: {
              id: "1",
            },
          },
          result: {
            data: {
              favoritePokemon: {
                id: "1",
                isFavorite: true,
              },
            },
          },
        },
      ]}
    >
      {children}
    </MockedProvider>
  );

  it("when favorite mutation succeeds, refetch should be called", async () => {
    const refetchMock = jest.fn();
    const { result } = renderHook(() => useFavorite(refetchMock, true), {
      wrapper,
    });
    await act(async () => {
      await result.current.setFavorite({
        variables: {
          id: "1",
        },
      });
    });
    expect(refetchMock).toBeCalled();
  });
});
