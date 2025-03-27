// app/admin/page.tsx
import DashboardCard from '../components/admin/DashboardCard'
import RecentActivity from '../components/admin/RecentActivity'
import StatsOverview from '../components/admin/StatsOverview'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      
      <StatsOverview />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard 
          title="Total Users" 
          value="1,248" 
          change="+12.5%" 
          icon="users"
          trend="up"
        />
        <DashboardCard 
          title="Active Events" 
          value="24" 
          change="+3" 
          icon="calendar"
          trend="up"
        />
        <DashboardCard 
          title="Registered Teams" 
          value="86" 
          change="+8" 
          icon="team"
          trend="up"
        />
        <DashboardCard 
          title="Pending Approvals" 
          value="5" 
          change="-2" 
          icon="approval"
          trend="down"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-purple-50 rounded-lg text-purple-700 hover:bg-purple-100 transition">
              Create New Event
            </button>
            <button className="p-4 bg-blue-50 rounded-lg text-blue-700 hover:bg-blue-100 transition">
              Add Blog Post
            </button>
            <button className="p-4 bg-green-50 rounded-lg text-green-700 hover:bg-green-100 transition">
              Manage Users
            </button>
            <button className="p-4 bg-yellow-50 rounded-lg text-yellow-700 hover:bg-yellow-100 transition">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}