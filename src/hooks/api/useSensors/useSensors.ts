import { useState, useEffect } from "react";
import { getAllSensors} from "services/api";

const useSensors = () => {
  const [sensors, setSensors] = useState<any>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getSensors = async () => {
      const data = await getAllSensors();
      setSensors(data.sensors);
    };
    const interval = setInterval(() => {
      getSensors();
    }, 1000);
    return () => clearInterval(interval)
  }, []);

  return sensors;
}

export default useSensors;
