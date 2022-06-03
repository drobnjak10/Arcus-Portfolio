import React, { useEffect } from "react";
import { useAuth } from "../AuthContext";
import { Navigate } from "react-router-dom";
import { checkIsTokenValid } from "../apiCalls";

const ProtectedRoute = ({ children }) => {
  const { user, logout } = useAuth();

  useEffect(() => {
    const getToken = async () => {
      const data = await checkIsTokenValid();
      if (data.error) {
        logout();
      }
    };
    getToken();
  }, []);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default ProtectedRoute;
