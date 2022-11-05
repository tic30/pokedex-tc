import { Box } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import PokemonCard from "../components/PokemonCard";
import { useSinglePokemon } from "../hooks/useSinglePokemon";

interface PolemonDetailPageProps {
  pokemonData: Pokemon;
}

const PolemonDetailPage: React.FC<PolemonDetailPageProps> = () => {
  const { asPath } = useRouter();
  const name = asPath.slice(1).toLowerCase();
  const {
    data: pokemonData,
    error,
    loading,
  } = useSinglePokemon({
    name,
  });
  if (loading) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{`Pokedex - ${name}`}</title>
        <meta name="description" content={`Detail about ${name}`} />
      </Head>
      <Link href="/">Back</Link>
      <PokemonCard pokemonData={pokemonData.pokemonByName} />
    </>
  );
};

export default PolemonDetailPage;
