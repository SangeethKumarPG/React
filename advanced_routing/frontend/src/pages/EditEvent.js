import EventForm from "../components/EventForm.js";
import { useRouteLoaderData } from "react-router-dom";

export default function EditEvent() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;
  return (
    <>
      <EventForm event={event} method="PATCH" />
    </>
  );
}
