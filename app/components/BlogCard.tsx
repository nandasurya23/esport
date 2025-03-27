// app/components/BlogCard.tsx
import Link from 'next/link'
import { BlogPost } from '../types/index'

interface BlogCardProps {
  blog: BlogPost
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <div className="h-48 bg-gradient-to-r from-purple-900 to-blue-800 flex items-center justify-center">
        <div className="text-4xl font-bold text-white opacity-30">
          {blog.title.split(' ')[0]}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-purple-600 rounded-full text-white">
            {blog.category}
          </span>
          <span className="text-sm text-gray-400">
            {new Date(blog.date).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3 hover:text-purple-400 transition">
          <Link href={`/blog/${blog.id}`}>
            {blog.title}
          </Link>
        </h3>
        <p className="text-gray-400 mb-4">{blog.excerpt}</p>
        <Link 
          href={`/blog/${blog.id}`}
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition"
        >
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}