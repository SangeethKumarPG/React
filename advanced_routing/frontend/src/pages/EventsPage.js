import { useLoaderData, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
//import { defer } from "react-router-dom";
import { Suspense } from "react";
function EventsPage() {
  const data = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  // const events = data.events;
  // return (
  //   <>
  //     <EventsList events={events} />
  //   </>
  // );
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  } else {
    //return response;
    const resData = await response.json();
    return resData.events;
  }
}
export async function loader() {
  // defer({
  //   events: loadEvents(),
  // });
  return {
    events: loadEvents(),
  };
}
