export default function Billing() {
  return (
    <div data-aos="fade-up">
      {/* Top */}
      <div className="mb-8">
        <h1 className="text-xl font-semibold">Billing</h1>
        <p className="text-sm text-gray-500">
          Manage your subscription and billing information
        </p>
      </div>

      {/* Current Plan */}
      <div className="bg-white rounded-xl p-6 mb-8 flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-lg">Current Plan</h2>
          <p className="text-gray-500 text-sm mt-1">
            Pro Plan – $29 / month
          </p>
        </div>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
          Upgrade Plan
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <BillingCard title="Next payment" value="12 Oct 2026" />
        <BillingCard title="Payment method" value="Visa •••• 4242" />
        <BillingCard title="Billing status" value="Active" />
      </div>

      {/* Invoice history */}
      <div className="bg-white rounded-xl overflow-hidden">
        <h3 className="font-semibold p-6 border-b">
          Invoice history
        </h3>

        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="p-4 text-left">Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            <InvoiceRow date="01 Sep 2026" amount="$29" />
            <InvoiceRow date="01 Aug 2026" amount="$29" />
            <InvoiceRow date="01 Jul 2026" amount="$29" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function BillingCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-6">
      <p className="text-gray-400 text-sm mb-1">{title}</p>
      <p className="font-semibold text-lg">{value}</p>
    </div>
  );
}

function InvoiceRow({ date, amount }) {
  return (
    <tr className="border-t">
      <td className="p-4">{date}</td>
      <td>{amount}</td>
      <td className="text-green-600">Paid</td>
      <td>
        <button className="text-blue-500 text-sm">
          Download
        </button>
      </td>
    </tr>
  );
}
