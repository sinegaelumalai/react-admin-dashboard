import { useState } from "react";
import {
  FiDownload,
  FiChevronDown,
  FiPrinter,
  FiFileText,
  FiSearch ,
  FiMoreVertical 
} from "react-icons/fi";
import { FaFileExcel, FaFilePdf, FaFileCsv } from "react-icons/fa";


export default function Orders() {
  const [exportOpen, setExportOpen] = useState(false);

  const [orders] = useState([
    { id: "#790841", customer: "Claire Warren", date: "12.09.20", total: "$145.85", payment: "PayPal", status: "Shipped" },
    { id: "#790841", customer: "Theresa Robertson", date: "12.09.20", total: "$225.15", payment: "Credit Card", status: "Shipped" },
    { id: "#790841", customer: "Nathan Hawkins", date: "12.09.20", total: "$45.55", payment: "PayPal", status: "Shipped" },
    { id: "#790841", customer: "Lily Williamson", date: "12.09.20", total: "$305.25", payment: "Credit Card", status: "Processing" },
    { id: "#790841", customer: "Brooklyn Steward", date: "12.09.20", total: "$483.80", payment: "Credit Card", status: "Shipped" },
    { id: "#790841", customer: "Norma Flores", date: "12.09.20", total: "$128.79", payment: "Payoneer", status: "Processing" },
    { id: "#790841", customer: "Leslie Mckinney", date: "12.09.20", total: "$105.05", payment: "Credit Card", status: "Cancelled" },
    { id: "#790841", customer: "Gregory Black", date: "12.09.20", total: "$1028.15", payment: "PayPal", status: "Shipped" },
  ]);

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");


  return (
    <div className="min-h-screen bg-[#F7F8FC] p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-700">Orders</h1>

        <div className="relative">

          <button
            onClick={() => setExportOpen(!exportOpen)}
            className="flex items-center gap-2 rounded-xl border bg-white px-5 py-3 shadow-sm hover:bg-gray-50"
          >
            <FiDownload size={18} />
            Export
            <FiChevronDown size={16} />
          </button>

          {exportOpen && (

            <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl bg-white shadow-2xl z-50">

              <button
                onClick={() => {
                  window.print();
                  setExportOpen(false);
                }}
                className="flex w-full items-center gap-3 px-5 py-4 hover:bg-gray-100"
              >
                <FiPrinter className="text-gray-500" />
                Print
              </button>

              <button
                onClick={() => {
                  alert("Excel Downloaded");
                  setExportOpen(false);
                }}
                className="flex w-full items-center gap-3 px-5 py-4 hover:bg-gray-100"
              >
                <FaFileExcel className="text-green-600" />
                Excel
              </button>

              <button
                onClick={() => {
                  alert("PDF Downloaded");
                  setExportOpen(false);
                }}
                className="flex w-full items-center gap-3 px-5 py-4 hover:bg-gray-100"
              >
                <FaFilePdf className="text-red-600" />
                PDF
              </button>

              <button
                onClick={() => {
                  alert("CSV Downloaded");
                  setExportOpen(false);
                }}
                className="flex w-full items-center gap-3 px-5 py-4 hover:bg-gray-100"
              >
                <FaFileCsv className="text-blue-600" />
                CSV
              </button>

            </div>

          )}

        </div>
      </div>
<div className="mb-8 flex gap-3">

  <button className="rounded-t-3xl border border-gray-200 border-b-2 border-b-green-500 bg-white px-7 py-4 text-sm font-medium text-gray-700">
    All
    <span className="ml-2 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500">
      983
    </span>
  </button>

  <button className="rounded-t-3xl border border-gray-200 bg-white px-7 py-4 text-sm text-gray-500 hover:text-gray-700">
    Pending
    <span className="ml-2 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500">
      128
    </span>
  </button>

  <button className="rounded-t-3xl border border-gray-200 bg-white px-7 py-4 text-sm text-gray-500 hover:text-gray-700">
    Processing
    <span className="ml-2 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500">
      15
    </span>
  </button>

  <button className="rounded-t-3xl border border-gray-200 bg-white px-7 py-4 text-sm text-gray-500 hover:text-gray-700">
    Refunded
    <span className="ml-2 rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500">
      8
    </span>
  </button>

</div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-center justify-between">
          <div className="flex w-2/3 items-center rounded-xl border px-4 py-3">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search order..."
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
              <th className="pb-3 w-12">
                <input
                  type="checkbox"
                  checked={selected.length === orders.length}
                  onChange={(e) =>
                    setSelected(
                      e.target.checked ? orders.map((_, i) => i) : []
                    )
                  }
                />
              </th>

              <th>ORDER NO.</th>
              <th>CUSTOMER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAYMENT</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders
              .filter(
                (order) =>
                  order.customer.toLowerCase().includes(search.toLowerCase()) ||
                  order.id.toLowerCase().includes(search.toLowerCase()) ||
                  order.payment.toLowerCase().includes(search.toLowerCase())
              )
              .map((order, index) => (
                <tr key={index} className="border-b">

                  <td>
                    <input
                      type="checkbox"
                      checked={selected.includes(index)}
                      onChange={() =>
                        setSelected(
                          selected.includes(index)
                            ? selected.filter((i) => i !== index)
                            : [...selected, index]
                        )
                      }
                    />
                  </td>

                  <td className="py-4">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.date}</td>
                  <td>{order.total}</td>
                  <td>{order.payment}</td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-sm ${order.status === "Shipped"
                        ? "bg-green-100 text-green-600"
                        : order.status === "Processing"
                          ? "bg-orange-100 text-orange-500"
                          : "bg-red-100 text-red-500"
                        }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>
                    <FiMoreVertical />
                  </td>

                </tr>
              ))}
          </tbody>
        </table>

        <div className="mt-6 flex items-center justify-between border-t pt-5">
          <p className="text-gray-500">
            Showing <b>1 - 10</b> of <b>100</b>
          </p>

          <div className="flex gap-2">
            <button className="h-9 w-9 rounded-lg bg-green-600 text-white">
              1
            </button>
            <button className="h-9 w-9 rounded-lg hover:bg-gray-100">
              2
            </button>
            <button className="h-9 w-9 rounded-lg hover:bg-gray-100">
              3
            </button>
            <button className="h-9 w-9 rounded-lg hover:bg-gray-100">
              5
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}