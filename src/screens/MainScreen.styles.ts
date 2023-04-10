import { SxProps } from "@mui/material"

const containerMain: SxProps = {
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
  // RGB styles
  backgroundColor: 'black',
  width: '100%',
  height: '100%',
  borderRadius: 10,
  border: '5px solid transparent',
  animation: 'rainbowBorder 10s linear infinite',
  '@keyframes rainbowBorder': {
    '0%': {
      borderColor: 'violet'
    },
    '12.5%': {
      borderColor: 'orange'
    },
    '25%': {
      borderColor: 'red'
    },
    '37.5%': {
      borderColor: 'orange'
    },
    '50%': {
      borderColor: 'yellow'
    },
    '62.5%': {
      borderColor: 'green'
    },
    '75%': {
      borderColor: 'blue'
    },
    '87.5%': {
      borderColor: 'indigo'
    },
    '100%': {
      borderColor: 'violet'
    }
  }
}

const wrapper = {
  backgroundColor: 'black',
  height: '100%',
  width: '100%',
}
export default { containerMain, wrapper }
