import { PokemonMocks } from "../../testing/__mocks__/pokemonMock";
import { sortById } from "../sortById";

describe("utils/sortById", () => {
  it("customer sorting function: larger id first should produce positive result", () => {
    expect(sortById(PokemonMocks[1], PokemonMocks[0])).toBeGreaterThan(0);
  });
});
