import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import UIElement from 'assets/ui/round.png'
import { Sensor } from 'global.types'

const styles = {
  containerMain: {
    width: 120,
    height: 120,
    backgroundSize: 'cover',
    position: 'relative',
    overflow:     'hidden',
  },
  rotatingBackground: {
    // border: '3px solid purple',
    borderRadius: '30%',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${UIElement})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    left: 0,
    animation: 'rotation 10s infinite linear',
    '@keyframes rotation': {
      from: {
        transform: 'rotate(0deg)'
      },
      to: {
        transform: 'rotate(359deg)'
      }
    }
  },
  content: {
    borderRadius: '50%',
    padding: '9px',
    backgroundColor: 'black',
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#FFF',
    fontFamily: 'Anton',
    fontSize: 24,
  },
  labelPrimary: {
    position: 'absolute',
    top: 0,
    left: 15,
    transform: 'translateX(-50%)',
    color: '#FFF',
    fontFamily: 'Anton',
    fontSize: 12,
  },
  labelSecondary: {
    position: 'absolute',
    bottom: 0,
    right: 15,
    transform: 'translateX(50%)',
    color: '#FFF',
    fontFamily: 'Anton',
    fontSize: 12,
  }
}

const celcius = '\u2103';

const { containerMain, content, rotatingBackground, labelPrimary, labelSecondary } = styles;

export type GaugeV1Props = {
  sensor: Sensor;
}

const GaugeV1 = ({sensor}: GaugeV1Props) => {
  const { label = 'N/A', value = 'N/A', unit = 'N/A' } = sensor;

  // Please remove this stupid logic and add short label in the backed data model
  const getLabel = (label: string) => {
    if (label.toLowerCase().includes('water')) return 'WATER';
    if (label.toLowerCase().includes('pump')) return 'PUMP';
    return label.slice(0, 4)
  }

  return (
    <Stack sx={containerMain}>
      <Box sx={rotatingBackground}></Box>
      <Box sx={content}>
        <Typography fontFamily='inherit' fontSize="inherit">{value}</Typography>
      </Box>
      <Typography sx={labelPrimary}>{getLabel(label)}</Typography>
      <Typography sx={labelSecondary}>{unit}</Typography>
    </Stack>
  );
}

export default GaugeV1;
