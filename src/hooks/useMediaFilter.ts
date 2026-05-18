import { useMemo, useState } from 'react';
import type { Genre, MediaItem } from '../types';

export function useMediaFilter(items: MediaItem[]) {
  const [search, setSearch] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<Genre | 'All'>('All');

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        search.trim() === '' ||
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      const matchesGenre =
        selectedGenre === 'All' || item.genre.includes(selectedGenre);
      return matchesSearch && matchesGenre;
    });
  }, [items, search, selectedGenre]);

  return {
    search,
    setSearch,
    selectedGenre,
    setSelectedGenre,
    filtered,
  };
}
