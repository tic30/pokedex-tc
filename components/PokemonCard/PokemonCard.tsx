import React from "react";
import Link from "next/link";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles, { compressedStyles } from "./PokemonCard.styles";
import { sortById } from "../../utils/sortById";

interface PokemonCardProps {
  pokemonData: Pokemon;
  favoriteActions: any;
  compressed?: boolean;
  showDetail?: boolean;
}

const PokemonCard = React.forwardRef<HTMLDivElement, PokemonCardProps>(
  (
    { pokemonData, favoriteActions, compressed = false, showDetail = false },
    ref
  ) => {
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
      evolutions,
      previousEvolutions,
    } = pokemonData;
    const { setFavorite, setUnfavorite } = favoriteActions;
    const sortedPreviousEvolutions = previousEvolutions
      ? [...previousEvolutions].sort(sortById)
      : [];
    const sortedEvolutions = evolutions ? [...evolutions].sort(sortById) : [];

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

    const playSound = () => {
      new Audio(sound).play();
    };

    return (
      <Card ref={ref} sx={compressed ? compressedStyles.card : styles.card}>
        <CardActionArea
          LinkComponent={Link}
          href={`/${name}`}
          disabled={showDetail}
          sx={compressed ? compressedStyles.imageWrapper : {}}
        >
          <CardMedia
            component="img"
            image={image}
            alt={`${name} image`}
            sx={compressed ? compressedStyles.image : styles.image}
          />
        </CardActionArea>
        <CardContent
          sx={compressed ? compressedStyles.content : styles.content}
        >
          <Box sx={styles.titleWrapper}>
            <Box>
              <Box sx={styles.title}>
                <Typography variant={showDetail ? "h5" : "h6"}>
                  {name}
                </Typography>
                {showDetail && (
                  <Typography
                    variant={showDetail ? "h5" : "h6"}
                  >{`#${id}`}</Typography>
                )}
              </Box>
              <Typography variant="body2">{types.join(", ")}</Typography>
            </Box>
            <Box>
              {showDetail && (
                <IconButton aria-label="Play sound" onClick={playSound}>
                  <VolumeUpIcon color="primary" />
                </IconButton>
              )}
              <IconButton aria-label="Set favorite" onClick={handleFavorite}>
                {isFavorite ? (
                  <FavoriteIcon color="error" />
                ) : (
                  <FavoriteBorderIcon color="error" />
                )}
              </IconButton>
            </Box>
          </Box>
          {showDetail && (
            <>
              <Box sx={styles.cpWrapper}>
                <LinearProgress
                  variant="determinate"
                  color="secondary"
                  value={maxCP / 40} // Based on the highest which is Mewtwo
                  sx={styles.cpBar}
                />
                <Typography variant="h6">{`CP: ${maxCP}`}</Typography>
              </Box>
              <Box sx={styles.cpWrapper}>
                <LinearProgress
                  variant="determinate"
                  color="success"
                  value={maxHP / 45} // Based on the highest which is Mewtwo
                  sx={styles.cpBar}
                />
                <Typography variant="h6">{`HP: ${maxHP}`}</Typography>
              </Box>
              <Box sx={styles.statsWrapper}>
                <Card sx={styles.statsCard}>
                  <Typography variant="h6">Weight</Typography>
                  <Typography>{`${weight.minimum} - ${weight.maximum}`}</Typography>
                </Card>
                <Card sx={styles.statsCard}>
                  <Typography variant="h6">Height</Typography>
                  <Typography>{`${height.minimum} - ${height.maximum}`}</Typography>
                </Card>
              </Box>
              <Typography variant="h6" sx={styles.evolutionTitle}>
                Evolutions
              </Typography>
              {previousEvolutions.length > 0 || evolutions.length > 0 ? (
                <Box sx={styles.evolutions}>
                  {sortedPreviousEvolutions.map((item) => (
                    <>
                      <PokemonCard
                        key={item.name}
                        pokemonData={item}
                        favoriteActions={favoriteActions}
                      />
                      <ArrowForwardIosIcon />
                    </>
                  ))}
                  <PokemonCard
                    pokemonData={pokemonData}
                    favoriteActions={favoriteActions}
                  />
                  {sortedEvolutions.map((item) => (
                    <>
                      <ArrowForwardIosIcon />
                      <PokemonCard
                        key={item.name}
                        pokemonData={item}
                        favoriteActions={favoriteActions}
                      />
                    </>
                  ))}
                </Box>
              ) : (
                <Typography>No evolutions</Typography>
              )}
            </>
          )}
        </CardContent>
      </Card>
    );
  }
);

PokemonCard.displayName = "PokemonCard";

export default PokemonCard;
