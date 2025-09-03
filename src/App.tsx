import React, { useState } from "react";
import Sidebar from "./Component/Layouts/Sidebar/sidebar";
import logo from "./assets/logo-cbn.png";

// Page Components Import
import Dashboard from "../src/Component/Pages/Dashboard/Dashbord";
import JobDeskEmployeeDetail from "../src/Component/Pages/Jobdesk/EmployeeDetail";
import EmployeePage from "./Component/Pages/Employee/EmployeePage";
import LeavePage from "./Component/Pages/Leave/LeavePage";
// Import other pages as needed
// import AttendancePage from "./Component/Pages/Attendance/AttendancePage";
// import AdministrationPage from "./Component/Pages/Administration/AdministrationPage";
// import SettingPage from "./Component/Pages/Setting/SettingPage";

// Temporary placeholder components for pages not yet created
const AttendancePage: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Attendance Management</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600">Attendance page will be implemented here.</p>
    </div>
  </div>
);

const AdministrationPage: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Administration</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600">Administration page will be implemented here.</p>
    </div>
  </div>
);

const SettingPage: React.FC = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600">Settings page will be implemented here.</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");

  const handleMenuClick = (menuId: string, route?: string) => {
    setActiveMenuItem(menuId);
    if (route) {
      setCurrentPage(route);
    } else {
      setCurrentPage(menuId);
    }
    console.log(`Navigating to: ${menuId}, Route: ${route || menuId}`);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "job-desk":
        return <JobDeskEmployeeDetail />;
      case "employee":
      case "employee/list":
      case "employee-list":
        return <EmployeePage />;
      case "leave":
      case "leave/list":
      case "leave-list":
        return <LeavePage />;
      case "attendance":
      case "attendance/list":
      case "attendance-list":
        return <AttendancePage />;
      case "administration":
      case "administration/list":
      case "administration-list":
        return <AdministrationPage />;
      case "setting":
      case "setting/list":
      case "setting-list":
        return <SettingPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Component */}
      <Sidebar 
        activeMenuItem={activeMenuItem}
        onMenuClick={handleMenuClick}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header/Topbar - Hide for Job Desk page */}
        {currentPage !== "job-desk" && (
          <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <img
                src={logo}
                alt="Cyber Blitz Nusantara Logo"
                className="w-32"
              />
              
              {/* User profile section */}
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
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {currentPage === "job-desk" ? (
            // Job Desk page has its own full layout
            renderCurrentPage()
          ) : (
            // Other pages use container layout
            <div className="max-w-7xl mx-auto p-6">
              {renderCurrentPage()}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;