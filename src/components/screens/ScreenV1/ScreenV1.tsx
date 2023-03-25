import { useEffect, useState } from "react";
import { Stack, Typography } from "@mui/material";
import R2D2 from "../../../assets/gif/R2D2.gif";
import NvidiaLogo from "assets/logo/nvidiaLogo.png";
import IntelLogo from "assets/logo/intelLogo.png";
import AorusLogo from "assets/logo/aorusLogo.png";
import SensorsWithCategory from "./widgets/SensorsWithCategory/SensorsWithCategory";
import axios from "axios";
import GaugeV1 from "./widgets/gaugeV1/GaugeV1";
import { Sensor } from "global.types";
import { useSensors } from "hooks";

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

const GaugeStack = ({ sensors }: { sensors: Sensor[] }) => {
  return (
    <Stack
      sx={{ border: "white solid 0px" }}
      gap={7}
      direction="row"
      justifyContent="space-between"
    >
      {sensors.map((sensor) => (
        <GaugeV1 key={sensor.label} sensor={sensor} />
      ))}
    </Stack>
  );
};

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
      <img style={styles.img} src={R2D2} alt="StarWars" />
    </Stack>
  );
}

function ScreenV1ContentLeft(props: {
  sensors: Sensor[];
  gaugeSensors: Sensor[];
}) {
  return (
    <Stack
      spacing={2}
      direction="column"
      justifyContent="space-between"
      height={1}
    >
      <SensorsWithCategory
        category="RTX 3080 10 GB"
        logo={NvidiaLogo}
        logoAlt="Nvidia"
        sensors={props.sensors.slice(0, 11)}
      />
      <GaugeStack sensors={props.gaugeSensors} />
    </Stack>
  );
}

function ScreenV1ContentMiddle({ sensors }: { sensors: Sensor[] }) {
  // Move this into a controller
  const groupsOfTwo = () => {
    // const groups = [];
    const groups = new Array(sensors.length);
    for (let i = 0; i < sensors.length; i += 2) {
      groups[i] = sensors.slice(i, i + 2);
      // groups.push(sensors.slice(i, i + 2));
    }
    return groups;
  };
  // log sensors prop to check the slice will mutate the original array

  return (
    <Stack justifyContent="space-between">
      {groupsOfTwo().map((group, index) => (
        <GaugeStack key={index} sensors={group} />
      ))}
    </Stack>
  );
}

function ScreenV1ContentRight(props: { sensors: any }) {
  return (
    <Stack justifyContent="space-between">
      <SensorsWithCategory
        category="Core i7 8700K"
        logo={IntelLogo}
        logoAlt="Intel"
        sensors={props.sensors.slice(11, 17)}
      />
      <SensorsWithCategory
        category="Z390"
        logo={AorusLogo}
        logoAlt="Gigabyte Aorus"
        sensors={props.sensors.slice(19, 25)}
      />
    </Stack>
  );
}

const ScreenV1 = () => {
  const sensors = useSensors();
  if (!sensors) return <div>Loading...</div>;
  const leftGaugeSensors = [sensors[19], sensors[24]];
  const middleSensors = [
    sensors[2],
    sensors[12],
    sensors[0],
    sensors[11],
    sensors[17],
    sensors[16],
  ];
  if (!sensors.length) return <div>Loading...</div>;
  return (
    <Stack height={1} sx={styles.containerMain}>
      <ScreenV1Heading />
      <Stack spacing={8} direction="row" height={1}>
        <Stack p={3} direction="row" justifyContent="space-between" width={1}>
          <ScreenV1ContentLeft
            sensors={sensors}
            gaugeSensors={leftGaugeSensors}
          />
          <ScreenV1ContentMiddle sensors={middleSensors} />
          <ScreenV1ContentRight sensors={sensors} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ScreenV1;
