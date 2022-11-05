import Link from "next/link";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./PokemonCard.styles";
import { useRouter } from "next/router";

interface PokemonCardProps {
  pokemonData: Pokemon;
  compressed?: boolean;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemonData,
  compressed = false,
}) => {
  const { asPath } = useRouter();
  const {
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

  return (
    <Card>
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
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">{types.join(", ")}</Typography>
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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
};

export default PokemonCard;
