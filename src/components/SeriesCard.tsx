import { MovieCard } from './MovieCard';
import type { MediaItem } from '../types';

interface SeriesCardProps {
  item: MediaItem;
  size?: 'sm' | 'md' | 'lg';
  showProgress?: boolean;
}

export function SeriesCard(props: SeriesCardProps) {
  return <MovieCard {...props} />;
}
