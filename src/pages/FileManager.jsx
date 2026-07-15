import { FiFolder, FiFile, FiUpload, FiSearch, FiMoreVertical } from "react-icons/fi";

import { useState, useRef } from "react";
import { FiPlus } from "react-icons/fi";

import document from "../assets/document.png";
import download from "../assets/download.png";
import picture from "../assets/picture.png";
import music from "../assets/music.png";

import crd1 from "../assets/crd1.png";
import crd2 from "../assets/crd2.png";
import crd3 from "../assets/crd3.png";
import crd4 from "../assets/crd4.png";
import crd5 from "../assets/crd5.png";
import crd6 from "../assets/crd6.png";
import crd7 from "../assets/crd7.png";
import crd8 from "../assets/crd8.png";

export default function FileManager() {
  // ================= Design Files =================

  const designFiles = [
    {
      image: crd1,
      name: "Rocket – Admin.fig",
      size: "1.8 MB",
    },
    {
      image: crd2,
      name: "Rocket – Admin.sketch",
      size: "1.5 MB",
    },
    {
      image: crd3,
      name: "Arion – Admin.sketch",
      size: "1.2 MB",
    },
    {
      image: crd4,
      name: "Project Brief.doc",
      size: "1.4 MB",
    },
    {
      image: crd5,
      name: "Design.ai",
      size: "1.9 GB",
    },
    {
      image: crd6,
      name: "vCard – Resume.psd",
      size: "2.5 MB",
    },
    {
      image: crd7,
      name: "Project Brief.doc",
      size: "1.2 MB",
    },
    {
      image: crd8,
      name: "Brand Styles Guide.pdf",
      size: "4.5 MB",
    },
  ];

  // ================= Folder State =================

  const [folders, setFolders] = useState([
    {
      id: 1,
      name: "Design",
      size: "5.8 GB",
      image: document,
    },
    {
      id: 2,
      name: "Projects",
      size: "3.2 GB",
      image: document,
    },
    {
      id: 3,
      name: "Music",
      size: "1.5 GB",
      image: music,
    },
    {
      id: 4,
      name: "Pictures",
      size: "1.7 GB",
      image: picture,
    },
    {
      id: 5,
      name: "Documents",
      size: "440 MB",
      image: document,
    },
    {
      id: 6,
      name: "Downloads",
      size: "10.1 GB",
      image: download,
    },
  ]);

  const [selectedFolder, setSelectedFolder] = useState(2);

  // ================= Search =================

  const [search, setSearch] = useState("");

  // ================= Upload =================

  const fileInputRef = useRef(null);

  const [files, setFiles] = useState([
    { name: "Resume.pdf", size: "1.2 MB" },
    { name: "Project.docx", size: "950 KB" },
    { name: "Dashboard.fig", size: "2.8 MB" },
    { name: "React.zip", size: "8.5 MB" },
    { name: "Invoice.xlsx", size: "650 KB" },
    { name: "Image.png", size: "1.5 MB" },
    { name: "Notes.txt", size: "50 KB" },
    { name: "Report.pdf", size: "2.3 MB" },
  ]);

  const filteredFolders = folders.filter((folder) =>
    folder.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase())
  );

  const addFolder = () => {
    const folderName = prompt("Enter Folder Name");

    if (!folderName) return;

    const folderSize = prompt(
      "Enter Folder Size (Example: 2.5 GB)"
    );

    if (!folderSize) return;

    setFolders((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: folderName,
        size: folderSize,
        image: document,
      },
    ]);
  };

  const [uploadMessage, setUploadMessage] = useState("");

  const handleUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);

    if (!uploadedFiles.length) return;

    const newFiles = uploadedFiles.map((file) => ({
      name: file.name,
      size:
        file.size > 1024 * 1024
          ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
          : `${(file.size / 1024).toFixed(0)} KB`,
    }));

    setFiles((prev) => [...newFiles, ...prev]);

    if (uploadedFiles.length === 1) {
      setUploadMessage(`${uploadedFiles[0].name} uploaded successfully!`);
    } else {
      setUploadMessage(`${uploadedFiles.length} files uploaded successfully!`);
    }

    setTimeout(() => {
      setUploadMessage("");
    }, 3000);

    e.target.value = "";
  };


  return (
    <div className="min-h-screen bg-[#F7F8FC] p-8">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <div className="flex gap-3">
          <div className="flex items-center rounded-xl bg-white px-4 shadow-sm">

            <FiSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search folders or files..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-2 w-64 py-3 outline-none"
            />

          </div>

          <>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={handleUpload}
            />

            <button
              onClick={() => fileInputRef.current.click()}
              className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-white transition hover:bg-green-700"
            >
              <FiUpload />
              Upload
            </button>
          </>
        </div>
      </div>

      {uploadMessage && (
  <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
    ✅ {uploadMessage}
  </div>
)}

      {/* Folder Grid */}
      <h2 className="mb-6 text-3xl font-bold text-gray-700">
        Folders
      </h2>

      <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

        {filteredFolders.map((folder) => (

          <div
            key={folder.id}
            onClick={() => setSelectedFolder(folder.id)}
            onDoubleClick={() => alert(`Opening ${folder.name}...`)}
            className={`cursor-pointer rounded-3xl p-5 text-center transition-all duration-300

      ${selectedFolder === folder.id
                ? "bg-gray-100"
                : "hover:bg-gray-50"
              }`}
          >

            <div className="flex justify-end">
              <FiMoreVertical className="text-gray-400" />
            </div>

            <img
              src={folder.image}
              alt=""
              className="mx-auto h-20 w-20 object-contain"
            />

            <h3 className="mt-3 text-lg font-semibold text-gray-700">
              {folder.name}
            </h3>

            <p className="text-sm text-gray-400">
              {folder.size}
            </p>

          </div>

        ))}

        {/* Add Folder */}

        <div
          onClick={addFolder}
          className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 p-5 transition hover:bg-gray-50"
        >

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">

            <FiPlus size={22} />

          </div>

          <h3 className="mt-4 font-semibold text-gray-700">
            Add Folder
          </h3>

        </div>

      </div>


      {/* ================= Files ================= */}
      <h2 className="mb-5 mt-10 text-3xl font-bold text-gray-700">
        Files
      </h2>

      {/* ================= Design Files ================= */}



      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-8">

        {designFiles.map((file, index) => (

          <div
            key={index}
            className="cursor-pointer rounded-2xl p-4 text-center transition-all duration-300 hover:-translate-y-1"
          >

            <img
              src={file.image}
              alt={file.name}
              className="mx-auto h-24 w-24 object-contain"
            />

            <h4 className="mt-4 truncate text-sm font-semibold text-gray-700">
              {file.name}
            </h4>

            <p className="mt-1 text-xs text-gray-400">
              {file.size}
            </p>

          </div>

        ))}

      </div>


      {/* Files */}
      <h2 className="mb-4 text-2xl font-bold text-gray-700 mt-20">
        Recent Files
      </h2>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-8">
        {filteredFiles.map((file, index) => (
          <div
            key={file.name}
            className="rounded-2xl bg-white p-5 text-center shadow-sm hover:shadow-md"
          >
            <FiFile
              size={42}
              className="mx-auto text-blue-500"
            />

            <p className="mt-3 truncate text-sm font-medium text-gray-700">
              {file.name}
            </p>

            <span className="text-xs text-gray-400">
              {file.size}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}