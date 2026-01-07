import { useNavigate } from "react-router-dom";
import avatar from "../../assets/img/avatar.svg";

export default function TeacherCard({ teacher }) {
  const navigate = useNavigate();

  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
    >
      {/* Avatar */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={teacher.image || avatar}
          alt="teacher"
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold">{teacher.name}</h3>
          <p className="text-sm text-gray-500">{teacher.email}</p>
        </div>
      </div>

      {/* Info */}
      <div className="text-sm text-gray-600 space-y-1 mb-4">
        <p>
          <span className="font-medium">Subject:</span>{" "}
          {teacher.subject}
        </p>
        <p>
          <span className="font-medium">Class:</span>{" "}
          {teacher.class}
        </p>
        <p>
          <span className="font-medium">Age:</span>{" "}
          {teacher.age}
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate(`/teachers/${teacher.id}`)}
          className="text-blue-500 text-sm font-medium"
        >
          View profile
        </button>

        <button className="text-red-500 text-sm">
          Delete
        </button>
      </div>
    </div>
  );
}
