import { Outlet, useLocation } from "react-router-dom";


import Navbar from "./Components/Navber";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import BackToTop from "./Hooks/useTop";
import RootLayout from "./Layout/DrayerLayout";

const Main = () => {

  const location = useLocation()
  console.log(location);

  return (
    <div className=" mx-auto max-w-screen-xl">
  {/* {login||singup || <Navbar></Navbar>} */}
          <div className=" min-h-[calc(100vh-68px)]">
         <RootLayout>
         <Outlet></Outlet>
         </RootLayout>
          </div>
            <div className="">
           
            </div>
  <div className="border-2">  
  </div>
      <Toaster />
     <BackToTop></BackToTop>
    </div>
  );
};

export default Main;