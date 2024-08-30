
import AsideDashboard from "../Component/asidedashboard/AsideDashboard";
import { Outlet } from "react-router-dom";

const Maindash = () => {
  return (
    <div className="flex">
      <div className="w-[30%]">
        <AsideDashboard></AsideDashboard>
      </div>
      <div className="w-[70%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Maindash;
