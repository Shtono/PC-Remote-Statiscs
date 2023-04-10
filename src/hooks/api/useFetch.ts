import { useEffect, useState } from "react"

const useFetch = (request: () => Promise<any>, interval=0) => {
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await request()
        setData(response)
        setIsSuccess(true)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    if (interval && interval >= 1000) {
      const fetchInterval = setInterval(() => {
        fetchData()
      }, interval)
      return () => clearInterval(fetchInterval)
    }
    fetchData()
  }, [request])

  return [data, isLoading, isSuccess, isError]
}

export default useFetch
