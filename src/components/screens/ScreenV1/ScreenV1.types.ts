import { sensors } from "./ScreenV1.model";
//
// export type GpuSensors = (typeof sensors)["gpu"];
// export type CpuSensors = (typeof sensors)["cpu"];
// export type SystemSensors = (typeof sensors)["system"];
// export type RamSensors = (typeof sensors)["ram"];
//
// export type Sensors = GpuSensors | CpuSensors | SystemSensors | RamSensors;
// export type Sensor =
//   | (typeof sensors)["gpu"]["sensors"][number]
//   | (typeof sensors)["cpu"]["sensors"][number]
//   | (typeof sensors)["system"]["sensors"][number]
//   | (typeof sensors)["ram"]["sensors"][number];

export type Sensor = {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
};

export type Device = {
  label: string;
  model: string;
  logo: string | null;
  sensors: Sensor[];
};
