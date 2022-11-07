import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useType } from "../../hooks/useType";
import styles from "./TypeSelector.styles";

interface TypeSelector {
  type: string;
  setType: (newType: string) => void;
}
const TypeSelector: React.FC<TypeSelector> = ({ type, setType }) => {
  const { data: types, error, loading } = useType();

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };

  if (loading || error) {
    return null;
  }

  return (
    <FormControl>
      <InputLabel id="type-selector-label">Select type</InputLabel>
      <Select
        labelId="type-selector-label"
        value={type}
        label="Select type"
        onChange={handleChange}
        sx={styles.select}
      >
        <MenuItem value="">-</MenuItem>
        {types!!.pokemonTypes.map((t) => (
          <MenuItem key={`type-${t}`} value={t}>
            {t}
          </MenuItem>
        ))}
      </Select>
      {type && (
        <IconButton sx={styles.clearIcon} onClick={() => setType("")}>
          <CloseIcon />
        </IconButton>
      )}
    </FormControl>
  );
};

export default TypeSelector;
