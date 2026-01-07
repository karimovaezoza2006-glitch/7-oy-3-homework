import { NavLink } from "react-router-dom";

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
    <aside className="w-[260px] bg-[#14235B] text-white">
      <div className="p-6 font-semibold border-b border-white/10">
        Udemy Inter.school
      </div>

      <nav className="p-4 space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg ${
                isActive ? "bg-blue-500" : "hover:bg-white/10"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
