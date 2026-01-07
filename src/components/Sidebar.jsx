import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const menu = [
  { name: "Dashboard", path: "/" },
  { name: "Teachers", path: "/teachers" },
  { name: "Students", path: "/students" },
  { name: "Billing", path: "/billing" },
  { name: "Settings and profile", path: "/settings" },
  { name: "Exams", path: "/exams" },
];

export default function Sidebar() {
  return (
    <aside className="w-[260px] bg-[#14235B] text-white flex flex-col">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
        <img src={logo} alt="logo" className="w-10 h-10" />
        <span className="font-semibold">Udemy Inter.school</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg transition ${
                isActive
                  ? "bg-[#3B82F6]"
                  : "hover:bg-white/10"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="px-6 py-4 text-sm text-white/60">
        Features <span className="ml-2 bg-white/20 px-2 py-0.5 rounded">NEW</span>
      </div>
    </aside>
  );
}
