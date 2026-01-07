import { useNavigate } from "react-router-dom";

const teachers = [
  {
    id: 1,
    name: "Kristin Watson",
    subject: "Chemistry",
    class: "JSS 2",
    email: "michelle.rivera@example.com",
    gender: "Female",
  },
];

export default function TeacherTable() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th>Subject</th>
            <th>Class</th>
            <th>Email address</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((t, i) => (
            <tr
              key={t.id}
              onClick={() => navigate(`/teachers/${t.id}`)}
              className={`cursor-pointer ${
                i % 2 ? "bg-blue-50" : ""
              }`}
            >
              <td className="p-4">{t.name}</td>
              <td>{t.subject}</td>
              <td>{t.class}</td>
              <td>{t.email}</td>
              <td>{t.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
