import classes from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";
import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";

const MainLayout = () => {
  return (
    <div className={classes["main-layout"]}>
      <Header />
      <div className={classes["main-wrapper"]}>
        <main className={classes.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
