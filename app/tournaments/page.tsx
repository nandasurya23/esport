import TournamentCard from '../components/TournamentCard'

export default function TournamentsPage() {
  // Sample data - in a real app, this would come from an API
  const upcomingTournaments = [
    {
      id: 1,
      name: 'Valorant Champions Tour',
      game: 'Valorant',
      date: '2023-12-15',
      prize: '$50,000',
      teams: 32,
      format: '5v5',
      status: 'upcoming' as const, // <-- Add 'as const' to ensure type literal
      image: '/valorant-event.jpg'
    },
    // ...
  ]
  
  const ongoingTournaments = [
    {
      id: 3,
      name: 'Dota 2 International Qualifiers',
      game: 'Dota 2',
      date: '2023-11-05',
      prize: '$25,000',
      teams: 24,
      format: '5v5',
      status: 'ongoing' as const, // <-- Add 'as const' here
      image: '/valorant-event.jpg'
    }
  ]
  
  const pastTournaments = [
    {
      id: 4,
      name: 'CS:GO Major Championship',
      game: 'Counter-Strike',
      date: '2023-10-15',
      prize: '$75,000',
      teams: 16,
      format: '5v5',
      status: 'completed' as const, // <-- And here
      winner: 'Team Phoenix',
      image: '/valorant-event.jpg'
    }
  ]
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Esports Tournaments</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Compete in the most exciting esports tournaments and showcase your skills
        </p>
      </div>

      {/* Tournament Filters */}
      <div className="bg-gray-800 p-6 rounded-lg mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Game</label>
            <select className="w-full bg-gray-700 rounded px-4 py-2">
              <option>All Games</option>
              <option>Valorant</option>
              <option>League of Legends</option>
              <option>Dota 2</option>
              <option>Counter-Strike</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Status</label>
            <select className="w-full bg-gray-700 rounded px-4 py-2">
              <option>All Statuses</option>
              <option>Upcoming</option>
              <option>Ongoing</option>
              <option>Completed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Date Range</label>
            <select className="w-full bg-gray-700 rounded px-4 py-2">
              <option>All Dates</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Next 3 Months</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Prize Pool</label>
            <select className="w-full bg-gray-700 rounded px-4 py-2">
              <option>Any Prize</option>
              <option>$1,000+</option>
              <option>$5,000+</option>
              <option>$10,000+</option>
              <option>$50,000+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Ongoing Tournaments */}
      {ongoingTournaments.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Ongoing Tournaments</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ongoingTournaments.map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        </section>
      )}

      {/* Upcoming Tournaments */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Upcoming Tournaments</h2>
        {upcomingTournaments.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingTournaments.map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-400">No upcoming tournaments scheduled. Check back later!</p>
          </div>
        )}
      </section>

      {/* Past Tournaments */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Past Tournaments</h2>
          <button className="text-purple-400 hover:text-purple-300">
            View All →
          </button>
        </div>
        {pastTournaments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastTournaments.slice(0, 3).map(tournament => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-400">No past tournaments to display</p>
          </div>
        )}
      </section>
    </div>
  )
}