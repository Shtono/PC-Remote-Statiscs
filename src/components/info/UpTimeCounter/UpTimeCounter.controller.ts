import { UpTimeState } from "./UpTimeCounter.types"

export const formatTime = (state: UpTimeState) => {
  const hours = state.hours < 10 ? `0${state.hours}` : state.hours
  const minutes = state.minutes < 10 ? `0${state.minutes}` : state.minutes
  const seconds = state.seconds < 10 ? `0${state.seconds}` : state.seconds
  return `${hours}:${minutes}:${seconds}`
}
