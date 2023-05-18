import { useEffect, useState } from "react"
import { Stack, Typography, Box } from "@mui/material"
import { UpTimeCounter } from "components/info"
import { SidePanel } from "components/panels"
import { R2D2 } from "assets/gif"
import styles from "screens/ScreenV1/widgets/Heading/Heading.styles"
import { image } from "global.styles"
import { GifSelect } from "components/modals"

function HeadingLeft() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      width={100}
    >
      <Typography>{time.toLocaleTimeString()}</Typography>
      <SidePanel />
      <Typography>{time.toLocaleDateString()}</Typography>
      {/*<UpTimeCounter />*/}
    </Stack>
  )
}

function Heading() {
  const [open, setOpen] = useState(false)
  const [displayImage, setDisplayImage] = useState(R2D2)
  return (
    <Stack sx={styles.levelOne}>
      <Stack direction="row" justifyContent="center" width={100}>
        <HeadingLeft />
      </Stack>
      <Typography
        variant="h1"
        sx={{
          justifySelf: "center",
          fontFamily: "Bungee Shade, cursive",
          fontSize: 48,
          color: "#C4B6FF",
        }}
        color="white"
      >
        Watchtower...!!!
      </Typography>
      <Box onClick={() => setOpen(true)}>
        <img style={image} src={displayImage || R2D2} alt="StarWars" />
      </Box>
      <GifSelect
        open={open}
        onClose={() => setOpen(false)}
        setImage={setDisplayImage}
      />
    </Stack>
  )
}

export default Heading
