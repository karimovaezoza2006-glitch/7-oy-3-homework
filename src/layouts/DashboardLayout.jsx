import { Outlet } from "react-router-dom";
import Sidebar from "../components/teachers/Sidebar";
import Header from "../components/teachers/Header";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#F7F8FA]">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
