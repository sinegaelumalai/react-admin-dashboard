import { motion } from "framer-motion";
import {
  FiCalendar,
  FiChevronDown,
} from "react-icons/fi";

import chart from "../assets/horizontal-chart.png";

export default function StatisticsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-[25px] font-semibold text-gray-700">
          Statistics
        </h2>

        <div className="flex items-center gap-8">
          {/* Legend */}
          <div className="hidden sm:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-600"></span>
              <span className="text-lg text-gray-500">
                Income
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-cyan-400"></span>
              <span className="text-lg text-gray-500">
                Expense
              </span>
            </div>
          </div>

          {/* Date */}
          <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50">
            <FiCalendar className="text-xl" />

            <span className="text-base">
              19 Aug – 25 Aug
            </span>

            <FiChevronDown />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6">
        <img
          src={chart}
          alt="Horizontal Statistics"
          className="w-full rounded-xl object-contain"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}