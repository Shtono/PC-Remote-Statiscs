import { Sensor } from "global.types";

export type SensorsWithCategoryProps = {
  sensors: Sensor[];
  category: string;
  logo: string | undefined;
  logoAlt: string;
};
