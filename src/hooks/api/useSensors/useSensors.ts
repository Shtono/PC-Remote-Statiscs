import { useState, useEffect } from "react";
import { getAllSensors } from "services/api";

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
    return () => clearInterval(interval);
  }, []);

  return sensors;
};

export default useSensors;

// import { useState, useEffect } from "react";
// import { getAllSensors } from "services/api";
//
// const useSensors = () => {
//   const [sensors, setSensors] = useState<any>([]);
//   const [isFetching, setIsFetching] = useState<boolean>(true);
//   const [isError, setIsError] = useState<boolean>(false);
//   const [isSuccess, setIsSuccess] = useState<boolean>(false);
//
//   useEffect(() => {
//     const getSensors = async () => {
//       setIsFetching(true);
//       setIsError(false);
//       setIsSuccess(false);
//
//       try {
//         const data = await getAllSensors();
//         setSensors(data.sensors);
//         setIsSuccess(true);
//       } catch (error) {
//         setIsError(true);
//       }
//
//       setIsFetching(false);
//     };
//
//     const interval = setInterval(() => {
//       getSensors();
//     }, 1000);
//
//     return () => clearInterval(interval);
//   }, []);
//
//   return [sensors, isFetching, isError, isSuccess];
// };
//
// export default useSensors;

// const useFetchData = (request: RequestType) => {
//   const [data, setData] = useState<any>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [isSuccess, setIsSuccess] = useState<boolean>(false);
//   const [isError, setIsError] = useState<boolean>(false);
//
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await request();
//         setData(response.data);
//         setIsSuccess(true);
//       } catch (error) {
//         setIsError(true);
//       }
//       setIsLoading(false);
//     };
//
//     fetchData();
//   }, [request]);
//
//   return [data, isLoading, isSuccess, isError];
// };
//
// export default useFetchData;

// import { useCallback } from "react";
// import useFetchData from "./useFetchData";
// import axios from "axios";
//
// const getUsers = async () => {
//   const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//   return response;
// };
//
// const useUsers = () => {
//   const [data, isLoading, isSuccess, isError] = useFetchData(useCallback(getUsers, []));
//
//   return [data, isLoading, isSuccess, isError];
// };
//
// export default useUsers;

// RGB
// .main-container {
//   background-color: black;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   border-radius: 20px;
//   border: 5px solid transparent;
//   animation: rainbowBorder 2s linear infinite;
//   color: 'red'
// }
//
// @keyframes rainbowBorder {
//   0% {
//     border-color: red;
// }
//   16.6% {
//     border-color: orange;
// }
//   33.3% {
//     border-color: yellow;
// }
//   50% {
//     border-color: green;
// }
//   66.6% {
//     border-color: blue;
// }
//   83.3% {
//     border-color: indigo;
// }
//   100% {
//     border-color: violet;
// }
// }
