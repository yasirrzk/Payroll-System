import React from 'react';
import { 
  Users, 
  UserCheck, 
  UserX, 
  Clock, 
  Calendar, 
  TrendingUp,
  Award,
  AlertTriangle,
  Plus
} from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
  bgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  trend, 
  trendDirection = 'neutral',
  bgColor 
}) => {
  const getTrendColor = () => {
    switch (trendDirection) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {trend && (
            <p className={`text-xs ${getTrendColor()} mt-1`}>
              <TrendingUp className="inline w-3 h-3 mr-1" />
              {trend}
            </p>
          )}
        </div>
        <div className={`${bgColor} p-3 rounded-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

interface QuickActionProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const QuickAction: React.FC<QuickActionProps> = ({ title, icon, onClick }) => (
  <button 
    onClick={onClick}
    className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all group"
  >
    <div className="text-blue-600 group-hover:text-blue-700">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
      {title}
    </span>
  </button>
);

interface RecentActivityItem {
  id: string;
  user: string;
  action: string;
  time: string;
  status: 'success' | 'pending' | 'warning';
}

const ActivityItem: React.FC<RecentActivityItem> = ({ user, action, time, status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'success': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'warning': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{user}</p>
        <p className="text-xs text-gray-600">{action}</p>
      </div>
      <div className="text-right">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor()}`}>
          {status}
        </span>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const stats = [
    {
      title: 'Total Employees',
      value: '247',
      icon: <Users className="w-6 h-6 text-white" />,
      trend: '+12% from last month',
      trendDirection: 'up' as const,
      bgColor: 'bg-blue-500'
    },
    {
      title: 'Present Today',
      value: '231',
      icon: <UserCheck className="w-6 h-6 text-white" />,
      trend: '93.5% attendance',
      trendDirection: 'up' as const,
      bgColor: 'bg-green-500'
    },
    {
      title: 'On Leave',
      value: '12',
      icon: <Calendar className="w-6 h-6 text-white" />,
      trend: '4.9% of workforce',
      trendDirection: 'neutral' as const,
      bgColor: 'bg-orange-500'
    },
    {
      title: 'Late Today',
      value: '4',
      icon: <Clock className="w-6 h-6 text-white" />,
      trend: '-2 from yesterday',
      trendDirection: 'down' as const,
      bgColor: 'bg-red-500'
    }
  ];

  const quickActions = [
    { title: 'Add New Employee', icon: <Plus className="w-5 h-5" /> },
    { title: 'Process Payroll', icon: <Award className="w-5 h-5" /> },
    { title: 'Generate Report', icon: <TrendingUp className="w-5 h-5" /> },
    { title: 'Review Applications', icon: <AlertTriangle className="w-5 h-5" /> }
  ];

  const recentActivities: RecentActivityItem[] = [
    {
      id: '1',
      user: 'John Doe',
      action: 'Submitted leave request',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      id: '2',
      user: 'Jane Smith',
      action: 'Completed training module',
      time: '4 hours ago',
      status: 'success'
    },
    {
      id: '3',
      user: 'Mike Johnson',
      action: 'Late check-in reported',
      time: '1 day ago',
      status: 'warning'
    },
    {
      id: '4',
      user: 'Sarah Wilson',
      action: 'Profile updated successfully',
      time: '2 days ago',
      status: 'success'
    },
    {
      id: '5',
      user: 'David Brown',
      action: 'Overtime request approved',
      time: '3 days ago',
      status: 'success'
    }
  ];

  const handleQuickAction = (title: string) => {
    console.log(`Quick action clicked: ${title}`);
    // Here you can add navigation or modal opening logic
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-6">
        <h1 className="text-2xl font-bold mb-2">Good Eevening, lekkk!</h1>
        <p className="text-blue-100">Here's what's happening in your organization today.</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
            trendDirection={stat.trendDirection}
            bgColor={stat.bgColor}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <QuickAction
                  key={index}
                  title={action.title}
                  icon={action.icon}
                  onClick={() => handleQuickAction(action.title)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                View All
              </button>
            </div>
            {/* <div className="space-y-2">
              {recentActivities.map((activity) => (
                <ActivityItem
                  key={activity.id}
                  user={activity.user}
                  action={activity.action}
                  time={activity.time}
                  status={activity.status}
                />
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* Additional Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium">Team Meeting</p>
                <p className="text-xs text-gray-600">Tomorrow at 10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <Award className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm font-medium">Quarterly Review</p>
                <p className="text-xs text-gray-600">Next week</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Alerts</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="text-sm font-medium">Pending Leave Approvals</p>
                <p className="text-xs text-gray-600">5 requests awaiting review</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <UserCheck className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium">New Employee Onboarding</p>
                <p className="text-xs text-gray-600">3 new hires starting Monday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;