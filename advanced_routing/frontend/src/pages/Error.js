import PageContent from "../components/PageContent.js";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.js";
function ErrorPage() {
  const error = useRouteError();
  let title = "An error occured!";
  let message = "Something wen wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find the respource for the page.";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
