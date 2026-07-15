import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  FiCalendar,
  FiChevronDown,
  FiArrowUp,
  FiArrowDown,
} from "react-icons/fi";

const data = [
  { day: "Mon", income: 0, expense: 0 },
  { day: "Tue", income: 1000, expense: 650 },
  { day: "Wed", income: 800, expense: 1200 },
  { day: "Thu", income: 2200, expense: 700 },
  { day: "Fri", income: 1100, expense: 1700 },
  { day: "Sat", income: 2800, expense: 1600 },
  { day: "Sun", income: 3600, expense: 800 },
];

export default function LineChartCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="h-[360px] rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-semibold text-gray-700">
          Analytics
        </h2>

        <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50">
          <FiCalendar />
          <span>19 Aug - 25 Aug</span>
          <FiChevronDown />
        </button>

      </div>

      {/* Top Values */}
      <div className="mt-8 flex gap-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
            <FiArrowUp className="text-2xl text-green-600" />
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Income
            </p>

            <h3 className="text-2xl font-semibold text-gray-700">
              $5,850
            </h3>
          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100">
            <FiArrowDown className="text-2xl text-cyan-500" />
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Expense
            </p>

            <h3 className="text-2xl font-semibold text-gray-700">
              $1,750
            </h3>
          </div>

        </div>

      </div>

      {/* Chart */}
      <div className="mt-10 h-[160px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <defs>

              <linearGradient
                id="incomeFill"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#22A447"
                  stopOpacity={0.22}
                />

                <stop
                  offset="95%"
                  stopColor="#22A447"
                  stopOpacity={0.02}
                />
              </linearGradient>

            </defs>

            <CartesianGrid
              vertical
              horizontal={false}
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 14,
              }}
            />

            <YAxis hide />

            <Tooltip
              contentStyle={{
                borderRadius: "18px",
                border: "none",
                boxShadow: "0 12px 25px rgba(0,0,0,.12)",
              }}
              formatter={(value) => [`$${value}`, "Value"]}
            />

            {/* Green Filled Line */}

            <Area
              type="monotone"
              dataKey="income"
              stroke="#23963B"
              strokeWidth={3}
              fill="url(#incomeFill)"
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "#23963B",
                strokeWidth: 3,
              }}
              activeDot={{
                r: 6,
              }}
            />

            {/* Cyan Line */}

            <Line
              type="monotone"
              dataKey="expense"
              stroke="#36CFC9"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "#36CFC9",
                strokeWidth: 3,
              }}
              activeDot={{
                r: 6,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </motion.div>
  );
}