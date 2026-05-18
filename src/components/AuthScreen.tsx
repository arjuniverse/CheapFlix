import { motion } from 'framer-motion';
import { Clapperboard, Mail, Lock, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export function AuthScreen() {
  const { setAuthenticated } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-glow" />
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="w-full max-w-md rounded-3xl glass-strong p-8 relative z-10"
      >
        <motion.div
          className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent-red to-accent-purple flex items-center justify-center shadow-neon mb-6"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Clapperboard className="w-8 h-8" />
        </motion.div>

        <h1 className="font-display text-3xl font-bold text-center text-gradient-accent">
          Welcome to CheapFlix
        </h1>
        <p className="text-center text-white/50 text-sm mt-2 mb-8">
          Stream smarter. Split costs. Save more.
        </p>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setAuthenticated(true);
          }}
        >
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="email"
              defaultValue="demo@cheapflix.app"
              placeholder="Email"
              className="w-full pl-12 pr-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-accent-red/40"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="password"
              defaultValue="••••••••"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-accent-red/40"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="btn-primary w-full py-3.5"
          >
            <Sparkles className="w-5 h-5" />
            Enter Demo
          </motion.button>
        </form>

        <p className="text-center text-xs text-white/30 mt-6">
          Mock authentication — no backend required
        </p>
      </motion.div>
    </motion.div>
  );
}
