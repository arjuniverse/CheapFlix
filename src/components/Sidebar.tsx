import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Bookmark,
  Clapperboard,
  Film,
  Home,
  LogOut,
  Tv,
  CreditCard,
  User,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/movies', icon: Film, label: 'Movies' },
  { to: '/series', icon: Tv, label: 'Series' },
  { to: '/subscriptions', icon: CreditCard, label: 'Plans' },
  { to: '/watchlist', icon: Bookmark, label: 'Watchlist' },
  { to: '/profile', icon: User, label: 'Profile' },
];

interface SidebarProps {
  collapsed?: boolean;
  onNavigate?: () => void;
}

export function Sidebar({ collapsed, onNavigate }: SidebarProps) {
  const { setAuthenticated } = useApp();

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={`flex flex-col h-full ${collapsed ? 'items-center' : ''}`}
    >
      <div className={`flex items-center gap-3 mb-8 ${collapsed ? 'justify-center' : 'px-2'}`}>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-red to-accent-purple flex items-center justify-center shadow-neon">
          <Clapperboard className="w-5 h-5" />
        </div>
        {!collapsed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span className="font-display font-bold text-xl text-gradient-accent">CheapFlix</span>
            <p className="text-[10px] text-white/40 uppercase tracking-widest">Premium Demo</p>
          </motion.div>
        )}
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group ${
                isActive
                  ? 'bg-gradient-to-r from-accent-red/20 to-accent-purple/10 text-white shadow-neon'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              } ${collapsed ? 'justify-center' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-accent-red' : ''}`} />
                {!collapsed && <span className="font-medium">{label}</span>}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setAuthenticated(false)}
        className={`flex items-center gap-3 px-3 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-colors mt-4 ${
          collapsed ? 'justify-center w-full' : ''
        }`}
      >
        <LogOut className="w-5 h-5" />
        {!collapsed && <span className="font-medium">Sign Out</span>}
      </button>
    </motion.aside>
  );
}
