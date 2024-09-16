import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useTheme } from "@mui/styles";

export default function SearchInput() {
  const { palette } = useTheme();

  return (
    <Paper
      component="form"
      sx={{ display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          backgroundColor: palette.backgroundColor.searchField,
          padding: 0,
          borderRadiusTopRight: "6px",
          borderRadiusBottomRight: "6px",
          boxShadow: 0,
          text: palette.text.secondary,
          fontWeight: 700,
        }}
        placeholder="Search your specific videos..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        type="button"
        sx={{
          backgroundColor: palette.text.primary,
          color: palette.typography.allVariants.color,
          borderRadius: 0,
          borderRadiusTopRight: "6px",
          borderRadiusBottomRight: "6px",
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
