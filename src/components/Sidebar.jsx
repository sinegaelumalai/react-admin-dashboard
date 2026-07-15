import {
  FiHome,
  FiCheckSquare,
  FiShoppingCart,
  FiCalendar,
  FiMail,
  FiMessageCircle,
  FiFolder,
  FiFileText,
  FiEdit3,
  FiUsers,
  FiSearch,
  FiChevronRight,
} from "react-icons/fi";
import { motion } from "framer-motion";
import logo from "../assets/flogo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  { icon: FiHome, title: "Dashboard", path: "/dashboard" },
  { icon: FiCheckSquare, title: "Task", path: "/task" },
  {
    icon: FiShoppingCart,
    title: "E-Commerce",
    children: [
      {
        title: "Products",
        path: "/ecommerce/products",
      },
      {
        title: "Orders",
        path: "/ecommerce/orders",
      },
      {
        title: "Customers",
        path: "/ecommerce/customers",
      },
    ],
  },
  { icon: FiCalendar, title: "Calendar", path: "/calendar" },
  { icon: FiMail, title: "Mail", path: "/mail" },
  { icon: FiMessageCircle, title: "Chat", path: "/chat" },
  { icon: FiFolder, title: "Projects", path: "/projects" },
  { icon: FiFileText, title: "File Manager", path: "/file-manager" },
  { icon: FiEdit3, title: "Notes", path: "/notes" },
  { icon: FiUsers, title: "Contacts", path: "/contacts" },
];

export default function Sidebar() {
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState("");

  const filteredMenu = menuItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.aside
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 flex h-screen w-72 flex-col border-r border-gray-200 bg-white"
    >
      {/* Logo */}
      <div className="flex justify-center border-b border-gray-100 px-6 py-6">
        <img
          src={logo}
          alt="Flower Logo"
          className="h-auto w-40 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Search */}
      <div className="px-5 pt-5">
        <div className="flex items-center rounded-xl bg-gray-100 px-4 py-3 transition-all duration-300 focus-within:ring-2 focus-within:ring-lime-300">
          <FiSearch className="text-lg text-gray-400" />

          <input
            type="text"
            placeholder="Search anything"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ml-3 w-full bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      {/* Menu Title */}
      <p className="px-6 pt-7 pb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Main Menu
      </p>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 pb-6 scrollbar-hide">
        {filteredMenu.map((item, index) => {
          const Icon = item.icon;

          // E-Commerce Menu
          if (item.children) {
            return (
              <div key={item.title} className="mb-2">
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === item.title ? "" : item.title)
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-xl" />
                    <span>{item.title}</span>
                  </div>

                  <FiChevronRight
                    className={`transition ${openMenu === item.title ? "rotate-90" : ""
                      }`}
                  />
                </button>

                {openMenu === item.title && (
                  <div className="ml-12 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <NavLink key={child.title} to={child.path}>
                        {({ isActive }) => (
                          <div
                            className={`rounded-xl px-4 py-3 ${isActive
                              ? "bg-lime-100 font-semibold text-green-700"
                              : "text-gray-600 hover:bg-gray-100"
                              }`}
                          >
                            {child.title}
                          </div>
                        )}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          // Normal Menu
          return (
            <NavLink key={item.title} to={item.path}>
              {({ isActive }) => (
                <div
                  className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 ${isActive
                    ? "bg-lime-200 font-semibold text-green-700"
                    : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  <Icon className="text-xl" />
                  <span>{item.title}</span>
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>


    </motion.aside>
  );
}