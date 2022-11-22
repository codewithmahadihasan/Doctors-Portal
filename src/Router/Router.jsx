import { createBrowserRouter } from "react-router-dom";
import DashBoardMain from "../Main/DashBoardMain";
import Main from "../Main/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import Payment from "../Pages/Appointment/Payment/Payment";
import Contract from "../Pages/Contact Us/Contract";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ManageDoctor from "../Pages/Dashboard/ManageDoctor/ManageDoctor";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import Home from "../Pages/Home/Home/Home";
import Reviews from "../Pages/Reviews/Reviews";
import Error from "../Pages/Shared/EroorMessage/Error";
import User from "../Pages/User/User";
import Login from "../User/Login/Login";
import Registration from "../User/Registration/Registration";
import AdminRoute from "./AdminRoute";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
      {
        path: "/user",
        element: (
          <PrivateRouter>
            <User></User>
          </PrivateRouter>
        ),
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
      { path: "/dashboard/appointment", element: <Dashboard></Dashboard> },
      { path: "/dashboard", element: <Dashboard></Dashboard> },

      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/${params?.id}`),
      },

      {
        path: "/dashboard/all-user",
        element: (
          <AdminRoute>
            <MyOrder></MyOrder>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/add-doctor",
        element: (
          <AdminRoute>
            <AddDoctor></AddDoctor>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manage-doctor",
        element: (
          <AdminRoute>
            <ManageDoctor></ManageDoctor>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
