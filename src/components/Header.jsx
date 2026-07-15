import { FiMenu, FiSearch, FiBell } from "react-icons/fi";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";


import { useState, useRef, useEffect } from "react";
import {
  FiChevronDown,
  FiUser,
  FiMail,
  FiBriefcase,
  FiSettings,
  FiLock,
  FiLogOut,
} from "react-icons/fi";

export default function Header({
  showProfile,
  setShowProfile,
}) {

  const [showTopMenu, setShowTopMenu] = useState(false);

  const navigate = useNavigate();
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [showNotificationDot, setShowNotificationDot] = useState(true);

  const notificationRef = useRef(null);

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);



  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">

      {/* Left */}
      {/* Left */}
<div className="flex items-center">

  <button
    onClick={() => setShowTopMenu(!showTopMenu)}
    className="rounded-lg p-2 transition duration-300 hover:bg-gray-100"
  >
    <FiMenu size={24} className="text-gray-700" />
  </button>

  <div
    className={`overflow-hidden transition-all duration-300 ${
      showTopMenu
        ? "ml-4 max-w-md opacity-100"
        : "ml-0 max-w-0 opacity-0"
    }`}
  >
    <div className="flex items-center gap-8 whitespace-nowrap">

      <button className="flex items-center gap-2 rounded-xl bg-gray-100 px-5 py-3 font-medium text-green-600">
        <FiSettings size={18} />
        Settings
      </button>

      <button className="font-medium text-gray-700 transition hover:text-green-600">
        Activity
      </button>

      <button className="font-medium text-gray-700 transition hover:text-green-600">
        Users
      </button>

    </div>
  </div>

</div>

      

      {/* Right */}
      <div className="flex items-center gap-6">
        <button className="rounded-full p-2 transition duration-300 hover:bg-gray-100">
          <FiSearch size={22} />
        </button>

        <div className="relative" ref={notificationRef}>

          <button
            onClick={() => {
              setNotificationOpen(!notificationOpen);
              setShowNotificationDot(false);
            }}
            className="relative rounded-full p-2 transition duration-300 hover:bg-gray-100"
          >
            <FiBell size={22} />

            {showNotificationDot && (
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
            )}
          </button>

          {notificationOpen && (
            <div className="absolute right-0 mt-3 w-[340px] overflow-hidden rounded-3xl bg-white shadow-2xl">

              <div className="flex items-center justify-between border-b px-6 py-5">

                <h3 className="text-2xl font-semibold text-gray-700">
                  Notifications
                </h3>

                <span className="rounded-full bg-red-400 px-2 py-1 text-xs text-white">
                  8
                </span>

              </div>

              {[
                ["Regina Cooper", "1 min ago"],
                ["Judith Black", "5 min ago"],
                ["Ronald Robertson", "3 hour ago"],
                ["Dustin Williamson", "15 hour ago"],
                ["Calvin Flores", "Yesterday"],
                ["Robert Edwards", "Yesterday"],
              ].map((item, index) => (

                <div
                  key={index}
                  className={`flex cursor-pointer items-center gap-4 px-5 py-4 transition hover:bg-gray-50 ${index === 1 ? "bg-gray-100" : ""
                    }`}
                >

                  <div className="relative">

                    <img
                      src={profile}
                      alt=""
                      className="h-12 w-12 rounded-full"
                    />

                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>

                  </div>

                  <div className="flex-1">

                    <h4 className="font-medium text-gray-700">
                      {item[0]}
                    </h4>

                    <p className="text-sm text-gray-400">
                      {item[1]}
                    </p>

                  </div>

                  {index === 1 && (
                    <button className="rounded-full bg-gray-200 p-1 text-gray-500 hover:bg-gray-300">
                      ✕
                    </button>
                  )}

                </div>

              ))}

            </div>
          )}

        </div>

        <div className="h-8 w-px bg-gray-200"></div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 rounded-xl border border-gray-100 px-3 py-2 transition hover:bg-gray-100"
          >
            <img
              src={profile}
              alt="Profile"
              className="h-11 w-11 rounded-full object-cover"
            />

            <span className="font-medium text-gray-700">
              ArtTemplate
            </span>

            <FiChevronDown
              size={18}
              className={`transition duration-300 ${open ? "rotate-180" : ""
                }`}
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-80 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl z-50">
              {/* Profile */}
              <div className="flex items-center justify-between border-b p-5">
                <div className="flex items-center gap-3">
                  <img
                    src={profile}
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-gray-700">
                      ArtTemplate
                    </h3>

                    <p className="text-sm text-gray-400">
                      Manager
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                  8
                </span>
              </div>

              {/* Menu */}
              <div className="p-3 space-y-1">
                <MenuItem
                  icon={<FiUser />}
                  text="My Profile"
                  onClick={() => {
                    setShowProfile(true);
                    setOpen(false);
                  }}
                />
                <MenuItem icon={<FiMail />} text="My Messages" />
                <MenuItem icon={<FiBriefcase />} text="My Tasks" />

                <hr className="my-3" />

                <MenuItem icon={<FiSettings />} text="Settings" active />

                <MenuItem
                  icon={<FiLock />}
                  text="Lock Screen"
                  onClick={() => navigate("/login")}
                />

                <hr className="my-3" />

                <MenuItem icon={<FiLogOut />} text="Logout" />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function MenuItem({
  icon,
  text,
  active,
  onClick,

}) {
  return (
    <button onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition-all duration-200 ${active
        ? "bg-gray-100 text-gray-700"
        : "text-gray-600 hover:bg-gray-50"
        }`}
    >
      <span className="text-xl">{icon}</span>

      <span className="text-base font-medium">
        {text}
      </span>
    </button>
  );
}