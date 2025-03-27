// components/admin/StatsOverview.tsx
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'

export default function StatsOverview() {
  const stats = [
    { name: 'Total Page Views', value: '12,345', change: '12%', trend: 'up' },
    { name: 'New Users', value: '245', change: '8%', trend: 'up' },
    { name: 'Event Registrations', value: '124', change: '5%', trend: 'up' },
    { name: 'Bounce Rate', value: '32%', change: '2%', trend: 'down' },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Website Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="border-l-4 border-purple-500 pl-4">
            <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              <span className={`ml-2 flex items-center text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? (
                  <FiArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <FiArrowDown className="h-4 w-4 mr-1" />
                )}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}