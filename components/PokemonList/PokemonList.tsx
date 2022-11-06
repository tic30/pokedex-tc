import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import PokemonCard from "../PokemonCard";
import styles from "./PokemonList.styles";
import { useFavorite } from "../../hooks/useFavorite";

interface PokemonListProps {
  items: Pokemon[];
  fetchMore: any;
  refetch: any;
}

const PokemonList: React.FC<PokemonListProps> = ({
  items,
  fetchMore,
  refetch,
}) => {
  const [currentLastItem, setCurrentLastItem] = useState();
  const isEndofList = useIntersectionObserver(currentLastItem);
  const favoriteActions = useFavorite(refetch);

  const registerEndElement = (item: any) => {
    setCurrentLastItem(item);
  };

  useEffect(() => {
    if (isEndofList) {
      fetchMore();
    }
  }, [isEndofList]);

  return (
    <Box sx={styles.listWrapper}>
      <Box sx={styles.list}>
        {items.map((pokemonData, index) => {
          return (
            <PokemonCard
              key={pokemonData.name}
              pokemonData={pokemonData}
              favoriteActions={favoriteActions}
              compressed={true}
              ref={(item) => {
                if (index === items.length - 1) {
                  registerEndElement(item);
                }
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default PokemonList;
