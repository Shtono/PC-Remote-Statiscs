import { Stack, Typography } from "@mui/material";
import Bar from "../../../../widgets/Bar";
import { sensors } from "../../ScreenV1.model";

const Gpu = () => {
  return (
    <Stack>
      {sensors.gpu.sensors.map((sensor) => {
        return (
          <Bar
            key={sensor.label}
            sensor={sensor.label}
            value={sensor.value}
            unit={sensor.unit}
            containerWidth={250}
            barWidth={(sensor.value / sensor.max) * 100}
          />
        );
      })}
    </Stack>
  );
};
export default Gpu;
