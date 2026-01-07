import { useState } from "react";

const studentsData = [
  {
    id: 1,
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    class: "JSS 2",
    gender: "Male",
  },
  {
    id: 2,
    name: "Sophia Williams",
    email: "sophia.w@example.com",
    class: "JSS 3",
    gender: "Female",
  },
  {
    id: 3,
    name: "Daniel Brown",
    email: "daniel.brown@example.com",
    class: "SS 1",
    gender: "Male",
  },
];

export default function Students() {
  const [search, setSearch] = useState("");

  const filteredStudents = studentsData.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div data-aos="fade-up">
      {/* Top */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Students</h1>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
          Add Student
        </button>
      </div>

      {/* Search */}
      <input
        placeholder="Search student by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-3 border rounded-lg mb-8"
      />

      {/* Students grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

/* ---------- CARD ---------- */

function StudentCard({ student }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4 mb-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-semibold">
          {student.name[0]}
        </div>

        <div>
          <h3 className="font-semibold">{student.name}</h3>
          <p className="text-sm text-gray-500">{student.email}</p>
        </div>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        <p>
          <span className="text-gray-400">Class:</span>{" "}
          {student.class}
        </p>
        <p>
          <span className="text-gray-400">Gender:</span>{" "}
          {student.gender}
        </p>
      </div>

      <div className="mt-4 flex justify-end">
        <button className="text-blue-500 text-sm font-medium">
          View profile →
        </button>
      </div>
    </div>
  );
}
