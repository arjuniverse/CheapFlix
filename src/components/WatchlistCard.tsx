import { motion } from 'framer-motion';
import { Clock, Star, Trash2 } from 'lucide-react';
import type { MediaItem } from '../types';

interface WatchlistCardProps {
  item: MediaItem;
  onRemove: (id: string) => void;
}

export function WatchlistCard({ item, onRemove }: WatchlistCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, scale: 0.95 }}
      className="flex gap-4 p-4 rounded-2xl glass hover:bg-white/[0.06] transition-colors group"
    >
      <div className="relative w-24 md:w-28 aspect-[2/3] rounded-xl overflow-hidden flex-shrink-0">
        <img src={item.poster} alt={item.title} className="w-full h-full object-cover" />
        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase bg-black/60 backdrop-blur-sm">
          {item.type}
        </span>
      </div>
      <motion.div className="flex-1 min-w-0 flex flex-col justify-center">
        <h3 className="font-display font-bold text-lg truncate">{item.title}</h3>
        <p className="text-sm text-white/50 line-clamp-2 mt-1">{item.description}</p>
        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-white/60">
          <span className="flex items-center gap-1 text-amber-400">
            <Star className="w-4 h-4 fill-current" />
            {item.rating}
          </span>
          <span>{item.year}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {item.duration}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs">{item.platform}</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {item.genre.slice(0, 3).map((g) => (
            <span key={g} className="text-[10px] px-2 py-0.5 rounded-full bg-accent-purple/20 text-accent-purple">
              {g}
            </span>
          ))}
        </div>
      </motion.div>
      <motion.button
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onRemove(item.id)}
        className="self-center p-3 rounded-xl text-white/40 hover:text-accent-red hover:bg-accent-red/10 transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Remove from watchlist"
      >
        <Trash2 className="w-5 h-5" />
      </motion.button>
    </motion.div>
  );
}
