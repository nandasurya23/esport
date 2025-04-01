/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from 'next/navigation'
import { Tournament } from '../types/index'

interface TournamentCardProps {
  tournament: Tournament
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
  const router = useRouter()

  const getStatusBadge = () => {
    switch (tournament.status) {
      case 'ongoing':
        return (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
            LIVE
          </span>
        )
      case 'completed':
        return (
          <span className="absolute top-2 right-2 bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
            COMPLETED
          </span>
        )
      default:
        return (
          <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            UPCOMING
          </span>
        )
    }
  }

  const handleRegister = () => {
    router.push(`/forms/team-registration?tournamentId=${tournament.id}`)
  }

  const handleViewDetails = () => {
    router.push(`/tournaments/${tournament.id}`)
  }

  const isRegistrationClosed = tournament.registrationDeadline &&
    new Date(tournament.registrationDeadline) < new Date()

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <div className="relative h-48 bg-gradient-to-r from-purple-900 to-blue-800">
        {tournament.image ? (
          <img
            src={tournament.image}
            alt={tournament.name}
            className="w-full h-full object-cover opacity-70"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-bold text-white opacity-30">
              {tournament.game}
            </span>
          </div>
        )}
        {getStatusBadge()}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold line-clamp-2">{tournament.name}</h3>
          <div className="flex items-center space-x-2">
            <span className="bg-gray-700 text-purple-400 text-xs px-2 py-1 rounded">
              {tournament.game}
            </span>
            <span className="bg-gray-700 text-blue-400 text-xs px-2 py-1 rounded">
              {tournament.platform}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-400">Date</p>
            <p className="font-medium">
              {new Date(tournament.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Prize</p>
            <p className="font-medium">{tournament.prize}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Teams</p>
            <p className="font-medium">
              {tournament.teams}{tournament.maxTeams ? `/${tournament.maxTeams}` : ''}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Format</p>
            <p className="font-medium">{tournament.format}</p>
          </div>
        </div>

        {tournament.status === 'completed' && tournament.winner && (
          <div className="mb-4 p-3 bg-gray-700 rounded">
            <p className="text-sm text-gray-300">Winner</p>
            <p className="font-medium text-purple-400">{tournament.winner}</p>
          </div>
        )}

        {tournament.entryFee && (
          <div className="mb-3 p-2 bg-gray-700 rounded text-center">
            <p className="text-sm font-medium text-yellow-400">
              Entry Fee: ${tournament.entryFee.toFixed(2)}
            </p>
          </div>
        )}

        <div className="space-y-2">
          <button
            onClick={handleViewDetails}
            className={`block w-full text-center py-2 rounded transition ${
              tournament.status === 'ongoing'
                ? 'bg-red-600 hover:bg-red-500 text-white'
                : 'bg-purple-600 hover:bg-purple-500 text-white'
            }`}
          >
            {tournament.status === 'ongoing'
              ? tournament.streamLink ? 'Watch Live' : 'Tournament Details'
              : 'View Details'}
          </button>

          {tournament.status === 'upcoming' && (
            <button
              className={`w-full py-2 rounded transition ${
                tournament.isRegistered
                  ? 'bg-green-800 text-gray-300 cursor-default'
                  : isRegistrationClosed
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-500 text-white'
              }`}
              onClick={handleRegister}
            >
              {tournament.isRegistered
                ? 'Already Registered'
                : isRegistrationClosed
                  ? 'Registration Closed'
                  : 'Register Now'}
            </button>
          )}
        </div>

        {tournament.status === 'upcoming' && tournament.registrationDeadline && (
          <p className="text-xs text-gray-400 mt-2 text-center">
            {isRegistrationClosed
              ? 'Registration closed on ' + new Date(tournament.registrationDeadline).toLocaleDateString()
              : 'Closes on ' + new Date(tournament.registrationDeadline).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  )
}