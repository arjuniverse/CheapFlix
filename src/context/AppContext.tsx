import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from 'react';
import type { MediaItem } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { movies } from '../data/movies';
import { series } from '../data/series';

interface AppContextValue {
  watchlist: string[];
  toggleWatchlist: (id: string) => void;
  isInWatchlist: (id: string) => boolean;
  allMedia: MediaItem[];
  getMediaById: (id: string) => MediaItem | undefined;
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [watchlist, setWatchlist] = useLocalStorage<string[]>('cheapflix-watchlist', [
    'm1',
    'm2',
    's1',
    's5',
  ]);
  const [isAuthenticated, setAuthenticated] = useLocalStorage('cheapflix-auth', true);

  const allMedia = useMemo(() => [...movies, ...series], []);

  const value = useMemo<AppContextValue>(
    () => ({
      watchlist,
      toggleWatchlist: (id) => {
        setWatchlist((prev) =>
          prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
        );
      },
      isInWatchlist: (id) => watchlist.includes(id),
      allMedia,
      getMediaById: (id) => allMedia.find((m) => m.id === id),
      isAuthenticated,
      setAuthenticated,
    }),
    [watchlist, setWatchlist, allMedia, isAuthenticated, setAuthenticated],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
