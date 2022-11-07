export const PokemonMocks: Pokemon[] = [
  {
    id: "002",
    number: 2,
    name: "Ivysaur",
    weight: {
      minimum: "11.38kg",
      maximum: "14.63kg",
    },
    height: {
      minimum: "0.88m",
      maximum: "1.13m",
    },
    types: ["Grass", "Poison"],
    maxCP: 1483,
    maxHP: 1632,
    evolutions: [
      {
        id: "003",
        name: "Venusaur",
        image: "https://img.pokemondb.net/artwork/venusaur.jpg",
        types: ["Grass", "Poison"],
        isFavorite: false,
      },
    ],
    previousEvolutions: [
      {
        id: "001",
        name: "Bulbasaur",
        image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
        types: ["Grass", "Poison"],
        isFavorite: true,
      },
    ],
    image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
    sound: "https://play.pokemonshowdown.com/audio/cries/ivysaur.mp3",
    isFavorite: true,
  },
  {
    id: "004",
    number: 4,
    name: "Charmander",
    weight: {
      minimum: "7.44kg",
      maximum: "9.56kg",
    },
    height: {
      minimum: "0.53m",
      maximum: "0.68m",
    },
    types: ["Fire"],
    maxCP: 841,
    maxHP: 955,
    evolutions: [
      {
        id: "005",
        name: "Charmeleon",
        image: "https://img.pokemondb.net/artwork/charmeleon.jpg",
        types: ["Fire"],
        isFavorite: false,
      },
      {
        id: "006",
        name: "Charizard",
        image: "https://img.pokemondb.net/artwork/charizard.jpg",
        types: ["Fire", "Flying"],
        isFavorite: false,
      },
    ],
    previousEvolutions: [],
    image: "https://img.pokemondb.net/artwork/charmander.jpg",
    sound: "https://play.pokemonshowdown.com/audio/cries/charmander.mp3",
    isFavorite: false,
  },
];
