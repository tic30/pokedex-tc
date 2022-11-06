import { useState } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import Filters from "../components/Filters";
import PokemonList from "../components/PokemonList";
import { usePokemons } from "../hooks/usePokemons";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Home: React.FC = () => {
  const { data, error, loading, fetchMore, refetch } = usePokemons({
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
      <PageContainer>
        <Filters filters={filters} setFilters={setFilters} />
        <PokemonList items={list} fetchMore={onFetchMore} refetch={refetch} />
      </PageContainer>
      {loading && <CircularProgress />}
    </>
  );
};

export default Home;
