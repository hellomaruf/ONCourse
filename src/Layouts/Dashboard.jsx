import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Dashboard;
