import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { AuthContext } from "../Provider/Auth/AuthProvider";
import Loader from "./Loader/Loader";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <Header></Header>
        <Loader></Loader>

        <Footer></Footer>
      </>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;
