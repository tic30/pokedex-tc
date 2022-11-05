import { Box } from "@mui/material";
import PokemonCard from "../PokemonCard";
import styles from "./PokemonList.styles";

interface PokemonListProps {
  items: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ items }) => {
  return (
    <Box sx={styles.list}>
      {items.map((pokemonData) => (
        <PokemonCard
          key={pokemonData.name}
          pokemonData={pokemonData}
          compressed={true}
        />
      ))}
    </Box>
  );
};

export default PokemonList;
