import { motion } from 'framer-motion';
import { Calendar, Mail, Star } from 'lucide-react';
import {
  userProfile,
  favoriteMovies,
  favoriteSeries,
  monthlySpending,
  activeSubscriptions,
} from '../data/user';
import { subscriptions } from '../data/subscriptions';
import { MovieCard } from '../components/MovieCard';
import { useApp } from '../context/AppContext';

export function ProfilePage() {
  const { watchlist } = useApp();
  const activeSubs = subscriptions.filter((s) => activeSubscriptions.includes(s.id));
  const maxSpend = Math.max(...monthlySpending.map((m) => m.amount));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 rounded-3xl glass-strong"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={userProfile.avatar}
          alt={userProfile.name}
          className="w-28 h-28 rounded-2xl ring-4 ring-accent-red/30 object-cover shadow-neon"
        />
        <div className="text-center md:text-left flex-1">
          <h1 className="font-display text-3xl font-bold text-gradient">{userProfile.name}</h1>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2 text-white/50">
            <Mail className="w-4 h-4" />
            {userProfile.email}
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-1 text-white/40 text-sm">
            <Calendar className="w-4 h-4" />
            Member since {userProfile.memberSince}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <div className="px-4 py-2 rounded-xl glass text-center">
              <p className="text-2xl font-bold">{watchlist.length}</p>
              <p className="text-xs text-white/50">Watchlist</p>
            </div>
            <motion.div className="px-4 py-2 rounded-xl glass text-center">
              <p className="text-2xl font-bold">{activeSubs.length}</p>
              <p className="text-xs text-white/50">Subscriptions</p>
            </motion.div>
            <div className="px-4 py-2 rounded-xl glass text-center">
              <p className="text-2xl font-bold flex items-center justify-center gap-1">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                4.8
              </p>
              <p className="text-xs text-white/50">Taste Score</p>
            </div>
          </div>
        </div>
      </motion.div>

      <section>
        <h2 className="section-title">Active Subscriptions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeSubs.map((sub) => (
            <motion.div
              key={sub.id}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 rounded-2xl glass"
            >
              <motion.div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg"
                style={{ background: `${sub.color}33`, color: sub.color }}
              >
                {sub.logo}
              </motion.div>
              <div>
                <p className="font-semibold">{sub.name}</p>
                <p className="text-sm text-white/50">${sub.monthlyPrice}/mo</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Monthly Spending</h2>
        <div className="p-6 rounded-2xl glass-strong">
          <motion.div className="flex items-end justify-between gap-2 h-40">
            {monthlySpending.map((m, i) => (
              <motion.div
                key={m.month}
                initial={{ height: 0 }}
                animate={{ height: `${(m.amount / maxSpend) * 100}%` }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <div
                  className="w-full max-w-12 rounded-t-lg bg-gradient-to-t from-accent-red to-accent-purple min-h-[8px]"
                  style={{ height: `${(m.amount / maxSpend) * 100}%` }}
                />
                <span className="text-xs text-white/50">{m.month}</span>
                <span className="text-xs font-semibold">${m.amount}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section>
        <h2 className="section-title">Favorite Movies</h2>
        <div className="carousel-scroll scrollbar-hide">
          {favoriteMovies.map((item) => (
            <MovieCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Favorite Series</h2>
        <motion.div className="carousel-scroll scrollbar-hide">
          {favoriteSeries.map((item) => (
            <MovieCard key={item.id} item={item} />
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
