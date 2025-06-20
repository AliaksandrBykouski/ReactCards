import React from "react";
import classes from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/index.jsx";

const MainLayout = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={classes["main-layout"]}>
      <Header />
      <div className={classes["main-wrapper"]}>
        <main className={classes["main"]}>
          <Outlet />
        </main>
        <footer className={classes["footer"]}>
          React Questions Card Application | {currentYear} <br />
          by Aliaksandr Bykouski
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
