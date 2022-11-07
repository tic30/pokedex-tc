import { useEffect, useState } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { CircularProgress, Typography } from "@mui/material";
import Filters, { FiltersType } from "../components/Filters";
import PokemonList from "../components/PokemonList";
import { usePokemons } from "../hooks/usePokemons";
import { PageCenterContainer } from "../components/Page404";
import { grey } from "@mui/material/colors";

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
  const {
    data,
    error: apiError,
    loading,
    fetchMore,
    refetch,
  } = usePokemons({
    offset: 0,
    search: filters.search,
    type: filters.type,
    isFavorite: filters.isFavorite ? filters.isFavorite : undefined,
  });
  const list = data?.pokemons?.edges || [];
  const totalCount = data?.pokemons?.count || 0;
  const error = apiError || list.length === 0;

  // This plus custom merge function in utils/apollo-client achieves infinite scroll
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
    // Refetch on load of the favorite tab to get the most up to date data
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
        {!loading && error ? (
          <PageCenterContainer>
            <Typography variant="h5" color={grey[500]}>
              No pokemon here
            </Typography>
          </PageCenterContainer>
        ) : (
          <PokemonList
            items={list}
            fetchMore={onFetchMore}
            refetch={refetch}
            filters={filters}
          />
        )}
      </PageContainer>
      {loading && <CircularProgress />}
    </>
  );
};

export default Home;
