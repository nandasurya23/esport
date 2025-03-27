import { FaUsers, FaComments, FaTrophy, FaNewspaper } from 'react-icons/fa'

export default function CommunityPage() {
  // Sample data - in a real app, this would come from an API
  const activeGroups = [
    { id: 1, name: 'Valorant Enthusiasts', members: 1243, game: 'Valorant' },
    { id: 2, name: 'League Legends', members: 892, game: 'League of Legends' },
    { id: 3, name: 'Dota Masters', members: 756, game: 'Dota 2' },
    { id: 4, name: 'CS:GO Competitive', members: 1102, game: 'Counter-Strike' },
  ]

  const recentActivities = [
    { id: 1, title: 'New tournament announced', group: 'Valorant Enthusiasts', time: '2 hours ago' },
    { id: 2, title: 'Strategy discussion started', group: 'Dota Masters', time: '5 hours ago' },
    { id: 3, title: 'Team recruitment post', group: 'League Legends', time: '1 day ago' },
    { id: 4, title: 'Patch notes discussion', group: 'CS:GO Competitive', time: '1 day ago' },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Esports Community Hub</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Connect with fellow gamers, join discussions, and participate in community events
        </p>
      </div>

      {/* Community Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <div className="text-purple-400 mb-4">
            <FaUsers className="text-4xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Forums</h3>
          <p className="text-gray-400">Discuss strategies, share tips, and connect with players</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <div className="text-purple-400 mb-4">
            <FaComments className="text-4xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Groups</h3>
          <p className="text-gray-400">Join game-specific communities and make new friends</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <div className="text-purple-400 mb-4">
            <FaTrophy className="text-4xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Events</h3>
          <p className="text-gray-400">Participate in community tournaments and meetups</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
          <div className="text-purple-400 mb-4">
            <FaNewspaper className="text-4xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">News</h3>
          <p className="text-gray-400">Stay updated with community news and announcements</p>
        </div>
      </div>

      {/* Active Groups */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Active Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeGroups.map(group => (
            <div key={group.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-900 flex items-center justify-center text-purple-400 font-bold mr-4">
                  {group.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold">{group.name}</h3>
                  <p className="text-sm text-gray-400">{group.game}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  <span className="text-purple-400">{group.members}</span> members
                </span>
                <button className="text-sm bg-purple-600 hover:bg-purple-500 px-3 py-1 rounded transition">
                  Join
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Recent Activity</h2>
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          {recentActivities.map(activity => (
            <div key={activity.id} className="p-4 border-b border-gray-700 hover:bg-gray-700 transition">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{activity.title}</h3>
                  <p className="text-sm text-gray-400">in {activity.group}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            </div>
          ))}
          <div className="p-4 text-center">
            <button className="text-purple-400 hover:text-purple-300 transition">
              View all activity →
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}