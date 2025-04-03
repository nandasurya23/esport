// app/admin/users/page.tsx
import UserTable from '../../components/admin/UserTable'
import Pagination from '../../components/admin/Pagination'

export default function AdminUsers() {
  // In a real app, this data would come from an API
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
      joined: '2023-01-15'
    },
    {
      id: 2,
      name: 'Bagong',
      email: 'bagong@example.com',
      role: 'Admin',
      status: 'Active',
      joined: '2023-01-15'
    },
    {
      id: 3,
      name: 'Bagong',
      email: 'bagong@example.com',
      role: 'Admin',
      status: 'Active',
      joined: '2023-01-15'
    },
    {
      id: 4,
      name: 'Bagong',
      email: 'bagong@example.com',
      role: 'Admin',
      status: 'Active',
      joined: '2023-01-15'
    },
    // More users...
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Add New User
        </button>
      </div>
      
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search users..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex space-x-2">
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                <option>All Roles</option>
                <option>Admin</option>
                <option>User</option>
                <option>Moderator</option>
              </select>
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md">
                <option>All Statuses</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Suspended</option>
              </select>
            </div>
          </div>
        </div>
        <UserTable users={users} />
        <div className="px-6 py-4 border-t border-gray-200">
          <Pagination currentPage={1} totalPages={5} />
        </div>
      </div>
    </div>
  )
}