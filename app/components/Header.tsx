import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition">
          EsportsHub
        </Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/events" className="hover:text-purple-400 transition">Events</Link>
          <Link href="/community" className="hover:text-purple-400 transition">Community</Link>
          <Link href="/tournaments" className="hover:text-purple-400 transition">Tournaments</Link>
          <Link href="/teams" className="hover:text-purple-400 transition">Teams</Link>
          <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
        </nav>
        
        <div className="flex space-x-4">
          <Link href="/login" className="px-4 py-2 rounded hover:bg-gray-700 transition">Login</Link>
          <Link href="/register" className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-500 transition">Register</Link>
        </div>
      </div>
    </header>
  )
}