/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Event } from '../types/index'

interface EventCardProps {
  event: Event
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-48 object-cover"
        />
        {event.isLive && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            LIVE
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{event.title}</h3>
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
            {event.game}
          </span>
        </div>
        <p className="text-gray-400 mb-2">
          <span className="text-red-400">Date:</span> {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-gray-400 mb-4">
          <span className="text-red-400">Location:</span> {event.location}
        </p>
        <Link 
          href={`/events/${event.id}`}
          className="block w-full bg-red-600 hover:bg-red-500 text-white text-center py-2 rounded transition"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}