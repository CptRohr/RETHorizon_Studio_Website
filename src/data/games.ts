export type GameStatus = 'Upcoming' | 'Early Access' | 'Released' | 'In Development'

export interface Game {
  slug: string
  title: string
  tagline: string
  description: string
  coverImage: string
  gallery: string[]
  status: GameStatus
  platforms: string[]
  genres: string[]
  releaseDate?: string
  storeUrl?: string
  trailerUrl?: string
  featured?: boolean
  accent: string
}

export const games: Game[] = [
  {
    slug: 'Rainfall',
    title: 'Project Reth 1',
    tagline: 'upcoming game that we develop using Godot Engine 4.7 (internal name Rainfalls)',
    description: 'This is side scrolling horror game about high school students, except not boring school stuff only. It supposed to be social sim, life sim, and probably emotional damage simulator all at once. You manage daily life, make choices, suffer consequences, and maybe survive long enough to see another day. Very normal teenage behavior, yes.',
    coverImage: '',
    gallery: [],
    status: 'In Development',
    platforms: ['PC', 'mobile'],
    genres: ['Adventure', 'Exploration', 'Social Sim', 'Life Sim', 'Horror'],
    featured: true,
    accent: 'rgba(55, 132, 255, 0.38)',
  },
]
