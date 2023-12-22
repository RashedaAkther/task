import PropTypes from 'prop-types';
import Navbar from '../Components/Navber';
import Footer from '../Components/Footer';
import Sidebar from '../Components/SideBar';

const RootLayout = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar ">
          <Navbar/>
        </div>
        {/* Page content here */}
        {children}
        <Footer />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200 bg-opacity-60">
          {/* Sidebar content here */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node,
};

export default RootLayout;