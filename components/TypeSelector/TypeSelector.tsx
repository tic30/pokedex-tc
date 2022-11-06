import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useType } from "../../hooks/useType";

interface TypeSelector {
  type: string;
  setType: any;
}
const TypeSelector: React.FC<TypeSelector> = ({ type, setType }) => {
  const { data: types, error, loading } = useType();

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
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
      >
        {types!!.pokemonTypes.map((t) => (
          <MenuItem value={t}>{t}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TypeSelector;
