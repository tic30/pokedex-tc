import { Box, CircularProgress } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import Filters from "../components/Filters";
import PokemonList from "../components/PokemonList";
import { usePokemons } from "../hooks/usePokemons";

const Home: React.FC = () => {
  const { data, error, loading, fetchMore } = usePokemons({
    offset: 0,
  });
  const [filters, setFilters] = useState({
    searchPhrase: "",
    type: "",
    isFavorite: false,
    isGrid: true,
  });
  const list = data?.pokemons?.edges || [];
  const totalCount = data?.pokemons?.count || 0;

  const onFetchMore = () => {
    if (list.length < totalCount) {
      fetchMore({
        variables: {
          offset: list.length,
        },
        updateQuery: (
          prevResult: PokemonConnection,
          { fetchMoreResult }: { fetchMoreResult: PokemonConnection }
        ) => fetchMoreResult ?? prevResult,
      });
    }
  };

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex" />
      </Head>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <Filters filters={filters} setFilters={setFilters} />
        <PokemonList items={list} fetchMore={onFetchMore} />
      </Box>
      {loading && <CircularProgress />}
    </>
  );
};

export default Home;
