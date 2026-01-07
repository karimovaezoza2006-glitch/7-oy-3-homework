import { useNavigate } from "react-router-dom";
import { useState } from "react";
import emptyImg from "../../assets/img/empty-teachers.svg";
import TeacherTable from "../../components/teachers/TeacherTable";

export default function Teachers() {
  const navigate = useNavigate();

  const [teachers, setTeachers] = useState([]);

  return (
    <div data-aos="fade-up">
      {/* Top */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Teachers</h1>
        <button
          onClick={() => navigate("/teachers/add")}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg"
        >
          Add Teachers
        </button>
      </div>

      {/* Search */}
      <input
        placeholder="Search for a teacher by name or email"
        className="w-full px-4 py-3 border rounded-lg mb-8"
      />

      {/* Empty or Table */}
      {teachers.length === 0 ? (
        <div className="bg-white rounded-xl p-16 text-center">
          <img src={emptyImg} className="mx-auto w-52 mb-6" />
          <h2 className="font-semibold text-lg">
            No Teachers at this time
          </h2>
          <p className="text-gray-500 text-sm">
            Teachers will appear here after they enroll in your school.
          </p>
        </div>
      ) : (
        <TeacherTable teachers={teachers} />
      )}
    </div>
  );
}
