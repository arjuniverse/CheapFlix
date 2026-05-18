import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Check, Users, X } from 'lucide-react';
import type { Subscription } from '../types';

interface SubscriptionCardProps {
  subscription: Subscription;
  isActive?: boolean;
}

export function SubscriptionCard({ subscription, isActive }: SubscriptionCardProps) {
  const [showSplit, setShowSplit] = useState(false);
  const [splitUsers, setSplitUsers] = useState(2);
  const splitCost = (subscription.monthlyPrice / splitUsers).toFixed(2);

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        className="relative rounded-2xl glass-strong p-6 overflow-hidden group"
        style={{
          boxShadow: isActive ? `0 0 40px ${subscription.color}33` : undefined,
        }}
      >
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"
          style={{ backgroundColor: subscription.color }}
        />

        {isActive && (
          <span className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Check className="w-3 h-3" />
            Active
          </span>
        )}

        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold mb-4"
          style={{
            background: `linear-gradient(135deg, ${subscription.color}, ${subscription.color}99)`,
          }}
        >
          {subscription.logo}
        </div>

        <h3 className="font-display text-xl font-bold">{subscription.name}</h3>
        <p className="mt-2 text-3xl font-extrabold">
          <span className="text-white/50 text-lg font-normal">$</span>
          {subscription.monthlyPrice}
          <span className="text-sm font-normal text-white/50">/mo</span>
        </p>

        <div className="flex items-center gap-4 mt-4 text-sm text-white/60">
          <span className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            Up to {subscription.maxUsers} users
          </span>
          {subscription.familySharing && (
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs">Family</span>
          )}
        </div>

        <ul className="mt-4 space-y-2">
          {subscription.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-white/50">
              <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          onClick={() => setShowSplit(true)}
          className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all"
          style={{
            background: `linear-gradient(135deg, ${subscription.color}40, ${subscription.color}20)`,
            border: `1px solid ${subscription.color}50`,
          }}
        >
          <Calculator className="w-4 h-4" />
          Split Cost
        </motion.button>
      </motion.article>

      <AnimatePresence>
        {showSplit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowSplit(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl glass-strong p-6 relative"
            >
              <button
                type="button"
                onClick={() => setShowSplit(false)}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="font-display text-2xl font-bold mb-1">
                Split {subscription.name}
              </h3>
              <p className="text-white/50 text-sm mb-6">
                Divide ${subscription.monthlyPrice}/mo between friends
              </p>

              <label className="block text-sm text-white/60 mb-2">
                Number of people sharing
              </label>
              <input
                type="range"
                min={2}
                max={subscription.maxUsers}
                value={splitUsers}
                onChange={(e) => setSplitUsers(Number(e.target.value))}
                className="w-full accent-accent-red"
              />
              <div className="flex justify-between text-xs text-white/40 mt-1">
                <span>2</span>
                <span>{subscription.maxUsers} max</span>
              </div>

              <motion.div
                key={splitUsers}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="mt-6 p-6 rounded-2xl text-center"
                style={{ background: `${subscription.color}22` }}
              >
                <p className="text-white/60 text-sm">Each person pays</p>
                <p className="text-4xl font-extrabold mt-1" style={{ color: subscription.color }}>
                  ${splitCost}
                  <span className="text-lg font-normal text-white/50">/mo</span>
                </p>
                <p className="text-emerald-400 text-sm mt-2">
                  Save ${(subscription.monthlyPrice - Number(splitCost)).toFixed(2)} per person vs solo
                </p>
              </motion.div>

              <button type="button" className="btn-primary w-full mt-6">
                Share with Friends
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
