import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Menu, Search } from 'lucide-react';
import { userProfile } from '../data/user';

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-4 right-4 z-40 md:left-[calc(16rem+1.5rem)] md:right-6"
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-2xl glass-strong shadow-glass">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 rounded-xl hover:bg-white/10 transition-colors md:hidden"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        <AnimatePresence>
          {showSearch && (
            <motion.input
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              placeholder="Quick search..."
              className="md:hidden px-3 py-1.5 rounded-lg bg-white/5 text-sm focus:outline-none"
            />
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <button
            type="button"
            className="relative p-2 rounded-xl hover:bg-white/10 transition-colors hidden sm:block"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-accent-red" />
          </button>
          <Link
            to="/profile"
            className="flex items-center gap-3 pl-2 pr-3 py-1.5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <img
              src={userProfile.avatar}
              alt={userProfile.name}
              className="w-8 h-8 rounded-full ring-2 ring-white/20 object-cover"
            />
            <span className="hidden md:block text-sm font-medium">{userProfile.name}</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
