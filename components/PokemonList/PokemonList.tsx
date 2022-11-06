import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import PokemonCard from "../PokemonCard";
import styles, { compressedStyles } from "./PokemonList.styles";
import { RefetchType, useFavorite } from "../../hooks/useFavorite";
import { FiltersType } from "../Filters";

interface PokemonListProps {
  items: Pokemon[];
  filters: FiltersType;
  fetchMore: () => void;
  refetch: RefetchType;
}

const PokemonList: React.FC<PokemonListProps> = ({
  items,
  filters,
  fetchMore,
  refetch,
}) => {
  const [currentLastItem, setCurrentLastItem] = useState<HTMLDivElement | null>(
    null
  );
  const isEndofList = useIntersectionObserver(currentLastItem);
  const { isGrid, isFavorite: isFavoriteTab } = filters;
  const favoriteActions = useFavorite(refetch, isFavoriteTab);

  const registerEndElement = (item: HTMLDivElement | null) => {
    setCurrentLastItem(item);
  };

  useEffect(() => {
    if (isEndofList) {
      fetchMore();
    }
  }, [isEndofList, fetchMore]);

  return (
    <Box sx={styles.listWrapper}>
      <Box sx={isGrid ? styles.list : compressedStyles.list}>
        {items.map((pokemonData, index) => {
          return (
            <PokemonCard
              key={pokemonData.name}
              pokemonData={pokemonData}
              favoriteActions={favoriteActions}
              compressed={!isGrid}
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
