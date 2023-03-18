import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import GaugeChart from "react-gauge-chart";
import R2D2 from "../../../assets/R2D2.gif";
import Bar from "../../widgets/Bar";
import Gpu from "./widgets/gpu/Gpu";

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

const ScreenV1 = () => {
  return (
    <Stack sx={styles.containerMain}>
      <Stack sx={styles.levelOne}>
        <Typography color="white">Hi</Typography>
        <img style={styles.img} src={R2D2} alt="StarWars" />
      </Stack>
      <Stack>
        <Gpu />
      </Stack>
    </Stack>
  );
};

export default ScreenV1;

{
  /*<GaugeChart*/
}
{
  /*  id="gauge-chart5"*/
}
{
  /*  nrOfLevels={5}*/
}
{
  /*  arcsLength={[0.2, 0.5, 0.2]}*/
}
{
  /*  colors={["#5BE12C", "#F5CD19", "#EA4228"]}*/
}
{
  /*  arcPadding={0.1}*/
}
{
  /*  formatTextValue={() => `${gpuClock} Mhz`}*/
}
{
  /*/>*/
}
