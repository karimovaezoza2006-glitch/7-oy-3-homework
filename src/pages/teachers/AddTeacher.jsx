import { useNavigate } from "react-router-dom";

export default function AddTeacher() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/teachers");
  };

  return (
    <form onSubmit={handleSubmit} data-aos="fade-up">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-semibold">Add teacher</h1>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg"
        >
          Save
        </button>
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
        <Input label="Full Name" placeholder="Full Name" />
        <Select label="Class" options={["1-A", "2-B"]} />

        <Input label="Email address" placeholder="Email address" />
        <Select label="Gender" options={["Male", "Female"]} />

        <Select label="Subject" options={["Math", "English"]} />
        <Input label="Age" placeholder="Age" type="number" />

        <Textarea label="About" />
        <Upload />
      </div>
    </form>
  );
}

/* -------- helpers -------- */

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-gray-500 mb-2">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 border rounded-lg"
    />
  </div>
);

const Select = ({ label, options }) => (
  <div>
    <label className="block text-sm text-gray-500 mb-2">{label}</label>
    <select className="w-full px-4 py-3 border rounded-lg bg-white">
      <option>{label}</option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);

const Textarea = ({ label }) => (
  <div>
    <label className="block text-sm text-gray-500 mb-2">{label}</label>
    <textarea
      rows="6"
      className="w-full px-4 py-3 border rounded-lg resize-none"
    />
  </div>
);

const Upload = () => (
  <div>
    <label className="block text-sm text-gray-500 mb-2">Import Img</label>
    <div className="h-[160px] border rounded-lg flex items-center justify-center text-gray-400">
      Upload image
    </div>
  </div>
);
