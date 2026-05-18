import { motion, AnimatePresence } from 'framer-motion';
import { Bookmark, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { WatchlistCard } from '../components/WatchlistCard';

export function WatchlistPage() {
  const { watchlist, toggleWatchlist, getMediaById } = useApp();
  const items = watchlist
    .map((id) => getMediaById(id))
    .filter((item): item is NonNullable<typeof item> => item != null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-accent-red/20">
              <Bookmark className="w-6 h-6 text-accent-red" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient">
              My Watchlist
            </h1>
          </div>
          <p className="text-white/50">
            {items.length} saved {items.length === 1 ? 'title' : 'titles'}
          </p>
        </div>
        <Link to="/movies" className="btn-glass w-fit">
          <Plus className="w-4 h-4" />
          Browse More
        </Link>
      </div>

      {items.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-24 rounded-3xl glass"
        >
          <Bookmark className="w-16 h-16 mx-auto text-white/20 mb-4" />
          <h2 className="font-display text-xl font-semibold">Your watchlist is empty</h2>
          <p className="text-white/50 mt-2 mb-6">Save movies and series to watch later</p>
          <Link to="/movies" className="btn-primary inline-flex">
            Explore Movies
          </Link>
        </motion.div>
      ) : (
        <motion.div layout className="space-y-4">
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <WatchlistCard
                key={item.id}
                item={item}
                onRemove={toggleWatchlist}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  );
}
