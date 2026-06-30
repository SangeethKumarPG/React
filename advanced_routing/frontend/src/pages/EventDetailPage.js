import { useRouteLoaderData, redirect, Await } from "react-router-dom";
import EventItem from "../components/EventItem.js";
import EventList from "../components/EventsList.js";
import { Suspense } from "react";
export default function EventDetailsPage() {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}
async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details of the selected event",
      }),
      {
        status: 500,
      },
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}
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
export async function loader({ request, params }) {
  const id = params.id;
  return {
    event: await loadEvent(id),
    events: loadEvents(),
  };
}

export async function action({ params }) {
  const eventId = params.id;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Response({ message: "Could not delete event" }, { status: 500 });
  }
  return redirect("/events");
}
