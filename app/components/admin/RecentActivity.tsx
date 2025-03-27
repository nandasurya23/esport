// components/admin/RecentActivity.tsx
import { FiUser, FiCalendar, FiAward, FiEdit } from 'react-icons/fi'

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      user: 'John Doe',
      action: 'created a new event',
      target: 'Valorant Championship',
      time: '2 hours ago',
      icon: <FiCalendar className="h-5 w-5 text-blue-500" />
    },
    {
      id: 2,
      user: 'Jane Smith',
      action: 'updated team information',
      target: 'Team Phoenix',
      time: '4 hours ago',
      icon: <FiAward className="h-5 w-5 text-green-500" />
    },
    {
      id: 3,
      user: 'Admin',
      action: 'published a new blog post',
      target: 'Top 5 Strategies for Valorant',
      time: '1 day ago',
      icon: <FiEdit className="h-5 w-5 text-purple-500" />
    },
    {
      id: 4,
      user: 'Mike Johnson',
      action: 'registered for tournament',
      target: 'Dota 2 International',
      time: '1 day ago',
      icon: <FiUser className="h-5 w-5 text-yellow-500" />
    },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100">
                {activity.icon}
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <span className="font-semibold">{activity.user}</span> {activity.action}
              </p>
              <p className="text-sm text-gray-500">{activity.target}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="text-sm font-medium text-purple-600 hover:text-purple-500">
          View all activity →
        </button>
      </div>
    </div>
  )
}