import { motion } from "framer-motion";
import { FiCalendar, FiChevronDown } from "react-icons/fi";
import barChart from "../assets/Statistics.png";

export default function BarChartCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg"
    >
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-gray-700">
          Statistics
        </h2>

        <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50">
          <FiCalendar className="text-lg" />
          <span>19 Aug - 25 Aug</span>
          <FiChevronDown />
        </button>
      </div>

      {/* Chart */}
      <img
        src={barChart}
        alt="Statistics Chart"
        className="w-full rounded-xl object-contain"
      />
    </motion.div>
  );
}