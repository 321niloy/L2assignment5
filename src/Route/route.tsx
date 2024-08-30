import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home/Home";
import About from "../Page/About/About";
import SignUp from "../Page/SignUp/SignUp";
import Login from "../Page/Login/Login";
import Maindash from "../Page/Maindash";
import Usermydashboard from "../Component/MyuserDashboard/Usermydashboard";
import BikeListing from "../Page/BikeListingPage/BikeListing";
import UsersingelBikepage from "../Component/UserSingelBikePage/UsersingelBikepage";
import AdminBikemanage from "../Page/AdminBikeManage/AdminBikemanage";
import UpdateBike from "../Page/updateBike/UpdateBike";
import CreateBike from "../Page/createBike/CreateBike";
import AdminUserManage from "../Page/AdminUsermanage/AdminUserManage";
import BookingUser from "../Page/BookingUsers/BookingUser";
import ExtraretrunPage from "../Page/extraTimeRetrun/ExtraretrunPage";
import ReturnBikeSingel from "../Page/returnBikeSingel/ReturnBikeSingel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singelpage/:id",
        element: <UsersingelBikepage></UsersingelBikepage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Maindash></Maindash>,
    children: [
      {
        path: "/dashboard",
        element: <Usermydashboard></Usermydashboard>,
      },
      {
        path: "/dashboard/bikelist",
        element: <BikeListing></BikeListing>,
      },
      {
        path: "/dashboard/sigelbikelist/:id",
        element: <UsersingelBikepage></UsersingelBikepage>,
      },
      {
        path: "/dashboard/admin/bikemanagement",
        element: <AdminBikemanage></AdminBikemanage>,
      },
      {
        path: "/dashboard/admin/updatebike/:id",
        element: <UpdateBike></UpdateBike>,
      },
      {
        path: "/dashboard/admin/createBike",
        element: <CreateBike></CreateBike>,
      },
      {
        path: "/dashboard/admin/usermanagement",
        element: <AdminUserManage></AdminUserManage>,
      },

      {
        path: "/dashboard/admin/bookinguserdata",
        element: <BookingUser></BookingUser>,
      },
      {
        path: "/dashboard/admin/extratimeReturn/:id",
        element: <ExtraretrunPage></ExtraretrunPage>,
      },
      {
        path: "/dashboard/user/usersuccessfullruturn",
        element: <ReturnBikeSingel></ReturnBikeSingel>,
      },
    ],
  },
]);
