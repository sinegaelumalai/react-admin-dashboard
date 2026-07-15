import {
  FiDownload,
  FiChevronDown,
} from "react-icons/fi";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

import StatCard from "../components/StatCard";
import BarChartCard from "../components/BarChartCard";
import LineChartCard from "../components/LineChartCard";
import SalesCard from "../components/SalesCard";
import StatisticsCard from "../components/StatisticsCard";
import OrdersTable from "../components/OrdersTable";
import TransactionList from "../components/TransactionList";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F7F8FC] p-2 md:p-3 lg:p-1">
      {/* Header */}
      <div className="mb-3 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-3xl font-bold text-gray-700">
          Overview
        </h1>

        <div className="flex items-center gap-3">
          <button className="rounded-xl bg-white p-3 shadow hover:shadow-md transition">
            <FiDownload />
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow hover:shadow-md transition">
            Last 7 days
            <FiChevronDown />
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <StatCard
  title="Total Income"
  value="$8.500"
  percentage="50.8%"
  positive={true}
  icon={icon1}
/>

<StatCard
  title="Total Sales"
  value="3.500K"
  percentage="10.5%"
  positive={false}
  icon={icon2}
/>

<StatCard
  title="New Clients"
  value="2.500K"
  percentage="24.9%"
  positive={true}
  icon={icon3}
/>
      </div>

      {/* Charts */}
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <BarChartCard />
        <LineChartCard />
      </div>

      {/* Sales */}
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <SalesCard />

        <div className="xl:col-span-2">
          <StatisticsCard />
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <OrdersTable />
        </div>

        <TransactionList />
      </div>
    </div>
  );
}