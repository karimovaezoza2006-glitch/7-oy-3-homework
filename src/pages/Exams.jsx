import { useState } from "react";

const upcomingExams = [
  {
    id: 1,
    title: "Mathematics Final Exam",
    class: "JSS 3",
    date: "20 Oct 2026",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "English Language Test",
    class: "SS 1",
    date: "25 Oct 2026",
    time: "09:00 AM",
  },
];

const pastExams = [
  {
    id: 3,
    title: "Chemistry Midterm",
    class: "SS 2",
    date: "10 Sep 2026",
    status: "Completed",
  },
  {
    id: 4,
    title: "Biology Quiz",
    class: "JSS 2",
    date: "02 Sep 2026",
    status: "Completed",
  },
];

export default function Exams() {
  const [tab, setTab] = useState("upcoming");

  return (
    <div data-aos="fade-up">
      {/* Top */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Exams</h1>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">
          Add Exam
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        <TabButton
          active={tab === "upcoming"}
          onClick={() => setTab("upcoming")}
        >
          Upcoming exams
        </TabButton>
        <TabButton
          active={tab === "past"}
          onClick={() => setTab("past")}
        >
          Past exams
        </TabButton>
      </div>

      {/* Content */}
      {tab === "upcoming" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingExams.map((exam) => (
            <UpcomingExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      ) : (
        <PastExamTable />
      )}
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function TabButton({ active, children, ...props }) {
  return (
    <button
      {...props}
      className={`px-5 py-2 rounded-lg text-sm ${
        active
          ? "bg-blue-500 text-white"
          : "bg-white border text-gray-500"
      }`}
    >
      {children}
    </button>
  );
}

function UpcomingExamCard({ exam }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold mb-2">{exam.title}</h3>

      <p className="text-sm text-gray-500 mb-4">
        Class: {exam.class}
      </p>

      <div className="flex justify-between text-sm text-gray-600">
        <span>📅 {exam.date}</span>
        <span>⏰ {exam.time}</span>
      </div>

      <div className="mt-4">
        <span className="inline-block bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs">
          Upcoming
        </span>
      </div>
    </div>
  );
}

function PastExamTable() {
  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="p-4 text-left">Exam</th>
            <th>Class</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pastExams.map((exam) => (
            <tr key={exam.id} className="border-t">
              <td className="p-4">{exam.title}</td>
              <td>{exam.class}</td>
              <td>{exam.date}</td>
              <td>
                <span className="text-green-600 text-sm">
                  {exam.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
