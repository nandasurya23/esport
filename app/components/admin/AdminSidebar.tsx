"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation' // Changed from next/router
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiAward,
  FiFileText,
  FiMessageSquare,
  FiSettings,
  FiLogOut
} from 'react-icons/fi'

export default function AdminSidebar() {
  const pathname = usePathname() // Changed from useRouter

  const navItems = [
    { href: '/admin', icon: FiHome, label: 'Dashboard' },
    { href: '/admin/users', icon: FiUsers, label: 'Users' },
    { href: '/admin/events', icon: FiCalendar, label: 'Events' },
    { href: '/admin/tournaments', icon: FiAward, label: 'Tournaments' },
    { href: '/admin/teams', icon: FiUsers, label: 'Teams' },
    { href: '/admin/content', icon: FiFileText, label: 'Content' },
    { href: '/admin/community', icon: FiMessageSquare, label: 'Community' },
    { href: '/admin/settings', icon: FiSettings, label: 'Settings' },
  ]

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 bg-gray-800 border-r border-gray-700">
        <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-xl font-bold text-white">EsportsHub Admin</h1>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-2 py-3 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? 'bg-purple-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-700 p-4">
          <button className="flex-shrink-0 w-full group block">
            <div className="flex items-center">
              <div>
                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-purple-600 text-white">
                  <FiLogOut className="h-5 w-5" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Logout</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}