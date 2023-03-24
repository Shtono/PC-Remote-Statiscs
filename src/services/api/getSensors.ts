import axios from "axios";
import { API_BASE_URL} from "../../config/environment";

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
  try {
    const response = await axios.get(url)
    return response.data
  } catch(err: unknown) {
    handleResponseError(err)
  }
}

export default getAllSensors

