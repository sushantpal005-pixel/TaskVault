import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { setUser } from "../Redux/authSlice";
import { useDispatch } from "react-redux";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/v1/user/getProfile",
          {
            withCredentials: true,
          }
        );

        if (res.data.success) {
          setIsAuthenticated(true);
          dispatch(setUser(res.data))
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-slate-400">Checking authentication...</p>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;