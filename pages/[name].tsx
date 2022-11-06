import { Button, CircularProgress } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import PokemonCard from "../components/PokemonCard";
import { useSinglePokemon } from "../hooks/useSinglePokemon";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { useFavorite } from "../hooks/useFavorite";

const PolemonDetailPage: React.FC = () => {
  const { asPath } = useRouter();
  const name = asPath.slice(1).toLowerCase();
  const {
    data: pokemonData,
    error,
    loading,
    refetch,
  } = useSinglePokemon({
    name,
  });
  const favoriteActions = useFavorite(refetch);

  if (error) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{`Pokedex - ${name}`}</title>
        <meta name="description" content={`Detail about ${name}`} />
      </Head>
      <Button startIcon={<KeyboardArrowLeftIcon />} component={Link} href="/">
        Back
      </Button>
      {loading ? (
        <CircularProgress />
      ) : (
        <PokemonCard
          pokemonData={pokemonData!!.pokemonByName}
          favoriteActions={favoriteActions}
        />
      )}
    </>
  );
};

export default PolemonDetailPage;
