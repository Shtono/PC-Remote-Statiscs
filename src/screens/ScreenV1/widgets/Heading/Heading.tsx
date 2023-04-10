import { useEffect, useState } from "react"
import { Stack, Typography } from "@mui/material"
import { UpTimeCounter } from "components/info"
import { SidePanel } from "components/panels"
import { R2D2 } from "assets/gif"
import styles from "screens/ScreenV1/widgets/Heading/Heading.styles"
import { image } from "global.styles"

function Heading() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Stack sx={styles.levelOne}>
      <Stack direction="row" justifyContent="center" width={100}>
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
        Hi Shtono, Have fun!
      </Typography>
      <img style={image} src={R2D2} alt="StarWars" />
    </Stack>
  )
}

export default Heading
