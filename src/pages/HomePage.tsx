import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { HeroBanner } from '../components/HeroBanner';
import { MediaCarousel } from '../components/MediaCarousel';
import { PricingComparison } from '../components/PricingComparison';
import { movies } from '../data/movies';
import { series } from '../data/series';

export function HomePage() {
  const featured = movies[0];
  const trending = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 10);
  const popularSeries = [...series].sort((a, b) => b.rating - a.rating).slice(0, 10);
  const continueWatching = [...movies, ...series]
    .filter((m) => m.progress != null && m.progress > 0 && m.progress < 100)
    .slice(0, 8);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-12 md:space-y-16"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 text-sm text-white/50 mb-2"
      >
        <Sparkles className="w-4 h-4 text-accent-cyan" />
        <span>Your premium streaming hub</span>
      </motion.div>

      <HeroBanner featured={featured} />

      {continueWatching.length > 0 && (
        <MediaCarousel title="Continue Watching" items={continueWatching} showProgress />
      )}

      <MediaCarousel title="Trending Movies" items={trending} />
      <MediaCarousel title="Popular Series" items={popularSeries} />

      <PricingComparison />

      <MediaCarousel
        title="Because You Watched Sci-Fi"
        items={movies.filter((m) => m.genre.includes('Sci-Fi')).slice(0, 8)}
      />
    </motion.div>
  );
}
