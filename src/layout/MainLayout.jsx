import { useState } from "react";

import Sidebar from "../components/Sidebar";
import ProfileSidebar from "../components/ProfileSidebar";
import Header from "../components/Header";

export default function MainLayout({ children }) {

  const [showProfile, setShowProfile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#F6F8FB]">

      {showProfile ? (
        <ProfileSidebar
          setShowProfile={setShowProfile}
        />
      ) : (
        <Sidebar />
      )}

      <div className="flex flex-1 flex-col">

        <Header
          showProfile={showProfile}
          setShowProfile={setShowProfile}
        />

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}