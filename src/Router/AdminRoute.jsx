import React, { useContext } from "react";
import { Footer } from "react-day-picker";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../CostomHoq/Hook";
import Header from "../Pages/Shared/Header/Header";
import { AuthContext } from "../Provider/Auth/AuthProvider";
import Loader from "./Loader/Loader";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isAdmin] = useAdmin(user?.email);

  if (loading) {
    return (
      <>
        <Header></Header>
        <Loader></Loader>

        <Footer></Footer>
      </>
    );
  }

  if (isAdmin) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
