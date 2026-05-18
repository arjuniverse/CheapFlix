import { motion } from 'framer-motion';
import { TrendingDown, Zap } from 'lucide-react';
import { cheapPlansComparison } from '../data/subscriptions';

export function PricingComparison() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl glass-strong p-6 md:p-8 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-red to-accent-purple">
            <TrendingDown className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-gradient">Cheap Plans</h2>
            <p className="text-sm text-white/50">Compare OTT prices and save with friends</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] text-sm">
            <thead>
              <tr className="text-white/50 border-b border-white/10">
                <th className="text-left py-3 pr-4 font-medium">Platform</th>
                <th className="text-center py-3 px-2 font-medium">Basic</th>
                <th className="text-center py-3 px-2 font-medium">Standard</th>
                <th className="text-center py-3 px-2 font-medium">
                  <span className="inline-flex items-center gap-1 text-accent-cyan">
                    <Zap className="w-3.5 h-3.5" />
                    Best Value
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {cheapPlansComparison.map((row, i) => (
                <motion.tr
                  key={row.platform}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-white/5 hover:bg-white/[0.03] transition-colors"
                >
                  <td className="py-4 pr-4 font-semibold">{row.platform}</td>
                  <td className="text-center py-4 text-white/60">
                    {row.basic > 0 ? `$${row.basic}` : '—'}
                  </td>
                  <td className="text-center py-4">${row.standard}</td>
                  <td className="text-center py-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent-cyan/20 text-accent-cyan font-bold">
                      ${row.premium}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  );
}
