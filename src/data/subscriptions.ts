import type { Subscription } from '../types';

export const subscriptions: Subscription[] = [
  {
    id: 'netflix',
    name: 'Netflix',
    logo: 'N',
    monthlyPrice: 15.49,
    familySharing: true,
    maxUsers: 4,
    color: '#E50914',
    features: ['4K Ultra HD', 'Download on mobile', 'Ad-free streaming', 'Multiple profiles'],
  },
  {
    id: 'prime',
    name: 'Prime Video',
    logo: 'P',
    monthlyPrice: 14.99,
    familySharing: true,
    maxUsers: 3,
    color: '#00A8E1',
    features: ['Prime delivery perks', '4K HDR', 'Offline downloads', 'X-Ray features'],
  },
  {
    id: 'disney',
    name: 'Disney+',
    logo: 'D+',
    monthlyPrice: 13.99,
    familySharing: true,
    maxUsers: 7,
    color: '#113CCF',
    features: ['Disney, Pixar, Marvel', 'Star content', '4K & Dolby Atmos', 'GroupWatch'],
  },
  {
    id: 'spotify',
    name: 'Spotify',
    logo: '♫',
    monthlyPrice: 10.99,
    familySharing: true,
    maxUsers: 6,
    color: '#1DB954',
    features: ['Ad-free music', 'Offline listening', 'High quality audio', 'Duo & Family plans'],
  },
  {
    id: 'youtube',
    name: 'YouTube Premium',
    logo: '▶',
    monthlyPrice: 13.99,
    familySharing: true,
    maxUsers: 5,
    color: '#FF0000',
    features: ['Ad-free YouTube', 'Background play', 'YouTube Music', 'Offline downloads'],
  },
];

export const cheapPlansComparison = [
  { platform: 'Netflix', basic: 6.99, standard: 15.49, premium: 22.99 },
  { platform: 'Prime Video', basic: 8.99, standard: 14.99, premium: 14.99 },
  { platform: 'Disney+', basic: 7.99, standard: 13.99, premium: 13.99 },
  { platform: 'Spotify', basic: 0, standard: 10.99, premium: 16.99 },
  { platform: 'YouTube Premium', basic: 0, standard: 13.99, premium: 22.99 },
];
