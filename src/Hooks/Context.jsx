import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";


const Context = () => {
  const all = useContext(AuthContext);
  return all;
};

export default Context;