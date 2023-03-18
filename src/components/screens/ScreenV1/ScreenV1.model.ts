// import NvidiaLogo from "assets/logo/nvidiaLogo.png";
// import IntelLogo from "assets/logo/intelLogo.png";
import NvidiaLogo from "../../../assets/logo/nvidiaLogo.png";
import IntelLogo from "../../../assets/logo/intelLogo.png";
const gpu = {
  label: "GPU",
  model: "RTX 3080 10GB",
  logo: NvidiaLogo,
  sensors: [
    {
      label: "Core temp",
      value: 61,
      unit: "°C",
      min: 0,
      max: 100,
    },
    {
      label: "Core hot spot",
      value: 75,
      unit: "°C",
      min: 0,
      max: 100,
    },
    {
      label: "Power",
      value: 250,
      unit: "W",
      min: 0,
      max: 400,
    },
    {
      label: "Core clock",
      value: 1950,
      unit: "Mhz",
      min: 0,
      max: 2100,
    },
    {
      label: "Memory temp",
      value: 65,
      unit: "°C",
      min: 0,
      max: 100,
    },
    {
      label: "Memory clock",
      value: 5000,
      unit: "Mhz",
      min: 0,
      max: 5500,
    },
    {
      label: "Fan speed",
      value: 1300,
      unit: "RPM",
      min: 0,
      max: 2400,
    },
  ],
};

const cpu = {
  label: "CPU",
  model: "Intel Core i7-8700K",
  logo: IntelLogo,
  sensors: [
    {
      label: "Package temp",
      value: 60,
      unit: "°C",
      min: 0,
      max: 100,
    },
    {
      label: "CPU load",
      value: 60,
      unit: "%",
      min: 0,
      max: 100,
    },
    {
      label: "CPU clock",
      value: 60,
      unit: "°C",
      min: 0,
      max: 100,
    },
    {
      label: "CPU power",
      value: 60,
      unit: "W",
      min: 0,
      max: 150,
    },
  ],
};

const ram = {
  label: "RAM",
  model: "Corsair Vengeance pro RGB",
  logo: null,
  sensors: [
    {
      label: "Ram usage",
      value: 5000,
      unit: "MB",
      min: 0,
      max: 16000,
    },
    {
      label: "Ram clock",
      value: 3600,
      unit: "MHz",
      min: 0,
      max: 3600,
    },
  ],
};

const system = {
  label: "System",
  model: "System",
  logo: null,
  sensors: [
    {
      label: "CPU fan 1",
      value: 760,
      unit: "RPM",
      min: 0,
      max: 1800,
    },
    {
      label: "CPU fan 2",
      value: 760,
      unit: "RPM",
      min: 0,
      max: 1800,
    },
    {
      label: "CPU fan 3",
      value: 760,
      unit: "RPM",
      min: 0,
      max: 1800,
    },
    {
      label: "Case fan 1",
      value: 760,
      unit: "RPM",
      min: 0,
      max: 1500,
    },
    {
      label: "Case fan 2",
      value: 760,
      unit: "RPM",
      min: 0,
      max: 1500,
    },
    {
      label: "Case fan 3",
      value: 760,
      unit: "RPM",
      min: 0,
      max: 1500,
    },
    {
      label: "Case fan 4",
      value: 760,
      unit: "RPM",
      min: 0,
      max: 3000,
    },
    {
      label: "Pump speed",
      value: 760,
      unit: "RPM",
      min: 0,
      max: 4500,
    },
    {
      label: "Water temp",
      value: 30,
      unit: "°C",
      min: 0,
      max: 100,
    },
  ],
};

export const sensors = { gpu, cpu, system, ram };
