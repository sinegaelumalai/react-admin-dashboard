import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { FiCalendar, FiChevronDown } from "react-icons/fi";

const data = [
  { day: "Mon", income: 190, expense: 340 },
  { day: "Tue", income: 105, expense: 260 },
  { day: "Wed", income: 250, expense: 380 },
  { day: "Thu", income: 190, expense: 260 },
  { day: "Fri", income: 205, expense: 370 },
  { day: "Sat", income: 185, expense: 325 },
  { day: "Sun", income: 155, expense: 225 },
];

export default function BarChartCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3 }}
      className="h-[360px] rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-lg"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">
          Statistics
        </h2>

        <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50">
          <FiCalendar />
          <span>19 Aug - 25 Aug</span>
          <FiChevronDown />
        </button>
      </div>

      {/* Chart */}
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barGap={8}
            barCategoryGap="28%"
            margin={{
              top: 10,
              right: 20,
              left: -15,
              bottom: 10,
            }}
          >
            <CartesianGrid
              stroke="#E5E7EB"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#6B7280",
                fontSize: 14,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tick={{
                fill: "#9CA3AF",
                fontSize: 14,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={{
                fill: "#F3F4F6",
              }}
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 25px rgba(0,0,0,.12)",
              }}
            />

            <Legend
              verticalAlign="bottom"
              iconType="circle"
              wrapperStyle={{
                paddingTop: "20px",
              }}
            />

            <Bar
              dataKey="income"
              name="Income"
              fill="#23963B"
              radius={[20, 20, 20, 20]}
              barSize={18}
            />

            <Bar
              dataKey="expense"
              name="Expense"
              fill="#4FD1C5"
              radius={[20, 20, 20, 20]}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}