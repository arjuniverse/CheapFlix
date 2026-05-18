import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
  variant?: 'card' | 'hero' | 'row' | 'grid';
  count?: number;
}

export function LoadingSkeleton({ variant = 'card', count = 6 }: LoadingSkeletonProps) {
  const shimmer =
    'bg-gradient-to-r from-white/5 via-white/10 to-white/5 bg-[length:200%_100%] animate-shimmer';

  if (variant === 'hero') {
    return (
      <div className={`h-[70vh] min-h-[400px] rounded-3xl ${shimmer}`} />
    );
  }

  if (variant === 'row') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex gap-4 overflow-hidden"
      >
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            className={`w-40 md:w-48 aspect-[2/3] rounded-xl ${shimmer}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </motion.div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: count }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`aspect-[2/3] rounded-xl ${shimmer}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`aspect-[2/3] rounded-xl ${shimmer}`} />
  );
}
