import Places from "./Places.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

async function fetchSortedPlaces() {
  try {
    const places = await fetchAvailablePlaces();

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude,
          );
          resolve(sortedPlaces);
        },
        (error) => {
          reject(new Error("Failed to fetch sortedPlaces"));
        },
      );
    });
  } catch (error) {
    throw new Error("Failed to fetch sortedPlaces");
  }
}
export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isFetching,
    errorState,
    setFetchedData: setAvailablePlaces,
    fetchedData: availablePlaces,
  } = useFetch(fetchSortedPlaces, []);

  if (errorState) {
    return <ErrorPage title="An error occured" message={errorState.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching available places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
