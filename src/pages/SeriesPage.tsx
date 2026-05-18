import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tv } from 'lucide-react';
import { series } from '../data/series';
import { useMediaFilter } from '../hooks/useMediaFilter';
import { SearchBar } from '../components/SearchBar';
import { GenreFilter } from '../components/GenreFilter';
import { SeriesCard } from '../components/SeriesCard';
import { LoadingSkeleton } from '../components/LoadingSkeleton';

export function SeriesPage() {
  const [loading, setLoading] = useState(true);
  const { search, setSearch, selectedGenre, setSelectedGenre, filtered } =
    useMediaFilter(series);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <motion.div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-xl bg-accent-purple/20">
            <Tv className="w-6 h-6 text-accent-purple" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient">Series</h1>
        </div>
        <p className="text-white/50">
          {filtered.length} shows · Binge-worthy picks curated for you
        </p>
      </motion.div>

      <div className="space-y-4">
        <SearchBar value={search} onChange={setSearch} placeholder="Search series..." />
        <GenreFilter selected={selectedGenre} onChange={setSelectedGenre} />
      </div>

      {loading ? (
        <LoadingSkeleton variant="grid" count={10} />
      ) : filtered.length === 0 ? (
        <p className="text-center py-20 text-white/50">No series found. Adjust your filters.</p>
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
              <SeriesCard item={item} size="lg" showProgress />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
