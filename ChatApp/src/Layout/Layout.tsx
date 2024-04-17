import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sideuserchat from "../Components/Sideuserchat";

function Layout() {
  return (
    <div>
      <Header />
      <div className="flex w-full md:h-[90vh] h-[93vh] ">
        <Sideuserchat />
        <div className="w-full md:w-4/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
