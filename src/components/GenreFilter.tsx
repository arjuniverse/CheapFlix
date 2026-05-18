import { motion } from 'framer-motion';
import type { Genre } from '../types';
import { allGenres } from '../data/genres';

interface GenreFilterProps {
  selected: Genre | 'All';
  onChange: (genre: Genre | 'All') => void;
}

const options: (Genre | 'All')[] = ['All', ...allGenres];

export function GenreFilter({ selected, onChange }: GenreFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {options.map((genre) => {
        const isActive = selected === genre;
        return (
          <motion.button
            key={genre}
            type="button"
            onClick={() => onChange(genre)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              isActive ? 'text-white' : 'text-white/60 hover:text-white/80'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="genre-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-red/80 to-accent-purple/60 shadow-neon"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{genre}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
