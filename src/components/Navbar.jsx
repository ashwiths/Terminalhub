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
                            `px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150 ${isActive
                                ? 'border-brand-cyan/60 text-brand-cyan bg-brand-cyan/10'
                                : 'text-slate-400 border-transparent hover:text-white hover:bg-surface-700 hover:border-surface-400/40'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/commands"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150 ${isActive
                                ? 'border-brand-cyan/60 text-brand-cyan bg-brand-cyan/10'
                                : 'text-slate-400 border-transparent hover:text-white hover:bg-surface-700 hover:border-surface-400/40'
                            }`
                        }
                    >
                        Frameworks
                    </NavLink>

                    {/* Favorites heart link */}
                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            `relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150 ${isActive
                                ? 'border-rose-400/60 text-rose-400 bg-rose-500/10'
                                : 'text-slate-400 border-transparent hover:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/30'
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

                    <NavLink
                        to="/github"
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-150 ${isActive
                                ? 'border-brand-cyan/60 text-brand-cyan bg-brand-cyan/10'
                                : 'border-transparent text-slate-400 hover:border-brand-cyan hover:text-brand-cyan hover:bg-brand-cyan/5'
                            }`
                        }
                    >
                        {/* Outline GitHub icon */}
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                        GitHub
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
