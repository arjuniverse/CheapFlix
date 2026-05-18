import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { MediaItem } from '../types';
import { MovieCard } from './MovieCard';

interface MediaCarouselProps {
  title: string;
  items: MediaItem[];
  showProgress?: boolean;
}

export function MediaCarousel({ title, items, showProgress }: MediaCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: dir === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="relative group/carousel"
    >
      <motion.div className="flex items-center justify-between mb-4">
        <h2 className="section-title mb-0">{title}</h2>
        <div className="hidden md:flex gap-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
      <div
        ref={scrollRef}
        className="carousel-scroll scrollbar-hide -mx-1 px-1"
      >
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <MovieCard item={item} showProgress={showProgress} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
