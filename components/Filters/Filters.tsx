import { Box, Button, ButtonGroup, Tab, Tabs, TextField } from "@mui/material";
import TypeSelector from "../TypeSelector";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import TableRowsIcon from "@mui/icons-material/TableRows";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./Filters.styles";

const Filters: React.FC<any> = ({ filters, setFilters }) => {
  const { isGrid, isFavorite } = filters;

  return (
    <Box sx={styles.wrapper}>
      <Tabs
        variant="fullWidth"
        value={isFavorite}
        onChange={(event: React.SyntheticEvent, newValue: string) =>
          setFilters((f) => ({ ...f, isFavorite: newValue }))
        }
        aria-label="See all or favorite pokemons"
      >
        <Tab value={false} label="All" />
        <Tab
          value={true}
          icon={<FavoriteIcon />}
          iconPosition="start"
          label="Favorites"
        />
      </Tabs>
      <Box sx={styles.secondRow}>
        <TextField label="Search" variant="outlined" />
        <TypeSelector
          type={filters.type}
          setType={(t) => setFilters((f) => ({ ...f, type: t }))}
        />
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={styles.gridListToggle}
        >
          <Button
            variant={isGrid ? "text" : "contained"}
            aria-label="View as list"
            onClick={() => setFilters((f) => ({ ...f, isGrid: false }))}
          >
            <TableRowsIcon />
          </Button>
          <Button
            variant={isGrid ? "contained" : "text"}
            aria-label="View as grid"
            onClick={() => setFilters((f) => ({ ...f, isGrid: true }))}
          >
            <ViewModuleIcon />
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default Filters;
