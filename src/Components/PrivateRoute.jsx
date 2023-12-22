/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Context from "../Hooks/Context";
import Loading from "./Lodding";



const PrivateRoute = ({ children }) => {
  const { user, loading } = Context();
  const location = useLocation();
  console.log(location);
  if (loading)
    return (
      <div className="flex justify-center mx-auto mt-20">
<Loading></Loading>
      </div>
    );

  if (user&& !loading) {
    return children;
  }
  return <Navigate   state={location.pathname} to="/login"  />;

};

export default PrivateRoute;