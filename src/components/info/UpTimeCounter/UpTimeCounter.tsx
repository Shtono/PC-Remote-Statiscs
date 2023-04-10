import { useEffect, useState } from "react"
import { Stack, Typography } from "@mui/material"
import { formatTime } from "./UpTimeCounter.controller"
import { counterStartValue } from "components/info/UpTimeCounter/UpTimeCounter.model"

const UpTimeCounter = () => {
  const [state, setState] = useState(counterStartValue)

  useEffect(() => {
    const interval = setInterval(() => {
      let { milliSeconds, seconds, minutes, hours } = state
      milliSeconds += 1000
      if (milliSeconds === 1000) {
        seconds += 1
        milliSeconds = 0
      }
      if (seconds === 60) {
        minutes += 1
        seconds = 0
      }
      if (minutes === 60) {
        hours += 1
        minutes = 0
      }
      setState({ milliSeconds, seconds, minutes, hours })
    }, 1000)

    return () => clearInterval(interval)
  }, [state])

  return (
    <Stack width={1} direction="row" justifyContent="center">
      <Typography  sx={{}}>{formatTime(state)}</Typography>
    </Stack>
  )
}

export default UpTimeCounter
