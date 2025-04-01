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
    id: number;
    name: string;
    game: string;
    description: string;
    date: string;
    prize: string;
    teams: number;
    maxTeams?: number;
    format: string;
    status: 'upcoming' | 'ongoing' | 'completed';
    winner?: string;
    image?: string;
    registrationDeadline?: string;
    rules?: string;
    platform: 'pc' | 'mobile' | 'console' | 'cross-platform';
    entryFee?: number;
    isRegistered?: boolean;
    organizer?: {
      id: number;
      name: string;
      logo?: string;
    };
    streamLink?: string;
    bracketsLink?: string;
    location?: string;
    schedule?: {
      date: string;
      stage: string;
      matches: string[];
    }[];
    prizeDistribution?: {
      position: number;
      prize: string;
    }[];
  }