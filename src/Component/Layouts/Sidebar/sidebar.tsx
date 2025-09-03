import React, { useState } from "react";
import {
  Home,
  Briefcase,
  User,
  Calendar,
  ClipboardList,
  Shield,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  hasSubmenu?: boolean;
  isExpanded?: boolean;
  route?: string;
}

interface SidebarProps {
  activeMenuItem: string;
  onMenuClick: (menuId: string, route?: string) => void;
}

import logo from "../../../assets/logo-cbn.png";

const Sidebar: React.FC<SidebarProps> = ({ activeMenuItem, onMenuClick }) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const menuItems: MenuItem[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Home size={20} />,
      route: "dashboard",
    },
    {
      id: "job-desk",
      label: "Job Desk",
      icon: <Briefcase size={20} />,
      route: "job-desk",
    },
    {
      id: "employee",
      label: "Employee",
      icon: <User size={20} />,
      hasSubmenu: true,
    },
    {
      id: "leave",
      label: "Leave",
      icon: <Calendar size={20} />,
      hasSubmenu: true,
    },
    {
      id: "attendance",
      label: "Attendance",
      icon: <ClipboardList size={20} />,
      hasSubmenu: true,
    },
    {
      id: "administration",
      label: "Administration",
      icon: <Shield size={20} />,
      hasSubmenu: true,
    },
    {
      id: "setting",
      label: "Setting",
      icon: <Settings size={20} />,
      hasSubmenu: true,
    },
  ];

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.hasSubmenu) {
      toggleExpanded(item.id);
    } else {
      // Handle navigation for items without submenu
      onMenuClick(item.id, item.route);
    }
  };

  return (
    <div className="w-64 h-screen bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200 text-center">
        <img
          src={logo}
          alt="Cyber Blitz Nusantara Logo"
          className="w-32 mx-auto"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item)}
                className={`
                  w-full flex items-center justify-between px-4 py-3 text-left
                  text-gray-700 hover:bg-gray-100 hover:text-gray-900
                  transition-colors duration-150 ease-in-out
                  ${activeMenuItem === item.id ? "bg-gray-100 text-gray-900" : ""}
                `}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-gray-500">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>

                {item.hasSubmenu && (
                  <span className="text-gray-400">
                    {expandedItems.has(item.id) ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                )}
              </button>

              {/* Submenu (placeholder) */}
              {item.hasSubmenu && expandedItems.has(item.id) && (
                <div className="ml-8 py-2 space-y-1">
                  <button 
                    onClick={() => onMenuClick(`${item.id}-list`, `${item.id}/list`)}
                    className="w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer rounded text-left"
                  >
                    {item.label} List
                  </button>
                  <button 
                    onClick={() => onMenuClick(`${item.id}-add`, `${item.id}/add`)}
                    className="w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 cursor-pointer rounded text-left"
                  >
                    Add {item.label}
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">U</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">User Name</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;