import { Stack } from "@mui/material";
import ScreenV1 from "./screens/ScreenV1/ScreenV1";
import styles from "./MainScreen.styles";

const { containerMain } = styles;

const MainScreen = () => {
  return (
    <Stack sx={containerMain}>
      <ScreenV1 />
    </Stack>
  );
};

export default MainScreen;
