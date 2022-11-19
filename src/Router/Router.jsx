import { createBrowserRouter } from "react-router-dom";
import DashBoardMain from "../Main/DashBoardMain";
import Main from "../Main/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import Contract from "../Pages/Contact Us/Contract";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import Home from "../Pages/Home/Home/Home";
import Reviews from "../Pages/Reviews/Reviews";
import Login from "../User/Login/Login";
import Registration from "../User/Registration/Registration";
import AdminRoute from "./AdminRoute";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/contactus",
        element: <Contract></Contract>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashBoardMain></DashBoardMain>
      </PrivateRouter>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      {
        path: "/dashboard/myorder",
        element: (
          <AdminRoute>
            <MyOrder></MyOrder>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
