/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="valorant-event.jpg" 
            alt="Esports tournament crowd" 
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      
      {/* Content */}
      <div className="relative z-10 py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Join Team Esport Kamiii <span className="text-purple-400">Esports</span> Community
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Compete in tournaments, connect with gamers, and stay updated with the latest in esports.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/tournaments" 
              className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-medium rounded-lg transition duration-300"
            >
              Browse Tournaments
            </Link>
            <Link 
              href="/community" 
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition duration-300"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="relative z-10 bg-gray-800 bg-opacity-80 py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-2">
              <p className="text-3xl font-bold text-purple-400">250+</p>
              <p className="text-gray-300">Active Tournaments</p>
            </div>
            <div className="p-2">
              <p className="text-3xl font-bold text-purple-400">10K+</p>
              <p className="text-gray-300">Registered Players</p>
            </div>
            <div className="p-2">
              <p className="text-3xl font-bold text-purple-400">500+</p>
              <p className="text-gray-300">Teams Competing</p>
            </div>
            <div className="p-2">
              <p className="text-3xl font-bold text-purple-400">50+</p>
              <p className="text-gray-300">Supported Games</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}