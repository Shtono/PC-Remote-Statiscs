import { Box, Stack, Typography } from "@mui/material"
import styles from "components/gauges/GaugeV1/GaugeV1.styles"
import { GaugeV1Props } from "components/gauges/GaugeV1/GaugeV1.types"

const celcius = "\u2103"

const {
  containerMain,
  content,
  rotatingBackground,
  labelPrimary,
  labelSecondary,
} = styles

const GaugeV1 = ({ sensor }: GaugeV1Props) => {
  const { label = "N/A", value = "N/A", unit = "N/A" } = sensor

  // TODO: Please remove this stupid logic and add short label in the backed data model
  const getLabel = (label: string) => {
    if (label.toLowerCase().includes("water")) return "WATER"
    if (label.toLowerCase().includes("pump")) return "PUMP"
    return label.slice(0, 4)
  }

  return (
    <Stack sx={containerMain}>
      <Box sx={rotatingBackground}></Box>
      <Box sx={content}>
        <Typography fontFamily="inherit" fontSize="inherit">
          {value}
        </Typography>
      </Box>
      <Typography sx={labelPrimary}>{getLabel(label)}</Typography>
      <Typography sx={labelSecondary}>{unit}</Typography>
    </Stack>
  )
}

export default GaugeV1
