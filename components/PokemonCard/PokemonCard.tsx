import React from "react";
import Link from "next/link";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./PokemonCard.styles";
import { useRouter } from "next/router";

interface PokemonCardProps {
  pokemonData: Pokemon;
  favoriteActions: any;
  compressed?: boolean;
}

const PokemonCard = React.forwardRef<HTMLDivElement, PokemonCardProps>(
  ({ pokemonData, favoriteActions, compressed = false }, ref) => {
    const { asPath } = useRouter();
    const {
      id,
      image,
      name,
      types,
      isFavorite,
      maxCP,
      maxHP,
      sound,
      weight,
      height,
    } = pokemonData;
    const { setFavorite, setUnfavorite } = favoriteActions;

    const handleFavorite = () => {
      const mutationOptions = {
        variables: {
          id,
        },
      };
      if (isFavorite) {
        setUnfavorite(mutationOptions);
      } else {
        setFavorite(mutationOptions);
      }
    };

    return (
      <Card ref={ref} sx={styles.card}>
        <CardActionArea
          LinkComponent={Link}
          href={`/${name}`}
          disabled={asPath !== "/"}
        >
          <CardMedia
            component="img"
            image={image}
            alt={`${name} image`}
            sx={styles.image}
          />
        </CardActionArea>
        <CardContent sx={styles.content}>
          <Box sx={styles.titleWrapper}>
            <Box>
              <Typography variant="h6">{name}</Typography>
              <Typography variant="body2">{types.join(", ")}</Typography>
            </Box>
            <IconButton aria-label="Set favorite" onClick={handleFavorite}>
              {isFavorite ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon color="error" />
              )}
            </IconButton>
          </Box>
          {!compressed && (
            <>
              {/* {maxCP}
            {maxHP}
            {weight}
            {height} */}
            </>
          )}
        </CardContent>
      </Card>
    );
  }
);

export default PokemonCard;
