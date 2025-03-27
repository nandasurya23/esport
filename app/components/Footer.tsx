// app/components/Footer.tsx
import Link from 'next/link'
import { FaTwitter, FaDiscord, FaTwitch, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="text-purple-400 mr-2">Esports</span>Hub
            </h3>
            <p className="mb-4">
              The ultimate platform for esports enthusiasts. Join tournaments, connect with teams, 
              and stay updated with the latest in competitive gaming.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition">
                <FaDiscord className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition">
                <FaTwitch className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition">
                <FaYoutube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="hover:text-purple-400 transition">Events</Link>
              </li>
              <li>
                <Link href="/tournaments" className="hover:text-purple-400 transition">Tournaments</Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-purple-400 transition">Teams</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-purple-400 transition">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition">Contact Us</Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-purple-400 transition">Help Center</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-purple-400 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-purple-400 transition">Terms of Service</Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-purple-400 transition">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="mb-4">Subscribe to get updates on upcoming tournaments and events.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-700 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-r transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} EsportsHub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm hover:text-purple-400 transition">Privacy</Link>
            <Link href="/terms" className="text-sm hover:text-purple-400 transition">Terms</Link>
            <Link href="/cookies" className="text-sm hover:text-purple-400 transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}