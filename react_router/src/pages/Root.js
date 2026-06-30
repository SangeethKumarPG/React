import { Outlet } from "react-router-dom";
import classes from "./Root.module.css";
import MainNavigation from "../components/MainNavigation.js";
function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}></main>
      <Outlet />
    </>
  );
}

export default RootLayout;
