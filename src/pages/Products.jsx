import { useState } from "react";

import {
  FiDownload,
  FiPlus,
  FiGrid,
  FiList,
  FiPrinter,
  FiFileText,
  FiFile,
  FiChevronDown,
  FiSearch,
  FiUploadCloud,
  FiImage,
  FiTrash2,
} from "react-icons/fi";
import { useRef, useEffect } from "react";


import {
  FaFileExcel,
  FaFilePdf,
  FaFileCsv,
} from "react-icons/fa";





import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";



export default function Products() {

  const [exportOpen, setExportOpen] = useState(false);

  const exportRef = useRef(null);

  const [open, setOpen] = useState(false);

  const [image, setImage] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
  });



  useEffect(() => {
    function handleClick(e) {
      if (exportRef.current && !exportRef.current.contains(e.target)) {
        setExportOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleExport = (type) => {
    setExportOpen(false);

    if (type === "Print") {
      window.print();
    } else {
      alert(`${type} Exported Successfully`);
    }
  };


  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  const [products, setProducts] = useState([
    { name: "MacBook Pro 15 Retina Touch Bar MV902", no: "#790841", category: "Notebook", date: "12.09.20", price: "$2,500", status: "Available" },
    { name: "Apple Watch Series 5 Edition GPS + Cellular", no: "#790842", category: "Watch", date: "12.09.20", price: "$2,500", status: "Available" },
    { name: "Apple iPhone 11 Pro Max 256GB Space Gray", no: "#790843", category: "Phone", date: "12.09.20", price: "$2,500", status: "Available" },
    { name: "Apple Watch Series 5 Edition GPS + Cellular", no: "#790844", category: "Watch", date: "12.09.20", price: "$2,500", status: "Available" },
    { name: "MacBook Pro 15 Retina Touch Bar MV902", no: "#790845", category: "Notebook", date: "12.09.20", price: "$2,500", status: "Disabled" },
    { name: "Apple iPhone 11 Pro Max 64GB Midnight Green", no: "#790846", category: "Phone", date: "12.09.20", price: "$2,500", status: "Disabled" },
    { name: "MacBook Pro 15 Retina Touch Bar MV902", no: "#790847", category: "Notebook", date: "12.09.20", price: "$2,500", status: "Available" },
    { name: "Apple Watch Series 5 Edition GPS + Cellular", no: "#790848", category: "Watch", date: "12.09.20", price: "$2,500", status: "Available" },
    { name: "Apple iPhone 11 Pro Max 256GB Space Gray", no: "#790849", category: "Phone", date: "12.09.20", price: "$2,500", status: "Available" },
    { name: "MacBook Pro 15 Retina Touch Bar MV902", no: "#790850", category: "Notebook", date: "12.09.20", price: "$2,500", status: "Available" },
  ]);

  return (
    <div className="min-h-screen bg-[#F7F8FC] p-8">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold text-gray-700">
            Products
          </h1>
        </div>

        <div className="flex items-center gap-3">

          <div className="relative" ref={exportRef}>

            <button
              onClick={() => setExportOpen(!exportOpen)}
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm hover:bg-gray-50"
            >
              <FiDownload />
              Export
              <FiChevronDown size={16} />
            </button>

            {exportOpen && (
              <div className="absolute right-0 top-14 z-50 w-52 overflow-hidden rounded-2xl bg-white shadow-2xl">
                <button
                  onClick={() => handleExport("Print")}
                  className="flex w-full items-center gap-3 px-5 py-4 text-gray-600 hover:bg-gray-100"
                >
                  <FiPrinter size={20} className="text-gray-500" />
                  Print
                </button>

                <button
                  onClick={() => handleExport("Excel")}
                  className="flex w-full items-center gap-3 px-5 py-4 text-gray-600 hover:bg-gray-100"
                >
                  <FaFileExcel size={20} className="text-green-600" />
                  Excel
                </button>

                <button
                  onClick={() => handleExport("PDF")}
                  className="flex w-full items-center gap-3 px-5 py-4 text-gray-600 hover:bg-gray-100"
                >
                  <FaFilePdf size={20} className="text-red-600" />
                  PDF
                </button>

                <button
                  onClick={() => handleExport("CSV")}
                  className="flex w-full items-center gap-3 px-5 py-4 text-gray-600 hover:bg-gray-100"
                >
                  <FaFileCsv size={20} className="text-blue-600" />
                  CSV
                </button>
              </div>
            )}

          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-xl bg-green-600 p-3 text-white hover:bg-green-700"
          >
            <FiPlus size={22} />
          </button>

          {open && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
              onClick={() => setOpen(false)}
            >
              <div
                className="max-h-[90vh] w-[480px] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >

                <h2 className="mb-6 text-2xl font-bold">
                  Add Product
                </h2>

                <input
                  placeholder="Product Name"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      name: e.target.value,
                    })
                  }
                  className="mb-4 w-full rounded-xl border border-gray-200 p-3 outline-none"
                />

                <input
                  placeholder="Category"
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      category: e.target.value,
                    })
                  }
                  className="mb-4 w-full rounded-xl border border-gray-200 p-3 outline-none"
                />

                <input
                  placeholder="Price"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      price: e.target.value,
                    })
                  }
                  className="mb-5 w-full rounded-xl border border-gray-200 p-3 outline-none"
                />

                <textarea
                  rows={6}
                  placeholder="Description..."
                  className="mb-5 w-full rounded-xl border border-gray-200 p-3 outline-none"
                />

                <div className="mb-6">

                  <p className="mb-2 text-sm font-medium text-gray-500">
                    Product Images
                  </p>

                  <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 py-8 hover:bg-gray-100">

                    <input
                      type="file"
                      accept="image/*,.pdf"
                      hidden
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          setImage(URL.createObjectURL(e.target.files[0]));
                        }
                      }}
                    />

                    <FiUploadCloud
                      size={34}
                      className="mb-3 text-gray-400"
                    />

                    <p className="text-sm text-gray-500">
                      Drag and Drop or
                      <span className="ml-1 font-semibold text-green-600">
                        Browse
                      </span>
                      {" "}to upload
                    </p>

                  </label>

                  {image && (

                    <div className="mt-5 flex items-center gap-3">

                      <img
                        src={image}
                        alt=""
                        className="h-20 w-20 rounded-xl border object-cover"
                      />

                      <button
                        onClick={() => setImage(null)}
                        className="rounded-xl bg-red-100 p-3 text-red-600 hover:bg-red-200"
                      >
                        <FiTrash2 size={20} />
                      </button>

                    </div>

                  )}

                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() => {
                      if (
                        !newProduct.name ||
                        !newProduct.category ||
                        !newProduct.price
                      ) {
                        alert("Please fill all fields");
                        return;
                      }

                      setProducts([
                        {
                          name: newProduct.name,
                          no: `#79${Math.floor(Math.random() * 900 + 100)}`,
                          category: newProduct.category,
                          date: "Today",
                          price: `$${newProduct.price}`,
                          status: "Available",
                        },
                        ...products,
                      ]);

                      setNewProduct({
                        name: "",
                        category: "",
                        price: "",
                      });

                      setOpen(false);

                      alert("✅ Product Added Successfully");
                    }}
                    className="rounded-xl bg-green-600 px-8 py-3 text-white hover:bg-green-700"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-gray-400 px-8 py-3"
                  >
                    Cancel
                  </button>

                </div>

              </div>

            </div>
          )}

        </div>

      </div>


      {/* Tabs */}
      <div className="mb-6 flex items-center justify-between border-b  border-gray-200  pb-4">

        <div className="flex gap-8">

          <button className="border-b-2 border-green-600 pb-2 font-medium text-green-600">
            All
            <span className="ml-2 rounded bg-gray-100 px-2 py-1 text-xs">
              283
            </span>
          </button>

          <button className="text-gray-500">
            Available
            <span className="ml-2 rounded bg-gray-100 px-2 py-1 text-xs">
              268
            </span>
          </button>

          <button className="text-gray-500">
            Disabled
            <span className="ml-2 rounded bg-gray-100 px-2 py-1 text-xs">
              15
            </span>
          </button>

        </div>

        <div className="flex gap-4 text-green-600">
          <FiList size={18} />
          <FiGrid size={18} />
        </div>

      </div>

      {/* Search */}
      <div className="mb-5 flex items-center justify-between rounded-t-2xl border border-gray-200 bg-white p-4">

        <div className="flex w-[700px] items-center rounded-xl border border-gray-200 px-4 py-3">

          <FiSearch className="text-gray-400" size={20} />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="ml-3 w-full bg-transparent text-sm outline-none"
          />

          <HiOutlineAdjustmentsHorizontal
            className="cursor-pointer text-gray-400"
            size={18}
          />

        </div>

        <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm text-gray-600 hover:bg-gray-50">
          Actions
          <FiChevronDown size={15} />
        </button>

      </div>

      {/* Table */}
      <div className="overflow-hidden bg-white">

        {/* Header */}
        <div className="grid grid-cols-7 border-y border-gray-200  bg-gray-50 p-4 text-sm font-semibold text-gray-500">

          <input
            type="checkbox"
            checked={selected.length === products.length}
            onChange={(e) =>
              setSelected(
                e.target.checked ? products.map((_, i) => i) : []
              )
            }
          />

          <p>PRODUCT NAME</p>
          <p>PRODUCT NO.</p>
          <p>CATEGORY</p>
          <p>DATE</p>
          <p>PRICE</p>
          <p>STATUS</p>

        </div>

        {/* Rows */}
        {products
          .filter(
            (item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.category.toLowerCase().includes(search.toLowerCase()) ||
              item.no.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[40px_2.8fr_1.2fr_1fr_1fr_1fr_1.2fr] items-center border-b px-4 py-5 hover:bg-gray-50"
            >

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

              <p
                className="max-w-[260px] truncate text-sm font-medium text-gray-700"
                title={item.name}
              >
                {item.name}
              </p>
              <p>{item.no}</p>
              <p>{item.category}</p>
              <p>{item.date}</p>
              <p>{item.price}</p>

              <span
                className={`rounded-full px-3 py-1 text-center text-xs ${item.status === "Available"
                  ? "bg-green-100 text-green-600"
                  : "bg-orange-100 text-orange-500"
                  }`}
              >
                {item.status}
              </span>

            </div>
          ))}

      </div>

      {/* footer------------------------------------------------- */}

      <div className="flex items-center justify-between rounded-b-2xl bg-white px-6 py-4">

        <div className="flex items-center gap-3">
          <select className="rounded-lg border border-gray-200  px-3 py-2 text-sm">
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>

          <span className="text-sm text-gray-500">
            Showing 1 - 10 of 100
          </span>
        </div>

        <div className="flex items-center gap-2">

          <button className="rounded-lg bg-gray-100 px-3 py-2">«</button>
          <button className="rounded-lg bg-gray-100 px-3 py-2">‹</button>

          <button className="rounded-lg bg-green-600 px-4 py-2 text-white">
            1
          </button>

          <button className="px-3 py-2">2</button>
          <button className="px-3 py-2">3</button>
          <span>...</span>
          <button className="px-3 py-2">5</button>

          <button className="rounded-lg bg-green-100 px-3 py-2 text-green-600">›</button>
          <button className="rounded-lg bg-green-100 px-3 py-2 text-green-600">»</button>

        </div>

      </div>

    </div>
  );
}