import { FiSearch, FiMoreVertical } from "react-icons/fi";
import profile from "../assets/profile.png";
import { useState } from "react";

import {
  FiDownload,
  FiChevronDown,
  FiPrinter,
  FiFileText,
} from "react-icons/fi";
import { FaFileExcel, FaFilePdf } from "react-icons/fa";

export default function Customers() {


  const customers = [
    {
      name: "Regina Cooper",
      email: "cooper@example.com",
      location: "Sochi, Russia",
      phone: "+1 (070) 123-4567",
      status: "Active",
    },
    {
      name: "Judith Black",
      email: "black@example.com",
      location: "France, Paris",
      phone: "+1 (070) 123-8459",
      status: "Active",
    },
    {
      name: "Ronald Robertson",
      email: "robe@example.com",
      location: "Sydney, Australia",
      phone: "+1 (070) 123-9221",
      status: "Blocked",
    },
    {
      name: "Dustin Williamson",
      email: "williams@example.com",
      location: "Germany, Berlin",
      phone: "+1 (070) 123-0507",
      status: "Active",
    },
    {
      name: "Calvin Flores",
      email: "flores@example.com",
      location: "New York, USA",
      phone: "+1 (070) 123-3791",
      status: "Active",
    },
    {
      name: "Robert Edwards",
      email: "edwards@example.com",
      location: "Shanghai, China",
      phone: "+1 (070) 123-1147",
      status: "Active",
    },
    {
      name: "Colleen Warren",
      email: "warren@example.com",
      location: "Canada, Ottawa",
      phone: "+1 (070) 123-9127",
      status: "Active",
    },
    {
      name: "Nathan Fox",
      email: "fox@example.com",
      location: "London, UK",
      phone: "+1 (070) 123-5073",
      status: "Active",
    },
  ];

  const [search, setSearch] = useState("");
  const [exportOpen, setExportOpen] = useState(false);

  return (
    <div className="p-6 bg-[#F7F8FC] min-h-screen">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-700">Customers</h1>
        <div className="flex gap-3">
          <div className="relative">

            <button
              onClick={() => setExportOpen(!exportOpen)}
              className="flex items-center gap-2 rounded-xl border bg-white px-5 py-2 shadow-sm"
            >
              <FiDownload />
              Export
              <FiChevronDown size={16} />
            </button>

            {exportOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white p-2 shadow-xl">

                <button
                  onClick={() => window.print()}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100"
                >
                  <FiPrinter className="text-gray-500" />
                  Print
                </button>

                <button
                  onClick={() => alert("Excel Downloaded")}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100"
                >
                 <FaFileExcel className="text-green-600" />
                  Excel
                </button>

                <button
                  onClick={() => alert("PDF Downloaded")}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100"
                >
                  <FaFilePdf className="text-red-600" />
                  PDF
                </button>

                <button
                  onClick={() => alert("CSV Downloaded")}
                  className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-gray-100"
                >
                  <FiFileText className="text-blue-600" />
                  CSV
                </button>

              </div>
            )}

          </div>
          <button className="rounded-xl bg-green-600 px-4 py-2 text-white">+</button>
        </div>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex w-2/3 items-center rounded-xl border px-4 py-3">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-3 w-full outline-none"
            />
          </div>

          <button className="rounded-xl border px-5 py-3">
            Actions
          </button>
        </div>

        <table className="w-full text-left">
          <thead className="border-b text-sm text-gray-500">
            <tr>
              <th className="pb-3">CUSTOMER</th>
              <th>LOCATION</th>
              <th>PHONE</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {customers
              .filter(
                (customer) =>
                  customer.name.toLowerCase().includes(search.toLowerCase()) ||
                  customer.email.toLowerCase().includes(search.toLowerCase()) ||
                  customer.location.toLowerCase().includes(search.toLowerCase()) ||
                  customer.phone.toLowerCase().includes(search.toLowerCase())
              )
              .map((customer, index) => (
                <tr key={index} className="border-b">
                  <td className="flex items-center gap-3 py-4">
                    <img
                      src={profile}
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />

                    <div>
                      <p className="font-semibold">{customer.name}</p>
                      <p className="text-sm text-gray-400">
                        {customer.email}
                      </p>
                    </div>
                  </td>

                  <td>{customer.location}</td>

                  <td>{customer.phone}</td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-sm ${customer.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-500"
                        }`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td className="text-xl">⋮</td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between border-t pt-5">

          <div className="flex items-center gap-4">

            <select className="rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>

            <p className="text-gray-500">
              Showing <span className="font-semibold">1 - 10</span> of{" "}
              <span className="font-semibold">100</span>
            </p>

          </div>

          <div className="flex items-center gap-2">

            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
              «
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
              ‹
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-600 font-semibold text-white">
              1
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100">
              2
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100">
              3
            </button>

            <span className="px-2">...</span>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100">
              5
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-600">
              ›
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-600">
              »
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}