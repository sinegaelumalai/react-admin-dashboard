import { motion } from "framer-motion";
import { FiMoreHorizontal } from "react-icons/fi";
import profile from "../assets/profile.png";

const transactions = [
  {
    id: 1,
    name: "Devon Williamson",
    time: "08:00 AM",
    date: "19 August",
    amount: "+$1.400",
    status: "Payment",
    positive: true,
  },
  {
    id: 2,
    name: "Debra Wilson",
    time: "09:45 AM",
    date: "19 August",
    amount: "-$850",
    status: "Refund",
    positive: false,
  },
  {
    id: 3,
    name: "Judith Black",
    time: "10:15 AM",
    date: "20 August",
    amount: "+$2.050",
    status: "Payment",
    positive: true,
  },
  {
    id: 4,
    name: "Philip Henry",
    time: "10:50 AM",
    date: "23 August",
    amount: "+$650",
    status: "Payment",
    positive: true,
  },
  {
    id: 5,
    name: "Mitchell Cooper",
    time: "12:45 AM",
    date: "25 August",
    amount: "+$900",
    status: "Payment",
    positive: true,
  },
];

export default function TransactionList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">
          Transactions
        </h2>

        <button className="rounded-full p-2 transition hover:bg-gray-100">
          <FiMoreHorizontal
            size={24}
            className="text-gray-400"
          />
        </button>
      </div>

      {/* List */}
      <div className="space-y-6">
        {transactions.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-between"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img
                src={profile}
                alt={item.name}
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <h4 className="text-lg font-semibold text-gray-700">
                  {item.name}
                </h4>

                <p className="mt-1 text-base text-gray-400">
                  {item.time}
                  <span className="mx-2">—</span>
                  {item.date}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="text-right">
              <h4
                className={`text-xl font-semibold ${
                  item.positive
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {item.amount}
              </h4>

              <p className="mt-1 text-lg text-gray-400">
                {item.status}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}