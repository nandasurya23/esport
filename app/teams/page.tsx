/* eslint-disable @next/next/no-img-element */
import TeamCard from '../components/TeamCard'

export default function TeamsPage() {
  // Sample data - in a real app, this would come from an API
  const featuredTeams = [
    {
      id: 1,
      name: 'Team Phoenix',
      game: 'Dota 2',
      logo: 'teams/phoenix.png',
      members: 5,
      established: 2018,
      country: 'International'
    },
    {
      id: 2,
      name: 'Shadow Wolves',
      game: 'Valorant',
      logo: 'teams/phoenix.png',
      members: 6,
      established: 2020,
      country: 'USA'
    },
    {
      id: 3,
      name: 'Dragon Knights',
      game: 'League of Legends',
      logo: 'teams/phoenix.png',
      members: 7,
      established: 2019,
      country: 'South Korea'
    },
    {
      id: 4,
      name: 'Void Strikers',
      game: 'Counter-Strike',
      logo: 'teams/phoenix.png',
      members: 5,
      established: 2017,
      country: 'Europe'
    },
  ]

  const topTeams = [
    {
      id: 5,
      name: 'Titan Esports',
      game: 'Dota 2',
      logo: 'teams/phoenix.png',
      members: 5,
      ranking: 1
    },
    {
      id: 6,
      name: 'Nova Gaming',
      game: 'Valorant',
      logo: 'teams/phoenix.png',
      members: 6,
      ranking: 2
    },
    {
      id: 7,
      name: 'Eclipse',
      game: 'League of Legends',
      logo: 'teams/phoenix.png',
      members: 7,
      ranking: 3
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Esports Teams</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Discover professional teams, view their profiles, and follow their journey
        </p>
      </div>

      {/* Team Search */}
      <div className="bg-gray-800 p-6 rounded-lg mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Search Teams</label>
            <input 
              type="text" 
              placeholder="Enter team name..." 
              className="w-full bg-gray-700 rounded px-4 py-2"
            />
          </div>
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
            <label className="block text-sm font-medium mb-2">Region</label>
            <select className="w-full bg-gray-700 rounded px-4 py-2">
              <option>All Regions</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia</option>
              <option>International</option>
            </select>
          </div>
        </div>
      </div>

      {/* Top Teams */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Top Ranked Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topTeams.map(team => (
            <div key={team.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden mr-4">
                  {team.logo ? (
                    <img src={team.logo} alt={`${team.name} logo`} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl font-bold text-purple-400">{team.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold">{team.name}</h3>
                  <p className="text-sm text-gray-400">{team.game}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  <span className="text-purple-400">#{team.ranking}</span> in rankings
                </span>
                <span className="text-sm text-gray-400">
                  {team.members} members
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Teams */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">All Teams</h2>
          <button className="text-purple-400 hover:text-purple-300">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {featuredTeams.map(team => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>
    </div>
  )
}