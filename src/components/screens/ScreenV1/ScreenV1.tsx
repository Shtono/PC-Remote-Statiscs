import {useEffect, useState} from "react";
import { Stack, Typography, Box } from "@mui/material";
import GaugeChart from "react-gauge-chart";
import R2D2 from "../../../assets/R2D2.gif";
import Fallout from "../../../assets/gif/fallout_gif_1.gif";
import Bar from "../../widgets/Bar";
import Gpu from "./widgets/gpu/Gpu";
import axios from "axios";

const styles = {
  img: {
    width: 100,
    height: 100,
  },
  levelOne: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerMain: {
    width: "100%",
    padding: 2,
  },
};

// Gpu - temp, usage, clock, power percent, power draw, hot spot temp
// Gpu memory - usage, clock, temp, hot spot temp
// Cpu - temp, usage, clock, power draw
// Ram - usage, clock, usage percent
// FPS - fps, frametime
// Motherboard - fans front, fan back , fans top, pump, water temp

const ScreenV1 = () => {
  const [sensors, setSensors] = useState<any>([]);
  useEffect( () => {
    const getSensors = async () => {
      const res = await axios.get();
      setSensors(res.data.sensors);
    }
    const interval = setInterval(() => {
      getSensors();
    }, 1000);
    return () => clearInterval(interval);
  }, [])
  console.log(sensors)
  return (
    <Stack height={1} sx={styles.containerMain}>
      <Stack sx={styles.levelOne}>
        <Typography color="white">Hi</Typography>
        <img style={styles.img} src={Fallout} alt="StarWars" />
      </Stack>
      <Stack spacing={8} direction="row" height={1}>
        <Stack>
          <Typography color="white">Gpu</Typography>
          <Gpu sensors={sensors} />
        </Stack>
        <Typography variant="h1" color="white">{sensors[17].value} FPS</Typography>
      </Stack>
    </Stack>
  );
};

export default ScreenV1;

  // <GaugeChart
  // id="gauge-chart5"
  // nrOfLevels={5}
  // arcsLength={[0.2, 0.5, 0.2]}
  // colors={["#5BE12C", "#F5CD19", "#EA4228"]}
  // arcPadding={0.1}
  // formatTextValue={() => `${gpuClock} Mhz`}
  // />
