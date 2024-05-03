import { Stack, Box } from "@mui/material"
import ScreenV1 from "screens/ScreenV1/ScreenV1"
import styles from "screens/MainScreen.styles"
import ScreenV2 from "screens/ScreenV2/ScreenV2"

const { containerMain, wrapper } = styles

const MainScreen = () => {
  return (
    <Box sx={wrapper}>
      <Stack sx={containerMain}>
        {/*<ScreenV1 />*/}
        <ScreenV2 />
      </Stack>
    </Box>
  )
}

export default MainScreen
