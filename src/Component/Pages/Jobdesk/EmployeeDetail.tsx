import React, { useState } from 'react';
import { 
  ChevronRight, 
  Plus, 
  X, 
  Building2, 
  DollarSign, 
  Clock, 
  Calendar,
  Mail,
  Phone,
  Globe,
  Bell,
  User
} from 'lucide-react';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
      isActive
        ? 'text-blue-600 border-blue-600'
        : 'text-gray-500 border-transparent hover:text-gray-700'
    }`}
  >
    {label}
  </button>
);

interface AllowanceCardProps {
  title: string;
  paid: string;
  paidType: string;
  allowance: string;
  earned: string;
  taken: string;
  availability: string;
}

const AllowanceCard: React.FC<AllowanceCardProps> = ({
  title,
  paid,
  paidType,
  allowance,
  earned,
  taken,
  availability
}) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
    <h4 className="font-semibold text-gray-900">{title}</h4>
    
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Paid</span>
        <span className="font-medium text-gray-900">{paid}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Type</span>
        <span className="text-gray-600">{paidType}</span>
      </div>
    </div>

    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Allowance</span>
        <span className="text-gray-600">{allowance}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Earned</span>
        <span className="text-gray-600">{earned}</span>
      </div>
    </div>

    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Taken</span>
        <span className="text-gray-600">{taken}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Availability</span>
        <span className="text-gray-600">{availability}</span>
      </div>
    </div>
  </div>
);

const JobDeskEmployeeDetail: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Allowance');
  const [showPolicy, setShowPolicy] = useState(true);

  const tabs = [
    'Allowance', 'Attendance', 'Leave', 'Folder', 'Assets', 
    'History', 'Salary', 'Pay run', 'Slip', 'Address', 'Contact'
  ];

  const allowanceData = [
    {
      title: 'Paid Casual',
      paid: '07:00',
      paidType: 'Type',
      allowance: '$21,000',
      earned: '$3',
      taken: '$5',
      availability: 'Availability'
    },
    {
      title: 'Paid Sick',
      paid: '07:00',
      paidType: 'Type',
      allowance: '$21,000',
      earned: '$3',
      taken: '$5',
      availability: 'Availability'
    },
    {
      title: 'Unpaid Casual',
      paid: '07:00',
      paidType: 'Type',
      allowance: '$21,000',
      earned: '$3',
      taken: '$5',
      availability: 'Availability'
    },
    {
      title: 'Unpaid Sick',
      paid: '07:00',
      paidType: 'Type',
      allowance: '$21,000',
      earned: '$3',
      taken: '$5',
      availability: 'Availability'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Breadcrumb and Action */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-600">Job Desk</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900">Allowance</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">EN</span>
            </div>
            <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Page Title and Action Button */}
      <div className="px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Job Desk</h1>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span>Action</span>
        </button>
      </div>

      <div className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Employee Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
              {/* Employee Profile */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Dapuq</h3>
                <p className="text-sm text-gray-500">Front End Engineer</p>
              </div>

              {/* Info Section */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Info</h4>
                
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">IT</p>
                    <p className="text-xs text-gray-500">Department</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">$ 40,000</p>
                    <p className="text-xs text-gray-500">Salary</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Regular</p>
                    <p className="text-xs text-gray-500">Work Shift</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">4 August 2023\5</p>
                    <p className="text-xs text-gray-500">Joining date</p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">Contact</h4>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-900">Email</p>
                    <p className="text-xs text-blue-600">dapuqpuki@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-900">Phone</p>
                    <p className="text-xs text-gray-600">+6282283386756</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-900">Website</p>
                    <p className="text-xs text-blue-600">dapuqpuki.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="bg-white rounded-t-lg border border-gray-200 border-b-0">
              <div className="flex overflow-x-auto px-6 py-0">
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    label={tab}
                    isActive={activeTab === tab}
                    onClick={() => setActiveTab(tab)}
                  />
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-b-lg border border-gray-200 border-t-0 p-6">
              {/* Policy Alert */}
              {showPolicy && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 relative">
                  <button
                    onClick={() => setShowPolicy(false)}
                    className="absolute top-3 right-3 text-yellow-600 hover:text-yellow-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Allowance Policy</h4>
                      <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                        <li>Leave will start from the month of January</li>
                        <li>Any type of change will be effective on the next day.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}

              {/* Allowance Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {allowanceData.map((allowance, index) => (
                  <AllowanceCard
                    key={index}
                    title={allowance.title}
                    paid={allowance.paid}
                    paidType={allowance.paidType}
                    allowance={allowance.allowance}
                    earned={allowance.earned}
                    taken={allowance.taken}
                    availability={allowance.availability}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDeskEmployeeDetail;