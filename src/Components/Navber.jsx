/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import Context from "../Hooks/Context";
import { SlBadge } from "react-icons/sl";
const Navbar = () => {
  const { user, logOut } = Context();
  return (
    
    <div className="navbar  bg-opacity-30 bg-black text-white">
      <div className="flex items-center mr-10  ">
        <Link to={"/"} className="flex w-24 text-xl items-center font-bold ">
          <img className="" src={Logo} alt="" />
          <p className="text-xl font-extrabold">TASKPERT</p>
        </Link>
      </div>
      <div className="flex-none  hidden  justify-end lg:block  ml-10 pl-20">
        <div className="flex items-center gap-2">
          {/* Navbar menu content here */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
            }
          >
            About
          </NavLink>

          <ul className="md:flex gap-5 pr-20">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "btn btn-warning btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/Add_task"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "btn btn-warning btn-sm"
                  : "btn btn-ghost btn-sm"
              }
            >
              <li className="">Add Task</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="navbar-end ml-10 ">
        {user?.email ? (
          <div className="dropdown dropdown-end dropdown-hover text-black ">
            <label
              tabIndex={0}
              className="btn  online btn-ghost btn-circle avatar"
            >
              <div className="w-full border rounded-full">
                <img className=" h-5/6" src={user.photoURL} />
                <SlBadge />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className=" py-2 ">
                <NavLink
                  to={"/Dashboard"}
                  className={({ isPending, isActive }) =>
                    isPending
                      ? "pending "
                      : isActive
                      ? "btn btn-warning "
                      : "btn btn-ghost "
                  }
                >
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isPending, isActive }) =>
                    isPending
                      ? "pending "
                      : isPending
                      ? "pending "
                      : isActive
                      ? "btn btn-outline  "
                      : "btn btn-ghost "
                  }
                  onClick={logOut}
                >
                  LOGOUT
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending "
                : isPending
                ? "pending "
                : isActive
                ? "btn btn-warning "
                : "btn btn-ghost "
            }
          >
            Login
          </NavLink>
        )}
      </div>
      <div className="">
        <label
          htmlFor="my-drawer-3"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost lg:hidden "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
