import { Stack } from "@mui/material"
import { SensorsWithCategory } from "components/basic"
import { AorusLogo, IntelLogo } from "assets/logo"

function ScreenV1ContentRight(props: { sensors: any }) {
  return (
    <Stack justifyContent="space-between">
      <SensorsWithCategory
        category="Core i7 8700K"
        logo={IntelLogo}
        logoAlt="Intel"
        sensors={props.sensors.slice(11, 17)}
      />
      <SensorsWithCategory
        category="Z390"
        logo={AorusLogo}
        logoAlt="Gigabyte Aorus"
        sensors={props.sensors.slice(19, 25)}
      />
    </Stack>
  )
}

export default ScreenV1ContentRight
