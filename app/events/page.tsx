import EventCard from '../components/EventCard'

export default function EventsPage() {
  // Sample data - in a real app, this would come from an API
  const upcomingEvents = [
    {
      id: 1,
      title: 'Valorant Championship',
      date: '2023-12-15',
      game: 'Valorant',
      location: 'Online',
      image: '/valorant-event.jpg'
    },
    {
        id: 2,
        title: 'Dota Championship',
        date: '2023-12-15',
        game: 'Dota',
        location: 'Online',
        image: '/valorant-event.jpg'
      },
  ]

  const ongoingEvents = [
    {
      id: 101,
      title: 'League of Legends Weekly',
      date: '2023-11-12',
      game: 'League of Legends',
      location: 'Online',
      image: '/lol-event.jpg',
      isLive: true
    },
    // More ongoing events...
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Esports Events</h1>
      
      {/* Ongoing Events */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Ongoing Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ongoingEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      
      {/* Event Filters */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4">Filter Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Game</label>
            <select className="w-full bg-gray-700 rounded px-3 py-2">
              <option>All Games</option>
              <option>Valorant</option>
              <option>League of Legends</option>
              <option>Dota 2</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <select className="w-full bg-gray-700 rounded px-3 py-2">
              <option>All Locations</option>
              <option>Online</option>
              <option>North America</option>
              <option>Europe</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Event Type</label>
            <select className="w-full bg-gray-700 rounded px-3 py-2">
              <option>All Types</option>
              <option>Tournament</option>
              <option>Workshop</option>
              <option>Exhibition</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}