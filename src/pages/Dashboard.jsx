export default function Dashboard() {
  return (
    <div className="max-w-4xl" data-aos="fade-up">
      
      {/* Top banner */}
      <div className="bg-white rounded-xl p-4 mb-10 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">
            Learn how to launch faster
          </p>
          <p className="text-sm text-gray-400">
            Watch our webinar for tips from our experts and get a limited time offer.
          </p>
        </div>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
          Log out
        </button>
      </div>

      {/* Welcome */}
      <div className="text-center mb-14">
        <h1 className="text-3xl font-semibold mb-2">
          Welcome to your dashboard, Udemy school
        </h1>
        <p className="text-gray-500">
          Uyo/school/@teachable.com
        </p>
      </div>

      {/* Actions */}
      <div className="space-y-8 max-w-xl mx-auto">
        
        <DashboardItem
          title="Add other admins"
          desc="Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!"
          icon="👤"
        />

        <DashboardItem
          title="Add classes"
          desc="Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!"
          icon="🏫"
        />

        <DashboardItem
          title="Add students"
          desc="Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!"
          icon="🎓"
        />

      </div>
    </div>
  );
}

/* -------- component -------- */

function DashboardItem({ title, desc, icon }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-5">
          {desc}
        </p>
      </div>
    </div>
  );
}
