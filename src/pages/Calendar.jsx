import {
  FiChevronLeft,
  FiChevronRight,
  FiPlus,
} from "react-icons/fi";
import { useState } from "react";


const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

export default function Calendar() {

  const [view, setView] = useState("month");

  return (
    <div className="min-h-screen bg-[#F7F8FC] p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-700">Calendar</h1>

        <button className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white">
          <FiPlus /> Add Event
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"><FiChevronLeft /></button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50"><FiChevronRight /></button>
            <button className="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-600">
              Today
            </button>
          </div>

          <h2 className="text-[22px] font-semibold text-gray-700">
            September
            <span className="ml-2 text-lg font-medium text-gray-400">
              2020
            </span>
          </h2>
          <div className="flex overflow-hidden rounded-full border border-gray-200 bg-white">

            <button
              onClick={() => setView("month")}
              className={`px-6 py-2 text-sm font-medium transition ${view === "month"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-600"
                }`}
            >
              Month
            </button>

            <button
              onClick={() => setView("week")}
              className={`px-6 py-2 text-sm font-medium transition ${view === "week"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-600"
                }`}
            >
              Week
            </button>

            <button
              onClick={() => setView("day")}
              className={`px-6 py-2 text-sm font-medium transition ${view === "day"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-600"
                }`}
            >
              Day
            </button>

          </div>
        </div>


        {view === "month" && (
          <div className="grid grid-cols-7">
            {days.map((day) => (
              <div
                key={day}
                className="border-b py-3 text-center text-xs font-semibold text-gray-400"
              >
                {day}
              </div>
            ))}

            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className="relative h-32 border border-gray-100 p-3"
              >
                <span>{i + 1}</span>

                {i === 2 && (
                  <div className="mt-2 rounded bg-cyan-100 p-1 text-[10px]">
                    Call Back Priscilla
                  </div>
                )}

                {i === 9 && (
                  <div className="mx-auto mt-5 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white">
                    8
                  </div>
                )}

                {i === 16 && (
                  <div className="mt-2 rounded bg-yellow-100 p-1 text-[10px]">
                    Project Rocket
                  </div>
                )}

                {i === 23 && (
                  <div className="mt-2 rounded bg-green-100 p-1 text-[10px]">
                    Presentation
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {view === "week" && (
          <div className="grid grid-cols-8">
            <div className="border-r">
              {["8AM", "9AM", "10AM", "11AM", "12PM", "1PM"].map(t => (
                <div key={t} className="h-24 border-b px-2 pt-2 text-xs text-gray-400">{t}</div>
              ))}
            </div>

            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
              <div key={d} className="relative border-r">
                <div className="h-12 border-b text-center">
                  <p className="text-xs text-gray-400">{d}</p>
                  <span className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full ${i === 2 ? "bg-green-600 text-white" : ""
                    }`}>{i + 6}</span>
                </div>

                {Array.from({ length: 6 }).map((_, j) => (
                  <div key={j} className="h-24 border-b"></div>
                ))}

                {i === 1 && (
                  <div className="absolute left-2 top-20 w-[90%] rounded-lg bg-cyan-100 p-2 text-xs">
                    Meeting 10:00
                  </div>
                )}

                {i === 4 && (
                  <div className="absolute left-2 top-56 h-40 w-[90%] rounded-lg bg-green-100 p-2 text-xs">
                    Presentation
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {view === "day" && (
  <div className="overflow-auto">

    <div className="border-b py-3 text-center">
      <p className="text-xs uppercase text-gray-400">Tuesday</p>
      <h2 className="text-2xl font-bold text-gray-700">7</h2>
    </div>

    <div className="grid grid-cols-[70px_1fr]">

      {/* Time */}
      <div>
        {[
          "01:00","02:00","03:00","04:00","05:00","06:00",
          "07:00","08:00","09:00","10:00","11:00","12:00"
        ].map((time) => (
          <div
            key={time}
            className="h-20 border-b pr-3 pt-2 text-right text-xs text-gray-400"
          >
            {time}
          </div>
        ))}
      </div>

      {/* Schedule */}
      <div className="relative">

        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-20 border-b"></div>
        ))}

        <div className="absolute left-2 top-4 w-[98%] rounded bg-yellow-100 p-2 text-xs">
          <p className="font-semibold">10:00 - 11:30</p>
          <p>Project Rocket</p>
        </div>

        <div className="absolute left-2 top-24 h-40 w-[98%] rounded bg-cyan-100 p-2 text-xs">
          <p className="font-semibold">10:00 - 11:30</p>
          <p>New Event</p>
        </div>

        <div className="absolute left-2 top-64 w-[98%] rounded bg-cyan-100 p-2 text-xs">
          <p className="font-semibold">10:00 - 11:30</p>
          <p>Call Back Priscilla</p>
        </div>

        <div className="absolute left-2 top-[500px] h-20 w-[98%] rounded bg-green-100 p-2 text-xs">
          <p className="font-semibold">10:00 - 11:30</p>
          <p>Presentation</p>
        </div>

        {/* Current Time */}
        <div className="absolute left-0 top-[300px] flex w-full items-center">
          <div className="rounded-r-full bg-red-400 px-2 py-1 text-[10px] text-white">
            06:30
          </div>
          <div className="h-[2px] flex-1 bg-red-300"></div>
        </div>

      </div>
    </div>
  </div>
)}


      </div>
    </div>
  );
}