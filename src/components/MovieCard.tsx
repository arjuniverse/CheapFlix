import { motion } from 'framer-motion';
import { Clock, Play, Plus, Star, Check } from 'lucide-react';
import type { MediaItem } from '../types';
import { useApp } from '../context/AppContext';

interface MovieCardProps {
  item: MediaItem;
  size?: 'sm' | 'md' | 'lg';
  showProgress?: boolean;
}

export function MovieCard({ item, size = 'md', showProgress = false }: MovieCardProps) {
  const { toggleWatchlist, isInWatchlist } = useApp();
  const inList = isInWatchlist(item.id);

  const widthClass =
    size === 'sm' ? 'w-32 md:w-36' : size === 'lg' ? 'w-52 md:w-56' : 'w-40 md:w-44';

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08, zIndex: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`group relative ${widthClass} flex-shrink-0 cursor-pointer`}
    >
      <motion.div
        className="relative aspect-[2/3] rounded-xl overflow-hidden glass"
        whileHover={{ boxShadow: '0 0 30px rgba(229, 9, 20, 0.25)' }}
      >
        <img
          src={item.poster}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-3"
        >
          <h3 className="font-display font-bold text-sm line-clamp-2">{item.title}</h3>
          <div className="flex items-center gap-2 mt-1 text-xs text-white/70">
            <span className="flex items-center gap-0.5 text-amber-400">
              <Star className="w-3 h-3 fill-current" />
              {item.rating}
            </span>
            <span>{item.year}</span>
            <span className="flex items-center gap-0.5">
              <Clock className="w-3 h-3" />
              {item.duration}
            </span>
          </div>
          <p className="text-[10px] text-white/50 mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {item.description}
          </p>
          <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button type="button" className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm">
              <Play className="w-3.5 h-3.5 fill-white" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleWatchlist(item.id);
              }}
              className={`p-1.5 rounded-lg backdrop-blur-sm transition-colors ${
                inList ? 'bg-accent-red/80' : 'bg-white/20 hover:bg-white/30'
              }`}
              aria-label={inList ? 'Remove from watchlist' : 'Add to watchlist'}
            >
              {inList ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
            </button>
          </div>
        </motion.div>
        {showProgress && item.progress != null && item.progress > 0 && (
          <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <motion.div
              className="h-full bg-accent-red"
              initial={{ width: 0 }}
              animate={{ width: `${item.progress}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </motion.div>
        )}
      </motion.div>
    </motion.article>
  );
}
