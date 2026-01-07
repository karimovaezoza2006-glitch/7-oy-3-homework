import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import Teachers from "../pages/teachers/Teachers";
import AddTeacher from "../pages/teachers/AddTeacher";
import TeacherDetail from "../pages/teachers/TeacherDetail";
import Students from "../pages/Students";
import Billing from "../pages/Billing";
import Settings from "../pages/Settings";
import Exams from "../pages/Exams";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="teachers" element={<Teachers />} />
        <Route path="teachers/add" element={<AddTeacher />} />
        <Route path="teachers/:id" element={<TeacherDetail />} />

        <Route path="students" element={<Students />} />
        <Route path="billing" element={<Billing />} />
        <Route path="settings" element={<Settings />} />
        <Route path="exams" element={<Exams />} />
      </Route>
    </Routes>
  );
}
