import { Stack, Typography } from "@mui/material";
import NvidiaLogo from "assets/logo/nvidiaLogo.png";
export type GpuSensor = {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
};

export type GpuProps = {
  sensors: GpuSensor[];
};
const Gpu = ({ sensors }: GpuProps) => {
  return (
    <Stack overflow="scroll">
      <Stack direction="row" alignItems="center" gap={3}>
        <img style={{ height: 50 }} src={NvidiaLogo} alt="Nvidia" />
        <Typography fontFamily="Anton" variant="h4">
          RTX 3080 10 GB
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
export default Gpu;
