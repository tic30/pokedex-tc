import { Box, CircularProgress } from "@mui/material";
import Head from "next/head";
// import Image from 'next/image'
import { useRef, useState } from "react";
import PokemonList from "../components/PokemonList";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { usePokemons } from "../hooks/usePokemons";

const Home: React.FC = () => {
  // const [list, setList] = useState(initialList);
  const { data, error, loading, fetchMore } = usePokemons({
    offset: 0,
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
      <PokemonList items={list} fetchMore={onFetchMore} />
      {loading && <CircularProgress />}
    </>
  );
};

export default Home;
