import { sensors } from "screens/ScreenV1/ScreenV1.model"

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
