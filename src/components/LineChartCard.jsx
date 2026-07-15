import { motion } from "framer-motion";
import { FiCalendar, FiChevronDown, FiArrowUp, FiArrowDown } from "react-icons/fi";
import analytics from "../assets/analytics.png";

export default function LineChartCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg"
    >
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-3xl font-semibold text-gray-700">
          Analytics
        </h2>

        <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-500 transition hover:bg-gray-50">
          <FiCalendar className="text-lg" />
          <span>19 Aug - 25 Aug</span>
          <FiChevronDown />
        </button>
      </div>

      {/* Values */}
      <div className="mt-8 flex flex-wrap gap-10">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
            <FiArrowUp className="text-2xl text-green-600" />
          </div>

          <span className="text-4xl font-semibold text-gray-700">
            $5.850
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100">
            <FiArrowDown className="text-2xl text-cyan-500" />
          </div>

          <span className="text-4xl font-semibold text-gray-700">
            $1.750
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-8">
        <img
          src={analytics}
          alt="Analytics Chart"
          className="w-full rounded-xl object-contain"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}