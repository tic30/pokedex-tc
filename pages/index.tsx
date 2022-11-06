import { useEffect, useState } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import Filters, { FiltersType } from "../components/Filters";
import PokemonList from "../components/PokemonList";
import { usePokemons } from "../hooks/usePokemons";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Home: React.FC = () => {
  const [filters, setFilters] = useState<FiltersType>({
    search: "",
    type: "",
    isFavorite: false,
    isGrid: true,
  });
  const { data, error, loading, fetchMore, refetch } = usePokemons({
    offset: 0,
    search: filters.search,
    type: filters.type,
    isFavorite: filters.isFavorite ? filters.isFavorite : undefined,
  });
  const list = data?.pokemons?.edges || []; //TODO: build empty page
  const totalCount = data?.pokemons?.count || 0;

  const onFetchMore = () => {
    if (list.length < totalCount) {
      fetchMore({
        variables: {
          offset: list.length,
        },
        updateQuery: (
          prevResult: BulkPokemonQueryType,
          { fetchMoreResult }: { fetchMoreResult: BulkPokemonQueryType }
        ) => fetchMoreResult ?? prevResult,
      });
    }
  };

  useEffect(() => {
    if (filters.isFavorite) {
      refetch();
    }
  }, [filters.isFavorite, refetch]);

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex" />
      </Head>
      <PageContainer>
        <Filters filters={filters} setFilters={setFilters} />
        <PokemonList
          items={list}
          fetchMore={onFetchMore}
          refetch={refetch}
          filters={filters}
        />
      </PageContainer>
      {loading && <CircularProgress />}
    </>
  );
};

export default Home;
