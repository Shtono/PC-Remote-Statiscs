import { useEffect, useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import GaugeChart from "react-gauge-chart";
import R2D2 from "../../../assets/R2D2.gif";
import NvidiaLogo from "assets/logo/nvidiaLogo.png";
import IntelLogo from "assets/logo/intelLogo.png";
import AorusLogo from "assets/logo/aorusLogo.png";
import Fallout from "../../../assets/gif/fallout_gif_1.gif";
import Bar from "../../widgets/Bar";
import Gpu from "./widgets/gpu/Gpu";
import SensorsWithCategory from "./widgets/SensorsWithCategory/SensorsWithCategory";
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

function ScreenV1Heading() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Stack sx={styles.levelOne}>
      <Stack direction="row" justifyContent="center" width={100}>
        <Typography>{time.toLocaleTimeString()}</Typography>
      </Stack>
      <Typography
        variant="h1"
        sx={{
          justifySelf: "center",
          fontFamily: "Bungee Shade, cursive",
          fontSize: 48,
          color: "#C4B6FF",
        }}
        color="white"
      >
        Hi Shtono, Have fun!
      </Typography>
      <img style={styles.img} src={Fallout} alt="StarWars" />
    </Stack>
  );
}

const ScreenV1 = () => {
  const [sensors, setSensors] = useState<any>([]);
  useEffect(() => {
    const getSensors = async () => {
      const res = await axios.get("http://192.168.0.163:5000/sensors");
      setSensors(res.data.sensors);
    };
    const interval = setInterval(() => {
      getSensors();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  console.log(sensors);
  return (
    <Stack height={1} sx={styles.containerMain}>
      <ScreenV1Heading />
      <Stack spacing={8} direction="row" height={1}>
        <Stack p={3} direction="row" justifyContent="space-between" width={1}>
          <SensorsWithCategory
            category="RTX 3080 10 GB"
            logo={NvidiaLogo}
            logoAlt="Nvidia"
            sensors={sensors.slice(0, 11)}
          />
          <Stack justifyContent="space-between">
            <SensorsWithCategory
              category="Core i7 8700K"
              logo={IntelLogo}
              logoAlt="Intel"
              sensors={sensors.slice(11, 17)}
            />
            <SensorsWithCategory
              category="Z390"
              logo={AorusLogo}
              logoAlt="Gigabyte Aorus"
              sensors={sensors.slice(19, 25)}
            />
          </Stack>
        </Stack>
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
