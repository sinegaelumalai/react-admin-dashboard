import { FiPlus, FiGrid, FiList, FiSliders } from "react-icons/fi";
import profile from "../assets/profile.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";


import {
  FiMoreHorizontal,
  FiEdit2,
  FiUserPlus,
  FiClock,
  FiTrash2,
} from "react-icons/fi";





import { useState, useEffect, useRef } from "react";


export default function Projects() {

  const [open, setOpen] = useState(false);

  const [newProject, setNewProject] = useState({
    name: "",
    client: "",
    description: "",
    start: "",
    end: "",
    member: "",
    budget: "",
    image: null,
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>

      <div className="min-h-screen bg-[#F7F8FC] p-8">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-700">
            Projects
          </h1>

          <div className="flex items-center gap-4">
            <button className="rounded-xl bg-white p-3 shadow-sm hover:bg-gray-50">
              <FiSliders size={20} />
            </button>

            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700"
            >
              <FiPlus />
              Add Project
            </button>
          </div>

        </div>

        {/* Tabs */}
        <div className="mb-8 flex items-center justify-between border-b border-gray-300">

          <div className="flex gap-8 text-sm font-medium">
            <button className="border-b-2 border-green-600 pb-3 text-green-600">
              All <span className="ml-1 rounded bg-gray-100 px-2 py-1 text-xs">151</span>
            </button>

            <button className="pb-3 text-gray-500">
              Started <span className="ml-1 rounded bg-gray-100 px-2 py-1 text-xs">128</span>
            </button>

            <button className="pb-3 text-gray-500">
              On Hold <span className="ml-1 rounded bg-gray-100 px-2 py-1 text-xs">15</span>
            </button>

            <button className="pb-3 text-gray-500">
              Completed <span className="ml-1 rounded bg-gray-100 px-2 py-1 text-xs">8</span>
            </button>
          </div>

          <div className="flex gap-3 text-gray-400">
            <button><FiList size={20} /></button>
            <button><FiGrid size={20} /></button>
          </div>

        </div>



        {/* ------------------------------------------------------------------ */}

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

          {/* Project Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">

            {/* Top */}
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">

                <img
                  src={logo1}
                  alt="logo"
                  className="h-12 w-12 rounded-xl border border-gray-200 p-2"
                />

                <div>
                  <h3 className="text-lg font-bold text-gray-700">
                    App Development
                  </h3>

                  <p className="text-sm text-gray-400">
                    Dropbox, Inc.
                  </p>
                </div>

              </div>

              <div className="relative" ref={menuRef}>

                <button onClick={() => setMenuOpen(!menuOpen)}>
                  <FiMoreHorizontal />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 top-12 z-50 w-60 overflow-hidden rounded-2xl bg-white shadow-2xl">

                    <button className="flex w-full items-center gap-4 px-6 py-4 text-gray-600 hover:bg-gray-50">
                      <FiEdit2 size={20} />
                      Edit
                    </button>

                    <button className="flex w-full items-center gap-4 px-6 py-4 text-gray-600 hover:bg-gray-50">
                      <FiUserPlus size={20} />
                      Add Member
                    </button>

                    <button className="flex w-full items-center gap-4 px-6 py-4 text-gray-600 hover:bg-gray-50">
                      <FiClock size={20} />
                      Add Due Date
                    </button>

                    <div className="border-t"></div>

                    <button
                      onClick={() => alert("Project Deleted")}
                      className="flex w-full items-center gap-4 px-6 py-4 text-red-500 hover:bg-red-50"
                    >
                      <FiTrash2 size={20} />
                      Delete Project
                    </button>

                  </div>
                )}

              </div>

            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-6 text-gray-500">
              Create a mobile application on iOS and Android devices.
            </p>

            {/* Progress */}
            <div className="mt-6">

              <div className="mb-2 flex items-center justify-between text-sm text-gray-500">
                <span>Progress</span>
                <span>50%</span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 w-1/2 rounded-full bg-green-500"></div>
              </div>

            </div>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between">

              <div className="rounded-full bg-gray-100 px-3 py-2 text-xs text-gray-500">
                ⏰ 1 week left
              </div>

              <div className="flex -space-x-2">
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
              </div>

            </div>

          </div>


          {/* Second Project Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">

            {/* Top */}
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">
                <img
                  src={logo2}
                  alt="logo"
                  className="h-12 w-12 rounded-xl border border-gray-200 p-2"
                />

                <div>
                  <h3 className="text-lg font-bold text-gray-700">
                    Website Redesign
                  </h3>

                  <p className="text-sm text-gray-400">
                    GitLab Inc.
                  </p>
                </div>
              </div>

              <button>
                <FiMoreHorizontal
                  size={20}
                  className="text-gray-400"
                />
              </button>

            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-6 text-gray-500">
              It is necessary to develop a website redesign
              in a corporate style.
            </p>

            {/* Progress */}
            <div className="mt-6">

              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Progress
                </span>

                <span className="text-sm text-gray-400">
                  75%
                </span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 w-3/4 rounded-full bg-green-500"></div>
              </div>

            </div>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between">

              <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2">
                <FiClock
                  size={15}
                  className="text-gray-500"
                />

                <span className="text-xs text-gray-600">
                  1 week left
                </span>
              </div>

              <div className="flex -space-x-2">
                <img
                  src={profile}
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
                <img
                  src={profile}
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
                <img
                  src={profile}
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
              </div>

            </div>

          </div>

          {/* Third Project Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">

            {/* Top */}
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">
                <img
                  src={logo3}
                  alt="logo"
                  className="h-12 w-12 rounded-xl border border-gray-200 p-2"
                />

                <div>
                  <h3 className="text-lg font-bold text-gray-700">
                    Landing Page
                  </h3>

                  <p className="text-sm text-gray-400">
                    Bitbucket, Inc.
                  </p>
                </div>
              </div>

              <button>
                <FiMoreHorizontal
                  size={20}
                  className="text-gray-400"
                />
              </button>

            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-6 text-gray-500">
              It is necessary to create a landing together
              with the development of design.
            </p>

            {/* Progress */}
            <div className="mt-6">

              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Progress
                </span>

                <span className="text-sm text-gray-400">
                  100%
                </span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 w-full rounded-full bg-green-500"></div>
              </div>

            </div>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between">

              <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2">
                <FiClock
                  size={15}
                  className="text-gray-500"
                />
                <span className="text-xs text-gray-600">
                  1 week left
                </span>
              </div>

              <div className="flex -space-x-2">
                <img
                  src={profile}
                  alt=""
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
                <img
                  src={profile}
                  alt=""
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
              </div>

            </div>

          </div>

          {/* Fourth Project Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">

            {/* Top */}
            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">
                <img
                  src={logo4}
                  alt=""
                  className="h-12 w-12 rounded-xl border border-gray-200 p-2"
                />

                <div>
                  <h3 className="text-lg font-bold text-gray-700">
                    Parser Development
                  </h3>

                  <p className="text-sm text-gray-400">
                    Driveway, Inc.
                  </p>
                </div>
              </div>

              <button>
                <FiMoreHorizontal
                  size={20}
                  className="text-gray-400"
                />
              </button>

            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-6 text-gray-500">
              It is necessary to develop a ticket site
              parser in python.
            </p>

            {/* Progress */}
            <div className="mt-6">

              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-gray-600">
                  Progress
                </span>

                <span className="text-sm text-gray-400">
                  50%
                </span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 w-1/2 rounded-full bg-green-500"></div>
              </div>

            </div>

            {/* Bottom */}
            <div className="mt-6 flex items-center justify-between">

              <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-2">
                <FiClock
                  size={15}
                  className="text-orange-500"
                />

                <span className="text-xs font-medium text-orange-500">
                  5 days left
                </span>
              </div>

              <div className="flex -space-x-2">
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
              </div>

            </div>

          </div>

          {/* 5th card project */}

          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">
                <img src={logo5} className="h-12 w-12 rounded-xl border border-gray-200 p-2" />

                <div>
                  <h3 className="text-lg font-bold text-gray-700">
                    App Development
                  </h3>

                  <p className="text-sm text-gray-400">
                    Slack Technologies, Inc.
                  </p>
                </div>
              </div>

              <FiMoreHorizontal className="text-gray-400" size={20} />

            </div>

            <p className="mt-6 text-sm leading-6 text-gray-500">
              Create a mobile application on iOS and
              Android devices.
            </p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span>Progress</span>
                <span className="text-gray-400">50%</span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 w-1/2 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">

              <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-2">
                <FiClock className="text-orange-500" size={15} />
                <span className="text-xs font-medium text-orange-500">
                  5 days left
                </span>
              </div>

              <div className="flex -space-x-2">
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
              </div>

            </div>

          </div>

          {/* 6th card project  */}

          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">
                <img src={logo6} className="h-12 w-12 rounded-xl border border-gray-200 p-2" />

                <div>
                  <h3 className="text-lg font-bold text-gray-700">
                    App Development
                  </h3>

                  <p className="text-sm text-gray-400">
                    Google, Inc.
                  </p>
                </div>
              </div>

              <FiMoreHorizontal className="text-gray-400" size={20} />

            </div>

            <p className="mt-6 text-sm leading-6 text-gray-500">
              Create a mobile application on iOS and
              Android devices.
            </p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span>Progress</span>
                <span className="text-gray-400">25%</span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 w-1/4 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">

              <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2">
                <FiClock className="text-gray-500" size={15} />
                <span className="text-xs text-gray-600">
                  1 week left
                </span>
              </div>

              <div className="flex -space-x-2">
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
              </div>

            </div>

          </div>

          {/* 7th project card */}

          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img src={logo7} className="h-12 w-12 rounded-xl border border-gray-200 p-2" />
                <div>
                  <h3 className="text-lg font-bold text-gray-700">Admin Dashboard</h3>
                  <p className="text-sm text-gray-400">ArtTemplate, Inc.</p>
                </div>
              </div>
              <FiMoreHorizontal className="text-gray-400" />
            </div>

            <p className="mt-6 text-sm leading-6 text-gray-500">
              Necessary to create Admin Dashboard on Angular 8.
            </p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span>Progress</span>
                <span>30%</span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 w-[30%] rounded-full bg-green-500"></div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="rounded-full bg-gray-100 px-3 py-2 text-xs">
                ⏰ 3 weeks left
              </div>

              <div className="flex -space-x-2">
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>

          {/* 8th project card */}

          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img src={logo8} className="h-12 w-12 rounded-xl border border-gray-200 p-2" />
                <div>
                  <h3 className="text-lg font-bold text-gray-700">Web App on Vue.js</h3>
                  <p className="text-sm text-gray-400">ArtTemplate, Inc.</p>
                </div>
              </div>
              <FiMoreHorizontal className="text-gray-400" />
            </div>

            <p className="mt-6 text-sm leading-6 text-gray-500">
              It is necessary to develop a web app on the framework Vue.js
            </p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span>Progress</span>
                <span>100%</span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 w-full rounded-full bg-green-500"></div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="rounded-full bg-green-50 px-3 py-2 text-xs text-green-600">
                ✓ Completed
              </div>

              <div className="flex -space-x-2">
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>

          {/* 9th project card */}

          <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img src={logo9} className="h-12 w-12 rounded-xl border border-gray-200 p-2" />
                <div>
                  <h3 className="text-lg font-bold text-gray-700">App Development</h3>
                  <p className="text-sm text-gray-400">Facebook, Inc.</p>
                </div>
              </div>
              <FiMoreHorizontal className="text-gray-400" />
            </div>

            <p className="mt-6 text-sm leading-6 text-gray-500">
              Create a mobile application on iOS and Android devices.
            </p>

            <div className="mt-6">
              <div className="mb-2 flex justify-between text-sm">
                <span>Progress</span>
                <span>50%</span>
              </div>

              <div className="h-2 rounded-full bg-gray-200">
                <div className="h-2 w-1/2 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="rounded-full bg-gray-100 px-3 py-2 text-xs">
                ⏰ 2 weeks left
              </div>

              <div className="flex -space-x-2">
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
                <img src={profile} className="h-8 w-8 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>




        </div>

        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="h-[90vh] w-[420px] overflow-y-auto rounded-3xl bg-white p-6">

              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-3xl font-bold">Add Project</h2>

                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl text-gray-400"
                >
                  ×
                </button>
              </div>

              <label className="mx-auto mb-4 flex h-20 w-20 cursor-pointer items-center justify-center rounded-3xl border-2 border-dashed text-4xl text-gray-400">
                +
                <input
                  type="file"
                  hidden
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      image: e.target.files[0],
                    })
                  }
                />

              </label>

              <div className="mb-4">
                <label className="mb-2 block text-sm text-gray-500">
                  Project Name
                </label>

                <input
                  type="text"
                  placeholder="App Development"
                  value={newProject.name}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-300 p-3 outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-sm text-gray-500">
                  Client Name
                </label>

                <input
                  type="text"
                  placeholder="Dropbox, Inc."
                  value={newProject.client}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      client: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-300 p-3 outline-none"
                />
              </div>

              <div className="mb-4">
                <label className="mb-2 block text-sm text-gray-500">
                  Description
                </label>

                <textarea
                  rows={3}
                  placeholder="Create a mobile application on iOS and Android devices."
                  value={newProject.description}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      description: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-300 p-3 outline-none"
                />
              </div>

              <div className="mb-4 grid grid-cols-2 gap-4">

                <div>
                  <label className="mb-2 block text-sm text-gray-500">
                    Start Date
                  </label>

                  <input
                    type="date"
                    value={newProject.start}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        start: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-300 p-3 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-500">
                    End Date
                  </label>

                  <input
                    type="date"
                    value={newProject.end}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        end: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-gray-300 p-3 outline-none"
                  />
                </div>

              </div>

              <div className="mb-3">
                <label className="mb-2 block text-sm text-gray-500">
                  Members
                </label>

                <input
                  type="text"
                  placeholder="Shane Black"
                  value={newProject.member}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      member: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-300 p-3 outline-none"
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-sm text-gray-500">
                  Budget
                </label>

                <input
                  type="text"
                  placeholder="$ 2,500,000"
                  value={newProject.budget}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      budget: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-300 p-3 outline-none"
                />
              </div>

              <button
                onClick={() => {
                  if (
                    !newProject.name ||
                    !newProject.client ||
                    !newProject.description ||
                    !newProject.budget
                  ) {
                    alert("Please fill all fields");
                    return;
                  }

                  alert("Project Created Successfully ✅");

                  setNewProject({
                    name: "",
                    client: "",
                    description: "",
                    start: "",
                    end: "",
                    member: "",
                    budget: "",
                    image: null,
                  });

                  setOpen(false);
                }}
                className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
              >
                Create
              </button>



            </div>

          </div>

        )}

      </div>
    </>
  );





}
