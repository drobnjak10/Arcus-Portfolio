import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { postApiRequest } from "./apiCalls";

const AuthContext = createContext(null);
const cookies = new Cookies();

const checkAuth = () => {
  const user = cookies.get("access_token");

  if (user) {
    return true;
  } else {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(checkAuth());
  const [error, setError] = useState(null);


  const login = async (user) => {
    try {
      const response = await postApiRequest(user, "/user/login");

      if (response.error) {
        setError(response.error);
        return;
      }

      if (response.token) {
        setUser(true);
        cookies.set("access_token", response.token);
      }
    } catch (error) {
      setError(true);
    }
  };

  const logout = () => {
    cookies.remove("access_token");
    setUser(false)
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
