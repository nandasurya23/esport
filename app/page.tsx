import HeroSection from '@/app/components/HeroSection'
import EventCard from '@/app/components/EventCard'
import TeamCard from '@/app/components/TeamCard'
import BlogCard from '@/app/components/BlogCard'

export default function Home() {
  // Sample data - in a real app, this would come from an API
  const featuredEvents = [
    {
      id: 1,
      title: 'Valorant Championship',
      date: '2023-12-15',
      game: 'Valorant',
      location: 'Online',
      image: '/valorant-event.jpg'
    },
    // More events...
  ]

  const featuredTeams = [
    {
      id: 1,
      name: 'Team Phoenix',
      game: 'Dota 2',
      logo: '/phoenix-logo.png',
      members: 5
    },
    // More teams...
  ]

  const latestBlogs = [
    {
      id: 1,
      title: 'Top 5 Strategies for Competitive Play',
      excerpt: 'Learn the best strategies to dominate your opponents...',
      date: '2023-11-10',
      category: 'Tips & Tricks'
    },
    // More blogs...
  ]

  return (
    <div className="space-y-16 pb-16">
      <HeroSection />
      
      {/* Featured Events */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      
      {/* Featured Teams */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Teams</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredTeams.map(team => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {latestBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Community Says</h2>
          {/* Testimonial cards would go here */}
        </div>
      </section>
    </div>
  )
}