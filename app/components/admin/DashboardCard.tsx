// components/admin/DashboardCard.tsx
import { FiUsers, FiCalendar, FiAward, FiCheckCircle } from 'react-icons/fi'

interface DashboardCardProps {
  title: string
  value: string
  change: string
  icon: 'users' | 'calendar' | 'team' | 'approval'
  trend: 'up' | 'down'
}

export default function DashboardCard({ title, value, change, icon, trend }: DashboardCardProps) {
  const iconMap = {
    users: <FiUsers className="h-6 w-6 text-purple-500" />,
    calendar: <FiCalendar className="h-6 w-6 text-blue-500" />,
    team: <FiAward className="h-6 w-6 text-green-500" />,
    approval: <FiCheckCircle className="h-6 w-6 text-yellow-500" />,
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm font-medium text-gray-500">{title}</span>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
          <p className={`text-sm mt-1 ${
            trend === 'up' ? 'text-green-600' : 'text-red-600'
          }`}>
            {change} from last week
          </p>
        </div>
        <div className="p-3 rounded-full bg-gray-50">
          {iconMap[icon]}
        </div>
      </div>
    </div>
  )
}