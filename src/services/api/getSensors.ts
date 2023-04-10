import axios from "axios"
import { API_BASE_URL, API_BASE_URL_WIFI } from "config/environment"

export const handleResponseError = (err: unknown) => {
  if (err instanceof Error) {
    throw new Error(err.message)
  }
  const error = new Error()
  error.message = 'Something went wrong!'
  return error
}

const getAllSensors = async () => {
  const url = `${API_BASE_URL}/sensors`
  const urlWifi = `${API_BASE_URL_WIFI}/sensors`
  try {
    const response = await axios.get(urlWifi)
    return response.data
  } catch(err: unknown) {
    handleResponseError(err)
  }
}

export default getAllSensors
