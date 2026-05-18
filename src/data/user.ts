import type { UserProfile } from '../types';
import { movies } from './movies';
import { series } from './series';

export const userProfile: UserProfile = {
  name: 'Alex Rivera',
  email: 'alex.rivera@cheapflix.demo',
  avatar: 'https://i.pravatar.cc/300?img=12',
  memberSince: '2023',
};

export const favoriteMovies = [movies[0], movies[1], movies[7], movies[13]];
export const favoriteSeries = [series[0], series[1], series[5]];

export const activeSubscriptions = ['netflix', 'prime', 'disney'];

export const monthlySpending = [
  { month: 'Jan', amount: 42 },
  { month: 'Feb', amount: 44 },
  { month: 'Mar', amount: 44 },
  { month: 'Apr', amount: 46 },
  { month: 'May', amount: 44 },
  { month: 'Jun', amount: 48 },
];
