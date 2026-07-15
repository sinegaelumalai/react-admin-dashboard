import { motion } from "framer-motion";
import { FiMoreHorizontal } from "react-icons/fi";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SalesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">
          Sales
        </h2>

        <button className="rounded-full p-2 transition hover:bg-gray-100">
          <FiMoreHorizontal
            size={22}
            className="text-gray-400"
          />
        </button>
      </div>

      {/* Circle */}
      <div className="mx-auto mt-8 h-56 w-56">
        <CircularProgressbarWithChildren
          value={72}
          strokeWidth={8}
          styles={buildStyles({
            pathColor: "#1E9B3C",
            trailColor: "#48D1C5",
          })}
        >
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-700">
              3.500
            </h2>

            <p className="mt-1 text-lg text-gray-400">
              Total
            </p>
          </div>
        </CircularProgressbarWithChildren>
      </div>

      {/* Bottom */}
      <div className="mt-8 space-y-5">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-green-600"></span>

            <span className="text-lg text-gray-500">
              Current Week
            </span>
          </div>

          <span className="text-lg font-medium text-gray-700">
            2.500
          </span>

          <span className="font-semibold text-green-500">
            ↑ 8.8%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-cyan-400"></span>

            <span className="text-lg text-gray-500">
              Last Week
            </span>
          </div>

          <span className="text-lg font-medium text-gray-700">
            1.000
          </span>

          <span className="font-semibold text-red-400">
            ↓ 5.8%
          </span>
        </div>
      </div>
    </motion.div>
  );
}