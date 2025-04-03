/* eslint-disable @next/next/no-img-element */
// app/components/TeamCard.tsx
import Link from 'next/link'
import { Team } from '../types/index'

interface TeamCardProps {
  team: Team
}

export default function TeamCard({ team }: TeamCardProps) {
  return (
    <Link 
      href={`/teams/${team.id}`}
      className="group bg-gray-800 rounded-lg p-4 flex flex-col items-center text-center hover:bg-gray-700 transition duration-300"
    >
      <div className="w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-2 border-red-500 group-hover:border-red-400 transition">
        {team.logo ? (
          <img 
            src={team.logo} 
            alt={`${team.name} logo`} 
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-2xl font-bold text-red-400">{team.name.charAt(0)}</span>
        )}
      </div>
      <h3 className="text-lg font-bold mb-1 group-hover:text-red-400 transition">{team.name}</h3>
      <p className="text-sm text-gray-400 mb-2">{team.game}</p>
      <div className="flex items-center text-xs text-gray-500">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        {team.members} members
      </div>
    </Link>
  )
}