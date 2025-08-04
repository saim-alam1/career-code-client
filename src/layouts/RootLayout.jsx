import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-285px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
