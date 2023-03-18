import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

export type PropsType = {
  sensor: string;
  value: number;
  unit: string;
  containerWidth: string | number;
  barWidth: number;
};

const styles = {
  containerMain: (width: string | number) => ({
    // gap: 2,
    width,
    color: "#FFF",
  }),
  containerInfo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  barWrapper: {
    width: "100%",
    height: 30,
    border: "white solid 2px",
  },
  bar: (width: number) => ({
    backgroundColor: "green",
    width: `${width}%`,
    height: "100%",
  }),
};

const { containerMain, containerInfo, bar, barWrapper } = styles;

const Bar = (props: PropsType) => {
  const { sensor, value, unit, containerWidth, barWidth } = props;

  return (
    <Stack sx={() => containerMain(containerWidth)}>
      <Stack sx={containerInfo}>
        <Typography variant="caption">{sensor}</Typography>
        <Typography variant="caption">{`${value} ${unit}`}</Typography>
      </Stack>
      <div style={barWrapper}>
        <div style={bar(barWidth)}></div>
      </div>
    </Stack>
  );
};

export default Bar;
