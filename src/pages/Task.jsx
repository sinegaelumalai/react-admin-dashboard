import { motion } from "framer-motion";
import { FiChevronDown, FiSliders, FiChevronDown as FiDown } from "react-icons/fi";

import {
  FiMoreHorizontal,
  FiPaperclip,
  FiMessageSquare,
  FiCalendar,
  FiSearch,
  FiLayers,
  FiCheck,
  FiGrid,
  FiClipboard,
  FiUserPlus,

} from "react-icons/fi";

import { useState } from "react";


import img2 from "../assets/img2.png";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import img1 from "../assets/img1.png";
import profile from "../assets/profile.png";


export default function Task() {

  const [showProjects, setShowProjects] = useState(false);
  const [showAddMenu, setShowAddMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FC] p-4 md:p-6 lg:p-1">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
      >
        {/* Left */}
        <div className="relative">
          <button
            onClick={() => setShowProjects(!showProjects)}
            className="flex items-center gap-2"
          >
            <h1 className="text-2xl font-bold text-gray-700">
              Design Plan
            </h1>

            <FiChevronDown
              className={`text-gray-400 transition duration-300 ${showProjects ? "rotate-180" : ""
                }`}
              size={18}
            />
          </button>

          {/* Dropdown */}
          {showProjects && (
            <div className="absolute left-0 top-14 z-50 w-72 rounded-3xl bg-white p-5 shadow-xl">

              <h3 className="mb-4 text-lg font-semibold text-gray-700">
                Projects
              </h3>

              {/* Search */}
              <div className="mb-5 flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-3">
                <FiSearch className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Project..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              {/* Item 1 */}
              <div className="mb-1 flex cursor-pointer items-center justify-between rounded-xl px-3 py-3 transition hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <FiLayers className="text-gray-400" />
                  <span className="font-medium text-gray-700">
                    Design Plans
                  </span>
                </div>

                <FiCheck className="text-green-500" />
              </div>

              {/* Item 2 */}
              <div className="mb-1 flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-gray-50">
                <FiLayers className="text-gray-400" />
                <span className="font-medium text-gray-700">
                  Wireframe UI Kit
                </span>
              </div>

              {/* Item 3 */}
              <div className="mb-1 flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-gray-50">
                <FiLayers className="text-gray-400" />
                <span className="font-medium text-gray-700">
                  Admin Dashboard
                </span>
              </div>

              {/* Item 4 */}
              <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-gray-50">
                <FiLayers className="text-gray-400" />
                <span className="font-medium text-gray-700">
                  Sochi - Hotel Booking
                </span>
              </div>

            </div>
          )}
        </div>
        {/* Right */}
        <div className="relative flex items-center gap-3">

          {/* Filter */}
          <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm transition hover:shadow-md">
            <FiSliders className="text-lg text-gray-600" />
          </button>

          {/* Add Button */}
          <button
            onClick={() => setShowAddMenu(!showAddMenu)}
            className="flex items-center gap-3 rounded-xl bg-green-600 px-6 py-3 font-medium text-white shadow-sm transition hover:bg-green-700"
          >
            <span className="text-lg">Add</span>

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500">
              <FiChevronDown
                className={`transition ${showAddMenu ? "rotate-180" : ""
                  }`}
              />
            </div>
          </button>

          {/* Dropdown */}
          {showAddMenu && (
            <div className="absolute right-0 top-16 z-50 w-72 rounded-3xl bg-white p-4 shadow-2xl">

              <button className="mb-2 flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition hover:bg-gray-100">
                <FiClipboard
                  size={22}
                  className="text-gray-500"
                />
                <span
                  onClick={() => navigate("/task")}
                  className="cursor-pointer text-1xl font-medium text-gray-700 transition hover:text-green-600"
                >
                  Task
                </span>
              </button>

              <button className="mb-2 flex w-full items-center gap-4 rounded-2xl bg-gray-100 px-4 py-4 text-left">
                <FiGrid
                  size={22}
                  className="text-gray-500"
                />
                <span className="text-1xl font-medium text-gray-700">
                  Board
                </span>
              </button>

              <button className="mb-2 flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition hover:bg-gray-100">
                <FiLayers
                  size={22}
                  className="text-gray-500"
                />
                <span className="text-1xl font-medium text-gray-700">
                  Project
                </span>
              </button>

              <button className="flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left transition hover:bg-gray-100">
                <FiUserPlus
                  size={22}
                  className="text-gray-500"
                />
                <span className="text-1xl font-medium text-gray-700">
                  Invite
                </span>
              </button>

            </div>
          )}

        </div>
      </motion.div>

      {/* Columns */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* TODO */}

        {/* TODO */}
        <div className="rounded-3xl bg-white p-4 shadow-sm">

          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold uppercase tracking-wide text-gray-700">
                TODO
              </h2>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-500">
                8
              </span>
            </div>

            <FiMoreHorizontal
              size={20}
              className="cursor-pointer text-gray-400"
            />
          </div><div className="flex -space-x-2">
            <img
              src={profile}
              alt="Profile"
              className="h-8 w-8 rounded-full border-2 border-white object-cover"
            />
            <img
              src={profile}
              alt="Profile"
              className="h-8 w-8 rounded-full border-2 border-white object-cover"
            />
          </div>

          {/* Card 1 */}
          <div className="mb-5 rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mb-4 flex items-center justify-between">

              <div className="flex gap-2">
                <span className="h-1 w-8 rounded-full bg-cyan-400"></span>
                <span className="h-1 w-8 rounded-full bg-green-500"></span>
              </div>

              <div className="flex items-center gap-1 text-sm text-gray-400">
                <FiCalendar />
                Jun 17
              </div>

            </div>

            <h3 className="text-xl font-semibold text-gray-700">
              Brand Logo Design
            </h3>

            <p className="mt-3 text-[15px] leading-7 text-gray-500">
              Make a redesign of the logo in corporate colors.
            </p>

            <div className="mt-5 flex items-center justify-between">

              <div className="flex items-center gap-5 text-gray-500">

                <div className="flex items-center gap-2">
                  <FiPaperclip />
                  2
                </div>

                <div className="flex items-center gap-2">
                  <FiMessageSquare />
                  5
                </div>

              </div>

              <div className="flex -space-x-3">
                <img
                  src={profile}
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
                />

                <img
                  src={profile}
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
                />
              </div>

            </div>

          </div>

          {/* Card 2 */}
          <div className="mb-5 rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mb-4 flex items-center justify-between">

              <span className="h-1 w-8 rounded-full bg-green-500"></span>

              <div className="flex items-center gap-1 text-sm text-gray-400">
                <FiCalendar />
                Jun 17
              </div>

            </div>

            <h3 className="text-xl font-semibold text-gray-700">
              New Header Image
            </h3>

            <img
              src={img1}
              alt=""
              className="mt-4 h-48 w-full rounded-2xl object-cover"
            />

            <div className="mt-5 flex items-center justify-between">

              <div className="flex items-center gap-5 text-gray-500">

                <div className="flex items-center gap-2">
                  <FiPaperclip />
                  1
                </div>

                <div className="flex items-center gap-2">
                  <FiMessageSquare />
                  3
                </div>

              </div>

              <img
                src={profile}
                className="h-9 w-9 rounded-full object-cover"
              />

            </div>

          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mb-4 flex items-center justify-between">

              <div className="flex gap-2">
                <span className="h-1 w-8 rounded-full bg-cyan-400"></span>
                <span className="h-1 w-8 rounded-full bg-green-500"></span>
              </div>

              <div className="flex items-center gap-1 text-sm text-gray-400">
                <FiCalendar />
                Jun 17
              </div>

            </div>

            <h3 className="text-xl font-semibold text-gray-700">
              Wireframe for App
            </h3>

            <p className="mt-3 text-[15px] leading-7 text-gray-500">
              Make a framework for an app for a pre-presentation.
            </p>

            <div className="mt-5 flex items-center justify-between">

              <div className="flex items-center gap-2 text-gray-500">
                <FiMessageSquare />
                1
              </div>

              <div className="flex -space-x-2">
                <img
                  src={profile}
                  alt="Profile"
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />

                <img
                  src={profile}
                  alt="Profile"
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              </div>

            </div>

          </div>

          {/* Add Button */}
          <div className="mt-6 flex justify-center">

            <button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl font-medium text-green-600 transition hover:scale-105 hover:bg-green-200">
              +
            </button>

          </div>

        </div>



        {/* In Progress */}
        <div className="rounded-3xl bg-white p-5 shadow-sm">

          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold uppercase text-gray-700">
                IN PROGRESS
              </h2>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500">
                5
              </span>
            </div>

            <FiMoreHorizontal className="text-gray-400" size={20} />
          </div>

          {/* ================= Card 1 ================= */}
          <div className="mt-6 rounded-3xl border border-gray-200 p-5">

            <div className="mb-4 flex justify-between">
              <div className="flex gap-2">
                <span className="h-1 w-7 rounded-full bg-cyan-400"></span>
                <span className="h-1 w-7 rounded-full bg-green-400"></span>
              </div>

              <div className="flex items-center gap-1 text-gray-400">
                <FiCalendar />
                <span>Jun 17</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-700">
              Updating Modules
            </h3>

            <p className="mt-2 text-gray-500">
              Step-by-step update of modules.
            </p>

            <div className="mt-6 flex justify-between text-gray-500">
              <span>SUB-TASKS: 4</span>
              <span>50%</span>
            </div>

            <div className="mt-2 h-2 rounded-full bg-gray-200">
              <div className="h-full w-1/2 rounded-full bg-green-500"></div>
            </div>

            <div className="my-3 flex justify-center text-gray-400">
              <FiChevronDown />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-6 text-gray-500">
                <div className="flex items-center gap-2">
                  <FiPaperclip />
                  <span>2</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiMessageSquare />
                  <span>5</span>
                </div>
              </div>

              <div className="flex -space-x-2">
                <img
                  src={profile}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src={profile}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              </div>
            </div>

          </div>

          {/* ================= Card 2 ================= */}

          <div className="mt-6 rounded-3xl border border-gray-200 p-5">

            <div className="mb-4 flex justify-between">
              <div className="flex gap-2">
                <span className="h-1 w-7 rounded-full bg-cyan-400"></span>
                <span className="h-1 w-7 rounded-full bg-green-400"></span>
              </div>

              <div className="flex items-center gap-1 text-gray-400">
                <FiCalendar />
                <span>Jun 17</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-700">
              Template Progress
            </h3>

            <p className="mt-2 text-gray-500">
              Designing cool UI design templates.
            </p>

            <div className="mt-6 flex justify-between text-gray-500">
              <span>SUB-TASKS: 4</span>
              <span>75%</span>
            </div>

            <div className="mt-2 h-2 rounded-full bg-gray-200">
              <div className="h-full w-3/4 rounded-full bg-green-500"></div>
            </div>

            <div className="my-3 flex justify-center text-gray-400">
              <FiChevronDown className="rotate-180" />
            </div>

            {/* Sub Tasks */}

            <div className="space-y-3">

              <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                <span>Inbox Template</span>
                <span className="text-xl text-green-500">✓</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                <span>Chat Template</span>
                <span className="text-xl text-green-500">✓</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                <span>Tasks Template</span>
                <span className="text-xl text-green-500">✓</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                <span>Projects Template</span>

                <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
              </div>

            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-6 text-gray-500">

                <div className="flex items-center gap-2">
                  <FiPaperclip />
                  <span>2</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiMessageSquare />
                  <span>5</span>
                </div>

              </div>

              <div className="flex -space-x-2">
                <img
                  src={profile}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src={profile}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              </div>
            </div>

          </div>

          {/* Add Button */}

          <div className="mt-6 flex justify-center">
            <button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-600">
              +
            </button>
          </div>

        </div>


        {/* Completed */}
        <div className="rounded-3xl bg-white p-5 shadow-sm">

          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold uppercase text-gray-700">
                COMPLETED
              </h2>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500">
                9
              </span>
            </div>

            <FiMoreHorizontal size={20} className="text-gray-400" />
          </div>

          {/* ------------ Card 1 ------------ */}

          <div className="mt-6 rounded-3xl border border-gray-200 p-5">

            <div className="mb-4 flex items-center justify-between">

              <div className="flex gap-2">
                <span className="h-1 w-7 rounded-full bg-cyan-400"></span>
                <span className="h-1 w-7 rounded-full bg-green-500"></span>
              </div>

              <div className="flex items-center gap-1 text-gray-400">
                <FiCalendar />
                <span>Jun 17</span>
              </div>

            </div>

            <h3 className="text-lg font-semibold text-gray-700">
              Refresh Photo Slider
            </h3>

            <div className="mt-4 grid grid-cols-3 gap-3">

              <img
                src={photo1}
                className="h-20 w-full rounded-xl object-cover"
              />

              <img
                src={photo2}
                className="h-20 w-full rounded-xl object-cover"
              />

              <img
                src={photo3}
                className="h-20 w-full rounded-xl object-cover"
              />

            </div>

            <div className="mt-5 flex items-center justify-between">

              <div className="flex gap-6 text-gray-500">

                <div className="flex items-center gap-2">
                  <FiPaperclip />
                  <span>3</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiMessageSquare />
                  <span>2</span>
                </div>

              </div>

              <div className="flex -space-x-2">
                <img
                  src={profile}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src={profile}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              </div>

            </div>

          </div>

          {/* ------------ Card 2 ------------ */}

          <div className="mt-6 rounded-3xl border border-gray-200 p-5">

            <div className="mb-4 flex items-center justify-between">

              <div className="flex gap-2">
                <span className="h-1 w-7 rounded-full bg-cyan-400"></span>
                <span className="h-1 w-7 rounded-full bg-green-500"></span>
              </div>

              <div className="flex items-center gap-1 text-gray-400">
                <FiCalendar />
                <span>Jun 17</span>
              </div>

            </div>

            <h3 className="text-lg font-semibold text-gray-700">
              Server Startup
            </h3>

            <p className="mt-2 text-gray-500">
              Running the server in test mode and configuring.
            </p>

            <div className="mt-5 flex items-center justify-between">

              <div className="flex items-center gap-2 text-gray-500">
                <FiMessageSquare />
                <span>17</span>
              </div>

              <div className="flex -space-x-2">
                <img
                  src={profile}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src={profile}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              </div>

            </div>

          </div>

          {/* ------------ Card 3 ------------ */}

          <div className="mt-6 rounded-3xl border border-gray-200 p-5">

            <div className="mb-4 flex items-center justify-between">

              <span className="h-1 w-7 rounded-full bg-green-500"></span>

              <div className="flex items-center gap-1 text-gray-400">
                <FiCalendar />
                <span>Jun 17</span>
              </div>

            </div>

            <h3 className="text-lg font-semibold text-gray-700">
              New Background
            </h3>

            <img
              src={img2}
              className="mt-4 h-44 w-full rounded-2xl object-cover"
            />

            <div className="mt-5 flex items-center justify-between">

              <div className="flex gap-6 text-gray-500">

                <div className="flex items-center gap-2">
                  <FiPaperclip />
                  <span>1</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiMessageSquare />
                  <span>2</span>
                </div>

              </div>

              <img
                src={profile}
                className="h-8 w-8 rounded-full object-cover"
              />

            </div>

          </div>

          {/* Add Button */}

          <div className="mt-6 flex justify-center">
            <button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-600 transition hover:bg-green-200">
              +
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}