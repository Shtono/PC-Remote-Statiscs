import { useSensors } from "hooks"
import { Stack, Typography } from "@mui/material"
const ScreenV2 = () => {
  const { data: sensors, isLoading } = useSensors()

  if (!sensors?.length) return <Typography>Loading...</Typography>

  // console.log("Sensors: ", sensors)

  // return <div>123</div>

  const gpuTemp = `${sensors[0].value} ${sensors[0].unit}`
  const gpuLoad = `${sensors[2].value} ${sensors[2].unit}`
  const gpuRam = `${sensors[5].value} ${sensors[5].unit}`
  const gpuMemTemp = `${sensors[8].value} ${sensors[8].unit}`
  const gpuPowerPercent = `${sensors[9].value} ${sensors[9].unit}`
  const gpuPowerWatts = `${sensors[10].value} ${sensors[10].unit}`

  const cpuTemp = `${sensors[11].value} ${sensors[1].unit}`
  const cpuUsage = `${sensors[12].value} ${sensors[12].unit}`
  const cpuClock = `${sensors[13].value} ${sensors[13].unit}`
  const cpuPower = `${sensors[14].value} ${sensors[14].unit}`
  const ramUsedMb = `${sensors[15].value} ${sensors[15].unit}`

  const fps = `${sensors[16].value} ${sensors[16].unit}`
  const waterTemp = `${sensors[19].value} ${sensors[19].unit}`
  const fanCpu = `${sensors[20].value} ${sensors[20].unit}`
  const fan1 = `${sensors[21].value} ${sensors[21].unit}`
  const fan2 = `${sensors[22].value} ${sensors[22].unit}`
  const fan3 = `${sensors[23].value} ${sensors[23].unit}`
  const fan4 = `${sensors[25].value} ${sensors[25].unit}`
  const pump = `${sensors[24].value} ${sensors[24].unit}`

  const gpu = [
    { value: `${sensors[0].value} ${sensors[0].unit}`, label: sensors[0].name },
    { value: `${sensors[2].value} ${sensors[2].unit}`, label: sensors[2].name },
    { value: `${sensors[5].value} ${sensors[5].unit}`, label: sensors[5].name },
    { value: `${sensors[8].value} ${sensors[8].unit}`, label: sensors[8].name },
    { value: `${sensors[9].value} ${sensors[9].unit}`, label: sensors[9].name },
    {
      value: `${sensors[10].value} ${sensors[10].unit}`,
      label: sensors[10].name,
    },
  ]

  const cpu = [
    {
      value: `${sensors[11].value} ${sensors[11].unit}`,
      label: sensors[11].name,
    },
    {
      value: `${sensors[12].value} ${sensors[12].unit}`,
      label: sensors[12].name,
    },
    {
      value: `${sensors[13].value} ${sensors[13].unit}`,
      label: sensors[13].name,
    },
    {
      value: `${sensors[14].value} ${sensors[14].unit}`,
      label: sensors[14].name,
    },
    {
      value: `${sensors[15].value} ${sensors[15].unit}`,
      label: sensors[15].name,
    },
  ]

  const system = [
    {
      value: `${sensors[16].value} ${sensors[16].unit}`,
      label: sensors[16].name,
    },
    {
      value: `${sensors[19].value} ${sensors[19].unit}`,
      label: sensors[19].name,
    },
    {
      value: `${sensors[24].value} ${sensors[24].unit}`,
      label: sensors[24].name,
    },
    {
      value: `${sensors[20].value} ${sensors[20].unit}`,
      label: sensors[20].name,
    },
    {
      value: `${sensors[25].value} ${sensors[25].unit}`,
      label: sensors[25].name,
    },
    {
      value: `${sensors[21].value} ${sensors[21].unit}`,
      label: sensors[21].name,
    },
    {
      value: `${sensors[22].value} ${sensors[22].unit}`,
      label: sensors[22].name,
    },
    {
      value: `${sensors[23].value} ${sensors[23].unit}`,
      label: sensors[23].name,
    },
  ]

  return (
    <Stack
      direction={"column"}
      justifyContent="space-between"
      width={1}
      p={1}
      gap={2}
    >
      <Stack width={1}>
        <Typography variant="h5">GPU</Typography>
        {gpu.map((sensor) => (
          <Stack
            key={sensor.label}
            direction="row"
            justifyContent="space-between"
            ml={2}
          >
            <Typography>{sensor.label}</Typography>
            <Typography>{sensor.value}</Typography>
          </Stack>
        ))}
      </Stack>

      <Stack width={1}>
        <Typography variant="h5">System</Typography>
        {system.map((sensor) => (
          <Stack
            key={sensor.label}
            direction="row"
            justifyContent="space-between"
            ml={2}
          >
            <Typography>{sensor.label}</Typography>
            <Typography>{sensor.value}</Typography>
          </Stack>
        ))}
      </Stack>

      <Stack width={1}>
        <Typography variant="h5">CPU</Typography>
        {cpu.map((sensor) => (
          <Stack
            key={sensor.label}
            direction="row"
            justifyContent="space-between"
            ml={2}
          >
            <Typography>{sensor.label}</Typography>
            <Typography>{sensor.value}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default ScreenV2
