import { Box } from "@mui/material";
import Head from "next/head";
// import Image from 'next/image'
import client from "../utils/apollo-client";
import { BulkPokemonQuery } from "../hooks/usePokemons";
import { useState } from "react";
import PokemonList from "../components/PokemonList";

interface HomeProps {
  initialList: Pokemon[];
}

const Home: React.FC<HomeProps> = ({ initialList }) => {
  const [list, setList] = useState(initialList);

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex" />
      </Head>
      <PokemonList items={list} />
    </>
  );
};

export async function getServerSideProps() {
  const { data, error } = await client.query({
    query: BulkPokemonQuery,
    variables: {
      offset: 0,
    },
  });
  // 404 page

  return {
    props: {
      initialList: data.pokemons.edges,
    },
  };
}

export default Home;
