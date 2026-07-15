import { motion } from "framer-motion";
import {
  FiCalendar,
  FiChevronDown,
  FiMoreVertical,
} from "react-icons/fi";

import profile from "../assets/profile.png";

const orders = [
  {
    id: 1,
    name: "Regina Cooper",
    order: "#790841",
    amount: "$2.500",
    payment: "Credit Card",
    date: "12.09.2019",
  },
  {
    id: 2,
    name: "Robert Edwards",
    order: "#799894",
    amount: "$1.500",
    payment: "PayPal",
    date: "12.09.2019",
  },
  {
    id: 3,
    name: "Gloria Mckinney",
    order: "#790857",
    amount: "$5.600",
    payment: "Credit Card",
    date: "12.09.2019",
  },
  {
    id: 4,
    name: "Randall Fisher",
    order: "#790687",
    amount: "$2.850",
    payment: "PayPal",
    date: "12.09.2019",
  },
];

export default function OrdersTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
      className="w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg"
    >
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">
          Last Orders
        </h2>

        <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-500 transition hover:bg-gray-50">
          <FiCalendar className="text-lg" />
          <span>19 Aug - 25 Aug</span>
          <FiChevronDown />
        </button>
      </div>

      {/* Desktop Header */}
      <div className="mb-4 hidden grid-cols-[2.2fr_1fr_1fr_1.4fr_1fr_40px] gap-4 px-4 text-sm font-medium text-gray-400 lg:grid">
        <div>Customer Name</div>
        <div>Order No.</div>
        <div>Amount</div>
        <div>Payment Type</div>
        <div>Date</div>
        <div></div>
      </div>

      {/* Rows */}
      <div className="space-y-4">
        {orders.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.01 }}
            className="grid gap-4 rounded-2xl bg-[#F9FAFB] p-4 transition lg:grid-cols-[2.2fr_1fr_1fr_1.4fr_1fr_40px] lg:items-center"
          >
            {/* Customer */}
            <div className="flex items-center gap-4">
              <img
                src={profile}
                alt={item.name}
                className="h-12 w-12 rounded-full object-cover"
              />

              <div>
                <p className="font-medium text-gray-700">
                  {item.name}
                </p>

                <p className="mt-1 text-xs text-gray-400 lg:hidden">
                  {item.order}
                </p>
              </div>
            </div>

            {/* Order */}
            <div className="text-gray-400">
              <span className="lg:hidden font-medium text-gray-500">
                Order :{" "}
              </span>
              {item.order}
            </div>

            {/* Amount */}
            <div className="font-medium text-gray-700">
              <span className="lg:hidden font-medium text-gray-500">
                Amount :{" "}
              </span>
              {item.amount}
            </div>

            {/* Payment */}
            <div className="text-gray-500">
              <span className="lg:hidden font-medium text-gray-500">
                Payment :{" "}
              </span>
              {item.payment}
            </div>

            {/* Date */}
            <div className="text-gray-500">
              <span className="lg:hidden font-medium text-gray-500">
                Date :{" "}
              </span>
              {item.date}
            </div>

            {/* Menu */}
            <div className="flex justify-end">
              <button className="rounded-full p-2 transition hover:bg-gray-200">
                <FiMoreVertical
                  size={18}
                  className="text-gray-400"
                />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}