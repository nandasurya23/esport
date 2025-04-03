'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-gray-800 py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logo1.png"
            alt="Logo"
            width={40}
            height={40}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/events" className="hover:text-purple-400 transition">Events</Link>
          <Link href="/community" className="hover:text-purple-400 transition">Community</Link>
          <Link href="/tournaments" className="hover:text-purple-400 transition">Tournaments</Link>
          <Link href="/teams" className="hover:text-purple-400 transition">Teams</Link>
          <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
        </nav>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href="/login" className="px-4 py-2 rounded hover:bg-gray-700 transition">Login</Link>
          <Link href="/register" className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-500 transition">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 pb-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/events" 
              className="hover:text-purple-400 transition py-2 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Eventsssds
            </Link>
            <Link 
              href="/community" 
              className="hover:text-purple-400 transition py-2 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Community
            </Link>
            <Link 
              href="/tournaments" 
              className="hover:text-purple-400 transition py-2 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Tournaments
            </Link>
            <Link 
              href="/teams" 
              className="hover:text-purple-400 transition py-2 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Teams
            </Link>
            <Link 
              href="/blog" 
              className="hover:text-purple-400 transition py-2 border-b border-gray-700"
              onClick={toggleMenu}
            >
              Blog
            </Link>
          </nav>
          
          <div className="flex flex-col space-y-3 mt-4">
            <Link 
              href="/login" 
              className="w-full text-center px-4 py-2 rounded hover:bg-gray-700 transition"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link 
              href="/register" 
              className="w-full text-center px-4 py-2 bg-purple-600 rounded hover:bg-purple-500 transition"
              onClick={toggleMenu}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}