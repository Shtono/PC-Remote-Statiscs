import { Stack, Typography } from "@mui/material";
import Bar from "../../../../widgets/Bar";

export type GpuSensor = {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
}

export type GpuProps = {
  sensors: GpuSensor[];
}
const Gpu = ({sensors}: GpuProps) => {
  // if (sensors.length === 0) return null;
  return (
    <Stack overflow="scroll">
      {sensors.map((sensor) => {
        return (
          <Stack gap={2} direction="row" key={sensor.label}>
          <Bar
            sensor={sensor.label}
            value={sensor.value}
            unit={sensor.unit}
            containerWidth={250}
            barWidth={(sensor.value / sensor.max) * 100}
          />
          </Stack>
        );
      })}
    </Stack>
  );
};
export default Gpu;
