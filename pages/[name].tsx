import { Box, Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import PokemonCard from "../components/PokemonCard";
import { useSinglePokemon } from "../hooks/useSinglePokemon";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

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
  if (loading || !pokemonData) {
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
      <PokemonCard pokemonData={pokemonData.pokemonByName} />
    </>
  );
};

export default PolemonDetailPage;
