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

// Categories
const GPU_CATEGORY = 'GPU'
const CPU_CATEGORY = 'CPU'
const SYSTEM_CATEGORY = 'SYSTEM'
const MB_CATEGORY = 'MB'
const FAN = 'FAN'

//Sub Categories
const PERFORMANCE_LIMIT = 'PERFORMANCE_LIMIT'
const TEMPERATURE = 'TEMPERATURE'
const VOLTAGE = 'VOLTAGE'
const LOAD = 'LOAD'
const USAGE = 'USAGE'
const CLOCK = 'CLOCK'
const POWER = 'POWER'
const FRAMERATE = 'FRAMERATE'
const FRAMETIME = 'FRAMETIME'
const RPM = 'RPM'
const MISC = 'MISC'
export const hardwareInfoSensors = [
  {
    category: 'GPU',
    subCategory: PERFORMANCE_LIMIT,
    name: 'GPU performance limit - POWER',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'Performance Limit - Power'},
  },
  {
    category: 'GPU',
    subCategory: PERFORMANCE_LIMIT,
    name: 'GPU performance limit - THERMAL',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'Performance Limit - Thermal'},
  },
  {
    category: 'GPU',
    subCategory: PERFORMANCE_LIMIT,
    name: 'GPU performance limit - UTILIZATION',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'Performance Limit - Utilization'},
  },
  {
    category: 'GPU',
    subCategory: PERFORMANCE_LIMIT,
    name: 'GPU performance limit - MAX_VOLTAGE',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'Performance Limit - Max Operating Voltage'},
  },
  {
    category: 'GPU',
    subCategory: TEMPERATURE,
    name: 'GPU temperature',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'GPU Temperature'},
  },
  {
    category: 'GPU',
    subCategory: TEMPERATURE,
    name: 'GPU core hotspot',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'Core Hot Spot'},
  },
  {
    category: 'GPU',
    subCategory: VOLTAGE,
    name: 'GPU core voltage',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'GPU Core Voltage'},
  },
  {
    category: 'GPU',
    subCategory: LOAD,
    name: 'GPU core load',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'GPU Core Load'},
  },
  {
    category: 'GPU',
    subCategory: MISC,
    name: 'GPU D3D usage',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'GPU D3D Usage'},
  },
  {
    category: 'GPU',
    subCategory: LOAD,
    name: 'GPU memory controller load',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'GPU Memory Controller Load'},
  },
  {
    category: 'GPU',
    subCategory: USAGE,
    name: 'GPU memory usage',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'GPU Memory Usage'},
  },
  {
    category: 'GPU',
    subCategory: MISC,
    name: 'GPU memory allocated',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'GPU Memory Allocated'},
  },
  {
    category: 'GPU',
    subCategory: CLOCK,
    name: 'GPU core clock',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'GPU Clock'},
  },
  {
    category: 'GPU',
    subCategory: CLOCK,
    name: 'GPU memory clock',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'GPU Memory Clock'},
  },
  {
    category: 'GPU',
    subCategory: TEMPERATURE,
    name: 'GPU memory temperature',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'GPU Memory'},
  },
  {
    category: 'GPU',
    subCategory: POWER,
    name: 'GPU power percent of TDP',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'Total GPU Power (normalized) [% of TDP]'},
  },
  {
    category: 'GPU',
    subCategory: POWER,
    name: 'GPU power',
    apiKeys: {SensorClass: 'GPU [#0]: NVIDIA GeForce RTX 3080: ', SensorName: 'GPU Power'},
  },
  {
    category: 'CPU',
    subCategory: TEMPERATURE,
    name: 'CPU temperature',
    apiKeys: {SensorClass: 'CPU [#0]: Intel Core i7-8700K: Enhanced', SensorName: 'CPU Package'},
  },
  {
    category: 'MB_CATEGORY',
    subCategory: TEMPERATURE,
    name: 'CPU socket temperature',
    apiKeys: {SensorClass: 'GIGABYTE Z390 AORUS MASTER-CF (ITE IT8688E)', SensorName: 'CPU'},
  }
  ,{
    category: 'CPU',
    subCategory: USAGE,
    name: 'CPU usage',
    apiKeys: {SensorClass: 'CPU [#0]: Intel Core i7-8700K', SensorName: 'Total CPU Usage'},
  },
  {
    category: 'CPU',
    subCategory: CLOCK,
    name: 'CPU clock core 1',
    apiKeys: {SensorClass: 'CPU [#0]: Intel Core i7-8700K', SensorName: 'Core 0 Clock'},
  },
  {
    category: 'CPU',
    subCategory: CLOCK,
    name: 'CPU clock core 2',
    apiKeys: {SensorClass: 'CPU [#0]: Intel Core i7-8700K', SensorName: 'Core 1 Clock'},
  },
  {
    category: 'CPU',
    subCategory: CLOCK,
    name: 'CPU clock core 3',
    apiKeys: {SensorClass: 'CPU [#0]: Intel Core i7-8700K', SensorName: 'Core 2 Clock'},
  },
  {
    category: 'CPU',
    subCategory: CLOCK,
    name: 'CPU clock core 4',
    apiKeys: {SensorClass: 'CPU [#0]: Intel Core i7-8700K', SensorName: 'Core 3 Clock'},
  },
  {
    category: 'CPU',
    subCategory: CLOCK,
    name: 'CPU clock core 5',
    apiKeys: {SensorClass: 'CPU [#0]: Intel Core i7-8700K', SensorName: 'Core 4 Clock'},
  },
  {
    category: 'CPU',
    subCategory: CLOCK,
    name: 'CPU clock core 6',
    apiKeys: {SensorClass: 'CPU [#0]: Intel Core i7-8700K', SensorName: 'Core 5 Clock'},
  },
  {
    category: 'CPU',
    subCategory: POWER,
    name: 'CPU power',
    apiKeys: {SensorClass: 'CPU [#0]: Intel Core i7-8700K', SensorName: 'CPU Package Power'},
  },{
    category: 'RAM',
    subCategory: USAGE,
    name: 'RAM used',
    apiKeys: {SensorClass: 'System: GIGABYTE Z390 AORUS MASTER', SensorName: 'Physical Memory Used'},
  },
  {
    category: 'RAM',
    subCategory: USAGE,
    name: 'RAM available',
    apiKeys: {SensorClass: 'System: GIGABYTE Z390 AORUS MASTER', SensorName: 'Physical Memory Available'},
  },
  {
    category: 'RAM',
    subCategory: USAGE,
    name: 'RAM usage',
    apiKeys: {SensorClass: 'System: GIGABYTE Z390 AORUS MASTER', SensorName: 'Physical Memory Load'},
  },{
    category: 'FPS',
    subCategory: FRAMERATE,
    name: 'FPS',
    apiKeys: {SensorClass: 'RTSS', SensorName: 'Framerate'},
  },
  {
    category: 'FPS',
    subCategory: FRAMERATE,
    name: 'Frame time',
    apiKeys: {SensorClass: 'RTSS', SensorName: 'Frame Time'},
  },
  {
    category: 'CASE_FAN_CATEGORY',
    subCategory: RPM,
    name: 'Water temperature',
    apiKeys: {SensorClass: 'GIGABYTE Z390 AORUS MASTER-CF (ITE IT8688E)', SensorName: 'Water'},
  },
  {
    category: 'FAN',
    subCategory: RPM,
    name: 'FAN cpu optional',
    apiKeys: {SensorClass: 'GIGABYTE Z390 AORUS MASTER-CF (ITE IT8688E)', SensorName: 'CPU_OPT'},
  },
  {
    category: 'FAN',
    subCategory: RPM,
    name: 'FAN CPU',
    apiKeys: {SensorClass: 'GIGABYTE Z390 AORUS MASTER-CF (ITE IT8688E)', SensorName: 'CPU_FAN'},
  },
  {
    category: 'FAN',
    subCategory: RPM,
    name: 'FAN System 1',
    apiKeys: {SensorClass: 'GIGABYTE Z390 AORUS MASTER-CF (ITE IT8688E)', SensorName: 'System 1'},
  },
  {
    category: 'FAN',
    subCategory: RPM,
    name: 'FAN System 2',
    apiKeys: {SensorClass: 'GIGABYTE Z390 AORUS MASTER-CF (ITE IT8688E)', SensorName: 'System 2 (VRM)'},
  },
  {
    category: 'FAN',
    subCategory: RPM,
    name: 'FAN System 3',
    apiKeys: {SensorClass: 'GIGABYTE Z390 AORUS MASTER-CF (ITE IT8688E)', SensorName: 'System 3'},
  },
  {
    category: 'FAN',
    subCategory: RPM,
    name: 'System pump',
    apiKeys: {SensorClass: 'GIGABYTE Z390 AORUS MASTER-CF (ITE IT8792E)', SensorName: 'System 5 Pump'},
  },
  {
    category: 'FAN',
    subCategory: RPM,
    name: 'FAN System 4',
    apiKeys: {SensorClass: 'GIGABYTE Z390 AORUS MASTER-CF (ITE IT8792E)', SensorName: 'System 4'},
  },
  {
    category: 'SYSTEM_CATEGORY',
    subCategory:MISC ,
    name: 'SSD Sabrent temperature',
    apiKeys: {SensorClass: 'S.M.A.R.T.: Sabrent (7D83079B0A8600239245)', SensorName: 'Drive Temperature'},
  },
  {
    category: 'SYSTEM_CATEGORY',
    subCategory: MISC,
    name: 'SSD Sabrent read',
    apiKeys: {SensorClass: 'Drive: Sabrent (7D83079B0A8600239245)', SensorName: 'Read Rate'},
  },
  {
    category: 'SYSTEM_CATEGORY',
    subCategory: MISC,
    name: 'SSD Sabrent write',
    apiKeys: {SensorClass: 'Drive: Sabrent (7D83079B0A8600239245)', SensorName: 'Write Rate'},
  },
  {
    category: 'SYSTEM_CATEGORY',
    subCategory: MISC,
    name: 'SSD Sabrent',
    apiKeys: {SensorClass: 'Drive: Sabrent (7D83079B0A8600239245)', SensorName: 'Total Activity'},
  },
]

