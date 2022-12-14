import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Button, CircularProgress } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import PokemonCard from "../components/PokemonCard";
import { useSinglePokemon } from "../hooks/useSinglePokemon";
import { useFavorite } from "../hooks/useFavorite";
import Page404, { PageCenterContainer } from "../components/Page404";
import { blueGrey } from "@mui/material/colors";
import client from "../utils/apollo-client";
import { BulkPokemonQuery } from "../hooks/usePokemons";

const PolemonDetailPage: React.FC = () => {
  const { asPath } = useRouter();
  const name = asPath.slice(1).toLowerCase();
  const {
    data: pokemonData,
    error,
    loading,
  } = useSinglePokemon({
    name,
  });
  const favoriteActions = useFavorite();

  if (loading) {
    return (
      <PageCenterContainer>
        <CircularProgress />
      </PageCenterContainer>
    );
  } else if (error || !pokemonData?.pokemonByName) {
    return <Page404 />;
  }

  return (
    <>
      <Head>
        <title>{`Pokedex - ${name}`}</title>
        <meta name="description" content={`Detail about ${name}`} />
      </Head>
      <Box sx={{ p: 2, bgcolor: blueGrey[50] }}>
        <Button
          startIcon={<KeyboardArrowLeftIcon />}
          component={Link}
          href="/"
          sx={{ mb: 2 }}
        >
          Back to list
        </Button>
        <PokemonCard
          pokemonData={pokemonData!!.pokemonByName}
          favoriteActions={favoriteActions}
          showDetail={true}
        />
      </Box>
    </>
  );
};

/**
 * Generate static pages for all detail pages
 */
export async function getStaticPaths() {
  const { data: firstQueryData } = await client.query<BulkPokemonQueryType>({
    query: BulkPokemonQuery,
    variables: {
      offset: 0,
    },
  });
  let finalData = [...firstQueryData.pokemons.edges];
  const repeatTime = Math.ceil(firstQueryData.pokemons.count / 20) - 1;
  for (let i = 0; i < repeatTime; i++) {
    const { data } = await client.query<BulkPokemonQueryType>({
      query: BulkPokemonQuery,
      variables: {
        offset: (i + 1) * 20,
      },
    });
    finalData = [...finalData, ...data.pokemons.edges];
  }

  return {
    paths: finalData.map((d) => ({
      params: {
        name: d.name,
      },
    })),
    fallback: false,
  };
}

export function getStaticProps() {
  return {
    props: {},
  };
}

export default PolemonDetailPage;
