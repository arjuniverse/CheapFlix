export type Genre =
  | 'Action'
  | 'Sci-Fi'
  | 'Drama'
  | 'Thriller'
  | 'Comedy'
  | 'Horror'
  | 'Crime'
  | 'Fantasy'
  | 'Adventure'
  | 'Romance';

export type StreamingPlatform =
  | 'Netflix'
  | 'Prime Video'
  | 'Disney+'
  | 'HBO Max'
  | 'Apple TV+'
  | 'Hulu';

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  rating: number;
  year: number;
  genre: Genre[];
  duration: string;
  platform: StreamingPlatform;
  poster: string;
  banner: string;
  type: 'movie' | 'series';
  progress?: number;
  seasons?: number;
}

export interface Subscription {
  id: string;
  name: string;
  logo: string;
  monthlyPrice: number;
  familySharing: boolean;
  maxUsers: number;
  color: string;
  features: string[];
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  memberSince: string;
}

export interface WatchlistItem extends MediaItem {
  addedAt: string;
}
