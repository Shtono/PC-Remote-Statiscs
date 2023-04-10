import { useState } from "react"
import { Stack, Drawer, Button, ClickAwayListener, IconButton } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import styles from './SidePanel.styles'

const { iconButton, drawer } = styles

const SidePanel = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <Stack>
      <IconButton sx={iconButton} onClick={handleDrawerOpen}><ArrowForwardIosIcon color='inherit' /></IconButton>
      {open && <ClickAwayListener onClickAway={handleDrawerClose}>

      <Drawer
        sx={drawer}
        anchor="left"
        open={open}
        variant="persistent"
      >
          <Stack>
            <Button>Settings</Button>
            <Button>Settings</Button>
            <Button>Settings</Button>
            <Button>Settings</Button>
            <Button>Settings</Button>
          </Stack>
      </Drawer>
      </ClickAwayListener>}

    </Stack>
 )
}

export default SidePanel
