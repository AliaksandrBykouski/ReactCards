import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider/AuthProvider.jsx";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
