import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Siderbar";

export default function MainLayout() {
  return (
    <div className="h-screen flex bg-white ">
      <Sidebar/>

      <div className="flex-1 flex flex-col overflow-hidden bg-[#F6F4FC] rounded-[20px] ">
        <Header/>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}