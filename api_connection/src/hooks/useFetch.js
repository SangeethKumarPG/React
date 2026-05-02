import { useEffect, useState } from "react";
export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState();
  const [errorState, setErrorState] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        console.log("Places", places);
        setFetchedData(places);
      } catch (error) {
        setErrorState({
          message: error.message || "Failed to fetch data",
        });
      }
      setIsFetching(false);
    }
    fetchData();
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    errorState,
  };
}
