import { Sensor } from "global.types"
import { Stack } from "@mui/material"
import { GaugeV1 } from "components/gauges/index"

const GaugeStack = ({
  sensors,
  maxWidth = 1,
}: {
  sensors: Sensor[]
  maxWidth?: number
}) => {
  return (
    <Stack
      flexWrap="wrap"
      gap={5}
      direction="row"
      justifyContent="space-between"
      maxWidth={maxWidth}
    >
      {sensors.map((sensor) => (
        <GaugeV1 key={sensor.label} sensor={sensor} />
      ))}
    </Stack>
  )
}

export default GaugeStack
