import { getAllSensors } from "services/api"
import useFetch from "./useFetch"

const useSensors = () => {
  const [data, isLoading, isSuccess, isError] = useFetch(getAllSensors, 1000)
  return { data: data?.sensors, isLoading, isSuccess, isError }
}

export default useSensors
