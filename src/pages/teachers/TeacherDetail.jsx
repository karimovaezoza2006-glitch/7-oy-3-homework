import { useParams } from "react-router-dom";

export default function TeacherDetail() {
  const { id } = useParams();

  return (
    <div data-aos="fade-up">
      <h1 className="text-xl font-semibold mb-6">
        Teacher Detail #{id}
      </h1>

      <div className="bg-white p-6 rounded-xl">
        Teacher profile info here...
      </div>
    </div>
  );
}
