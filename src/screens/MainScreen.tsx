import { Stack, Box } from "@mui/material"
import ScreenV1 from "screens/ScreenV1/ScreenV1"
import styles from "screens/MainScreen.styles"

const { containerMain, wrapper } = styles

const MainScreen = () => {
  return (
    <Box sx={wrapper}>
      <Stack sx={containerMain}>
        <ScreenV1 />
      </Stack>
    </Box>
  )
}

export default MainScreen
