import { SxProps} from "@mui/material";

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
  animation: 'rainbowBorder 10s ease-in infinite',
  '@keyframes rainbowBorder': {
    '0%': {
      borderColor: 'red'
    },
    '16.6%': {
      borderColor: 'orange'
    },
    '33.3%': {
      borderColor: 'yellow'
    },
    '50%': {
      borderColor: 'green'
    },
    '66.6%': {
      borderColor: 'blue'
    },
    '83.3%': {
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
export default { containerMain, wrapper };
