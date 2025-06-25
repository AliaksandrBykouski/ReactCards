import classes from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import Loader from "../Loader";

const MainLayout = () => {
  return (
    <>
      <div className={classes["main-layout"]}>
        <Header />
        <div className={classes["main-wrapper"]}>
          <main className={classes.main}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
          <Footer />
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default MainLayout;
