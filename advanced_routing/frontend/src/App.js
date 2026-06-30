import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import EventsPage, { loader as eventLoader } from "./pages/EventsPage.js";
import EventDetailPage from "./pages/EventDetailPage.js";
import NewEventPage from "./pages/NewEventPage.js";
import EditEventPage from "./pages/EditEvent.js";
import RootLayout from "./pages/RootLayout.js";
import { RouterProvider } from "react-router-dom";
import EventsRootLayout from "./pages/EventsRoot.js";
import ErrorPage from "./pages/Error.js";
import {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetailPage.js";
import { action as manipulateEventAction } from "./components/EventForm.js";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsRootLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventLoader,
            },
            {
              path: ":id",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEventAction,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: manipulateEventAction,
                },
              ],
            },
            {
              path: "new",
              element: <NewEventPage />,
              action: manipulateEventAction,
            },
          ],
        },
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
