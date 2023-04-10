import { Sensor } from "global.types"
import { Stack } from "@mui/material"
import { SensorsWithCategory } from "components/basic"
import { NvidiaLogo } from "assets/logo"
import { GaugeStack } from "components/gauges"

function ScreenV1ContentLeft(props: {
  sensors: Sensor[]
  gaugeSensors: Sensor[]
  // Try to implement position
}) {
  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="space-between"
      height={1}
    >
      <SensorsWithCategory
        category="RTX 3080 10 GB"
        logo={NvidiaLogo}
        logoAlt="Nvidia"
        sensors={props.sensors.slice(0, 11)}
      />
      <GaugeStack sensors={props.gaugeSensors} />
    </Stack>
  )
}

export default ScreenV1ContentLeft
