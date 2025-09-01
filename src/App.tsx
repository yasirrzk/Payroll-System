import React from "react";
import Sidebar from "./Component/Layouts/Sidebar/sidebar";
import Dashboard from "./Component/Pages/Dashboard/Dashbord"
import logo from "./assets/logo-cbn.png";

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header/Topbar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between"> {/* ← UBAH INI */}
            <img
              src={logo}
              alt="Cyber Blitz Nusantara Logo"
              className="w-32"
            />
            
            {/* Optional: User profile section */} {/* ← TAMBAH INI */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content - Dashboard */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <Dashboard /> {/* ← GANTI SEMUA KONTEN INI */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;