import { NavLink } from 'react-router-dom';
import { useFavoritesContext } from '../context/FavoritesContext';

export default function Navbar() {
    const { favorites } = useFavoritesContext();

    return (
        <nav className="sticky top-0 z-50 border-b border-surface-500 bg-surface-900/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-lg border border-brand-cyan/40 bg-brand-cyan/10
                          flex items-center justify-center">
                        <span className="font-mono text-brand-cyan text-base font-bold leading-none
                             animate-blink">&gt;_</span>
                    </div>
                    <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-brand-cyan
                           bg-clip-text text-transparent">
                        TerminalHub
                    </span>
                </NavLink>

                {/* Links */}
                <div className="flex items-center gap-1">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${isActive
                                ? 'text-white bg-surface-600'
                                : 'text-slate-400 hover:text-white hover:bg-surface-700'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/commands"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${isActive
                                ? 'text-white bg-surface-600'
                                : 'text-slate-400 hover:text-white hover:bg-surface-700'
                            }`
                        }
                    >
                        Frameworks
                    </NavLink>

                    {/* Favorites heart link */}
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            `relative ml-1 flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${isActive
                                ? 'text-rose-400 bg-rose-500/10 border border-rose-500/30'
                                : 'text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/30'
                            }`
                        }
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        Favorites
                        {favorites.length > 0 && (
                            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center
                                 bg-rose-500 text-white text-[10px] font-bold rounded-full px-1 shadow-lg">
                                {favorites.length > 99 ? '99+' : favorites.length}
                            </span>
                        )}
                    </NavLink>

                    <a
                        href="https://github.com/your-org/terminalhub"
                        target="_blank"
                        rel="noreferrer"
                        className="ml-3 px-4 py-2 rounded-lg text-sm font-medium border border-surface-500
                       text-slate-400 hover:border-brand-cyan hover:text-brand-cyan transition-all duration-150
                       flex items-center gap-2"
                    >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    );
}
