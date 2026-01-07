export default function Settings() {
  return (
    <div data-aos="fade-up" className="max-w-4xl">
      {/* Top */}
      <div className="mb-8">
        <h1 className="text-xl font-semibold">Settings & Profile</h1>
        <p className="text-sm text-gray-500">
          Update your personal information
        </p>
      </div>

      {/* Profile card */}
      <div className="bg-white rounded-xl p-8 mb-10">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-xl font-semibold">
            N
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Nurillo Suyunboyev
            </h2>
            <p className="text-gray-500 text-sm">
              uyo/school@teachable.com
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Full Name" placeholder="Full Name" />
          <Input label="Email address" placeholder="Email address" />
          <Input label="Phone number" placeholder="Phone number" />
          <Input label="School name" placeholder="School name" />
        </div>

        <div className="mt-8 flex justify-end">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            Save changes
          </button>
        </div>
      </div>

      {/* Password */}
      <div className="bg-white rounded-xl p-8">
        <h3 className="font-semibold mb-6">Change password</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Current password" type="password" />
          <Input label="New password" type="password" />
        </div>

        <div className="mt-6 flex justify-end">
          <button className="border border-gray-300 px-6 py-2 rounded-lg">
            Update password
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- helper ---------- */

function Input({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-sm text-gray-500 mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 border rounded-lg"
      />
    </div>
  );
}
