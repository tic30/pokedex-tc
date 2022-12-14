import React, { Fragment } from "react";
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
import { UseFavoriteReturnType } from "../../hooks/useFavorite";

interface PokemonCardProps {
  pokemonData: Pokemon;
  favoriteActions: UseFavoriteReturnType;
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
    /**
     * sort previousEvolutions and evolutions by #
     * so that evolution list will always go from the most devoluted to most evoluted
     */
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
                    sx={styles.titleId}
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
                  value={maxCP!! / 40} // maxCP/4000*100 to get % number. 4k is Based on the highest CP Mewtwo ~3.9k
                  sx={styles.cpBar}
                />
                <Typography variant="h6">{`CP: ${maxCP}`}</Typography>
              </Box>
              <Box sx={styles.cpWrapper}>
                <LinearProgress
                  variant="determinate"
                  color="success"
                  value={maxHP!! / 45} // Based on the highest HP, still Mewtwo ~4.1k
                  sx={styles.cpBar}
                />
                <Typography variant="h6">{`HP: ${maxHP}`}</Typography>
              </Box>
              <Box sx={styles.statsWrapper}>
                <Card sx={styles.statsCard}>
                  <Typography variant="h6">Weight</Typography>
                  <Typography>{`${weight!!.minimum} - ${
                    weight!!.maximum
                  }`}</Typography>
                </Card>
                <Card sx={styles.statsCard}>
                  <Typography variant="h6">Height</Typography>
                  <Typography>{`${height!!.minimum} - ${
                    height!!.maximum
                  }`}</Typography>
                </Card>
              </Box>
              <Typography variant="h6" sx={styles.evolutionTitle}>
                Evolutions
              </Typography>
              {previousEvolutions!!.length > 0 || evolutions!!.length > 0 ? (
                <Box sx={styles.evolutions}>
                  {sortedPreviousEvolutions.map((item) => (
                    <Fragment key={item.name}>
                      <PokemonCard
                        pokemonData={item}
                        favoriteActions={favoriteActions}
                      />
                      <ArrowForwardIosIcon />
                    </Fragment>
                  ))}
                  <PokemonCard
                    pokemonData={pokemonData}
                    favoriteActions={favoriteActions}
                  />
                  {sortedEvolutions.map((item) => (
                    <Fragment key={item.name}>
                      <ArrowForwardIosIcon />
                      <PokemonCard
                        key={item.name}
                        pokemonData={item}
                        favoriteActions={favoriteActions}
                      />
                    </Fragment>
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
