import { Stack, Typography } from "@mui/material";
import { SensorsWithCategoryProps } from "./SensorsWithCategory.types";

const SensorsWithCategory = ({
  sensors,
  category,
  logo,
}: SensorsWithCategoryProps) => {
  return (
    <Stack overflow="scroll">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={3}
      >
        <img style={{ height: 50 }} src={logo} alt="Nvidia" />
        <Typography fontFamily="Anton" variant="h4">
          {category}
        </Typography>
      </Stack>
      {sensors.map((sensor) => {
        return (
          <Stack
            width={275}
            gap={2}
            direction="row"
            justifyContent="space-between"
            key={sensor.label}
          >
            <Typography variant="body2">
              {sensor.label.replace("GPU ", "")}
            </Typography>
            <Typography variant="body2">
              {sensor.value} {sensor.unit}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};
export default SensorsWithCategory;
