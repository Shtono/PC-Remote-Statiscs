import { createContext, useState } from "react"
import { Stack, Box } from "@mui/material"
import ScreenV1 from "screens/ScreenV1/ScreenV1"
import styles from "screens/MainScreen.styles"
import ScreenV2 from "screens/ScreenV2/ScreenV2"

const { containerMain, wrapper } = styles

const initialState = {
  selectedView: 1 as const,
}

type ContextType = {
  selectedView: 1 | 2
  setMainView?: () => void
  setSimpleView?: () => void
}

export const ViewContext = createContext<ContextType>(initialState)

const MainScreen = () => {
  const [selectedView, setSelectedView] = useState<1 | 2>(2)
  const setMainView = () => setSelectedView(1)
  const setSimpleView = () => setSelectedView(2)

  return (
    <ViewContext.Provider value={{ selectedView, setMainView, setSimpleView }}>
      <Box sx={wrapper}>
        <Stack sx={containerMain}>
          {selectedView === 1 && <ScreenV1 />}
          {selectedView === 2 && <ScreenV2 />}
        </Stack>
      </Box>
    </ViewContext.Provider>
  )
}

export default MainScreen
