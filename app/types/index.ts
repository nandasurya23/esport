export interface Event {
    id: number
    title: string
    date: string
    game: string
    location: string
    image: string
    isLive?: boolean
  }
  
  export interface Team {
    id: number
    name: string
    game: string
    logo: string
    members: number
  }
  
  export interface BlogPost {
    id: number
    title: string
    excerpt: string
    date: string
    category: string
  }

  export interface Tournament {
    id: number
    name: string
    game: string
    date: string
    prize: string
    teams: number
    format: string
    status: 'upcoming' | 'ongoing' | 'completed'
    winner?: string
    image?: string
  }