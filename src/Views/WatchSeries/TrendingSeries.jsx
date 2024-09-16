import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import CookingColombian from "./CookingColombian";
const TrendingSeries = () => {
  const { palette } = useTheme();

  return (
    <Stack sx={{}}>
      <Typography
        sx={{
          color: palette.text.primary,
          fontWeight: 700,
          fontSize: "20px",
          fontFamily: "poppins",
        }}
      >
        <CookingColombian />
      </Typography>{" "}
    </Stack>
  );
};

export default TrendingSeries;
