import BlogCard from '../components/BlogCard'

export default function BlogPage() {
  // Sample data - in a real app, this would come from an API
  const blogPosts = [
    {
      id: 1,
      title: 'Top 5 Strategies for Competitive Play in Valorant',
      excerpt: 'Learn the best strategies to dominate your opponents in Valorant ranked matches...',
      date: '2023-11-15',
      category: 'Tips & Tricks',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'The Evolution of Esports: From Niche to Mainstream',
      excerpt: 'How competitive gaming transformed into a billion-dollar industry...',
      date: '2023-11-10',
      category: 'Analysis',
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'Interview with Team Phoenix: Champions of Dota 2 International',
      excerpt: 'We sat down with the winning team to discuss their journey to victory...',
      date: '2023-11-05',
      category: 'Team Stories',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Upcoming Game Patches: What to Expect in December',
      excerpt: 'A roundup of all the major balance changes coming to popular esports titles...',
      date: '2023-10-28',
      category: 'News',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'How to Build a Successful Esports Team',
      excerpt: 'Essential tips for forming and managing a competitive gaming team...',
      date: '2023-10-20',
      category: 'Guides',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'The Psychology of Esports: Mental Preparation for Tournaments',
      excerpt: 'Professional players share their mental preparation techniques...',
      date: '2023-10-15',
      category: 'Psychology',
      readTime: '11 min read'
    },
  ]

  const categories = [
    { name: 'All', count: 24 },
    { name: 'News', count: 8 },
    { name: 'Tips & Tricks', count: 6 },
    { name: 'Team Stories', count: 5 },
    { name: 'Analysis', count: 3 },
    { name: 'Guides', count: 2 },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Esports Blog</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Latest news, strategies, and insights from the world of competitive gaming
        </p>
      </div>

      {/* Blog Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button 
            key={category.name}
            className={`px-4 py-2 rounded-full ${category.name === 'All' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'} transition`}
          >
            {category.name} <span className="text-xs opacity-70">({category.count})</span>
          </button>
        ))}
      </div>

      {/* Featured Post */}
      <div className="bg-gray-800 rounded-lg overflow-hidden mb-16">
        <div className="md:flex">
          <div className="md:w-2/3 h-64 md:h-auto bg-gradient-to-r from-purple-900 to-blue-800 flex items-center justify-center">
            <div className="text-6xl font-bold text-white opacity-20 p-8">
              {blogPosts[0].title.split(' ')[0]}
            </div>
          </div>
          <div className="p-8 md:w-1/3">
            <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded-full mb-4">
              {blogPosts[0].category}
            </span>
            <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
            <p className="text-gray-400 mb-6">{blogPosts[0].excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{blogPosts[0].readTime}</span>
              <button className="text-purple-400 hover:text-purple-300">
                Read Article →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* All Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map(post => (
          <BlogCard key={post.id} blog={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-16">
        <nav className="flex items-center space-x-2">
          <button className="px-4 py-2 rounded bg-gray-800 text-gray-400 hover:bg-gray-700">
            Previous
          </button>
          <button className="px-4 py-2 rounded bg-purple-600 text-white">
            1
          </button>
          <button className="px-4 py-2 rounded bg-gray-800 text-gray-400 hover:bg-gray-700">
            2
          </button>
          <button className="px-4 py-2 rounded bg-gray-800 text-gray-400 hover:bg-gray-700">
            3
          </button>
          <button className="px-4 py-2 rounded bg-gray-800 text-gray-400 hover:bg-gray-700">
            Next
          </button>
        </nav>
      </div>
    </div>
  )
}