import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Film } from 'lucide-react';
import { movies } from '../data/movies';
import { useMediaFilter } from '../hooks/useMediaFilter';
import { SearchBar } from '../components/SearchBar';
import { GenreFilter } from '../components/GenreFilter';
import { MovieCard } from '../components/MovieCard';
import { LoadingSkeleton } from '../components/LoadingSkeleton';

export function MoviesPage() {
  const [loading, setLoading] = useState(true);
  const { search, setSearch, selectedGenre, setSelectedGenre, filtered } =
    useMediaFilter(movies);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-xl bg-accent-red/20">
            <Film className="w-6 h-6 text-accent-red" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient">Movies</h1>
        </div>
        <p className="text-white/50">
          {filtered.length} titles · Discover and add to your watchlist
        </p>
      </div>

      <div className="space-y-4">
        <SearchBar value={search} onChange={setSearch} placeholder="Search movies..." />
        <GenreFilter selected={selectedGenre} onChange={setSelectedGenre} />
      </div>

      {loading ? (
        <LoadingSkeleton variant="grid" count={10} />
      ) : filtered.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-white/50"
        >
          No movies match your search. Try another genre or keyword.
        </motion.p>
      ) : (
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.3) }}
              className="flex justify-center"
            >
              <MovieCard item={item} size="lg" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
