import { Stack } from "@mui/material"
import { NvidiaLogo, AorusLogo, IntelLogo } from "assets/logo"
import {
  Heading,
  ScreenV1ContentLeft,
  ScreenV1ContentRight,
} from "screens/ScreenV1/widgets"
import { GaugeStack } from "components/gauges"
import { SensorsWithCategory } from "components/basic"
import { Sensor } from "global.types"
import { useSensors } from "hooks"
import styles from "screens/ScreenV1/ScreenV1.styles"
import { sensors } from "screens/ScreenV1/ScreenV1.model"

const { containerMain } = styles

function ScreenContent() {
  const { data: sensors } = useSensors()
  if (!sensors?.length) return <div>Loading...</div>
  const leftGaugeSensors = [sensors[19], sensors[24]]
  const middleSensors = [
    sensors[2],
    sensors[12],
    sensors[0],
    sensors[11],
    sensors[17],
    sensors[16],
  ]
  return (
    <Stack p={3} direction="row" justifyContent="space-between" width={1}>
      <ScreenV1ContentLeft sensors={sensors} gaugeSensors={leftGaugeSensors} />
      <GaugeStack sensors={middleSensors} maxWidth={300} />
      <ScreenV1ContentRight sensors={sensors} />
    </Stack>
  )
}

const ScreenV1 = () => {
  return (
    <Stack height={1} sx={containerMain}>
      <Heading />
      <ScreenContent />
    </Stack>
  )
}

export default ScreenV1
