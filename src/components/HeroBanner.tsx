import { motion } from 'framer-motion';
import { Info, Play, Plus, Star } from 'lucide-react';
import type { MediaItem } from '../types';
import { useApp } from '../context/AppContext';

interface HeroBannerProps {
  featured: MediaItem;
}

export function HeroBanner({ featured }: HeroBannerProps) {
  const { toggleWatchlist, isInWatchlist } = useApp();
  const inList = isInWatchlist(featured.id);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-[55vh] md:h-[70vh] min-h-[420px] rounded-3xl overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={featured.banner}
          alt=""
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-950 via-luxury-950/80 to-transparent" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-luxury-950 via-luxury-950/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 h-full flex flex-col justify-end p-6 md:p-12 max-w-2xl"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-accent-cyan mb-4 w-fit"
        >
          <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
          Featured Tonight
        </motion.span>

        <h1 className="font-display text-4xl md:text-6xl font-extrabold text-gradient leading-tight">
          {featured.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-white/70">
          <span className="flex items-center gap-1 text-amber-400 font-semibold">
            <Star className="w-4 h-4 fill-current" />
            {featured.rating}
          </span>
          <span>{featured.year}</span>
          <span>{featured.duration}</span>
          <span className="px-2 py-0.5 rounded-md bg-white/10">{featured.platform}</span>
        </div>

        <p className="mt-4 text-white/60 text-sm md:text-base line-clamp-3 max-w-xl">
          {featured.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="btn-primary"
          >
            <Play className="w-5 h-5 fill-current" />
            Play Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => toggleWatchlist(featured.id)}
            className="btn-glass"
          >
            <Plus className={`w-5 h-5 ${inList ? 'rotate-45' : ''} transition-transform`} />
            {inList ? 'In Watchlist' : 'My List'}
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} type="button" className="btn-glass">
            <Info className="w-5 h-5" />
            More Info
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-accent-red/20 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </motion.section>
  );
}
