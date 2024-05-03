import { useState, useContext } from "react"
import {
  Stack,
  Drawer,
  Button,
  ClickAwayListener,
  IconButton,
} from "@mui/material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import styles from "./SidePanel.styles"
import { ViewContext } from "screens/MainScreen"
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked"

const { iconButton, drawer, buttonContainer, button } = styles

const SidePanel = () => {
  const [open, setOpen] = useState(false)
  const { setMainView, setSimpleView, selectedView } = useContext(ViewContext)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Stack>
      <IconButton sx={iconButton} onClick={handleDrawerOpen}>
        <ArrowForwardIosIcon color="inherit" />
      </IconButton>
      {open && (
        <ClickAwayListener onClickAway={handleDrawerClose}>
          <Drawer sx={drawer} anchor="left" open={open} variant="persistent">
            <Stack sx={buttonContainer}>
              <Button sx={button(selectedView === 1)} onClick={setMainView}>
                Main View
              </Button>
              <Button sx={button(selectedView === 2)} onClick={setSimpleView}>
                Simple View
              </Button>
            </Stack>
          </Drawer>
        </ClickAwayListener>
      )}
    </Stack>
  )
}

export default SidePanel
