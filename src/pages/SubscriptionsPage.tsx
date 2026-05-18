import { motion } from 'framer-motion';
import { CreditCard, PiggyBank } from 'lucide-react';
import { subscriptions } from '../data/subscriptions';
import { activeSubscriptions } from '../data/user';
import { SubscriptionCard } from '../components/SubscriptionCard';
import { PricingComparison } from '../components/PricingComparison';

export function SubscriptionsPage() {
  const totalMonthly = subscriptions
    .filter((s) => activeSubscriptions.includes(s.id))
    .reduce((sum, s) => sum + s.monthlyPrice, 0);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-xl bg-accent-cyan/20">
            <CreditCard className="w-6 h-6 text-accent-cyan" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient">
            Subscriptions
          </h1>
        </div>
        <p className="text-white/50">
          Compare plans, split costs with friends, and track your streaming spend
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-4 p-6 rounded-2xl glass-strong"
      >
        <div className="flex items-center gap-3">
          <PiggyBank className="w-8 h-8 text-emerald-400" />
          <div>
            <p className="text-sm text-white/50">Your active monthly spend</p>
            <p className="text-3xl font-bold">${totalMonthly.toFixed(2)}</p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2 text-sm text-white/50">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
            {activeSubscriptions.length} active
          </span>
          <span>· Split to save up to 70%</span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {subscriptions.map((sub) => (
          <SubscriptionCard
            key={sub.id}
            subscription={sub}
            isActive={activeSubscriptions.includes(sub.id)}
          />
        ))}
      </div>

      <PricingComparison />
    </motion.div>
  );
}
