import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavoritesContext } from '../context/FavoritesContext';

function CopyButton({ text }) {
    const [copied, setCopied] = useState(false);
    const handle = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch { /* noop */ }
    };
    return (
        <button
            onClick={handle}
            aria-label="Copy"
            className={`flex-shrink-0 p-1.5 rounded-lg border transition-all duration-150 ${copied
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                : 'border-surface-500 text-slate-500 hover:border-brand-cyan hover:text-brand-cyan'}`}
        >
            {copied ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
            )}
        </button>
    );
}

const SECTION_COLORS = {
    'AI Frameworks': '#6366f1',
    'Docs & Static Sites': '#25c2a0',
    'Mobile Frameworks': '#06b6d4',
    'Java Frameworks': '#f97316',
    'Python Frameworks': '#3b82f6',
    'Backend Frameworks': '#8b5cf6',
    'Styling Frameworks': '#ec4899',
    'Frontend Frameworks': '#10b981',
};

function FavCard({ fav, onRemove }) {
    const accentColor = SECTION_COLORS[fav.section] || '#00f5c4';

    return (
        <article
            className="group relative flex flex-col gap-3 p-5 rounded-2xl border bg-surface-700 hover:bg-surface-600
                 hover:-translate-y-0.5 transition-all duration-200"
            style={{ boxShadow: `inset 0 0 0 1px #1e2333`, borderColor: '#1e2333' }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `inset 0 0 0 1px ${accentColor}44, 0 8px 24px rgba(0,0,0,0.4)`)}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = `inset 0 0 0 1px #1e2333`)}
        >
            {/* Header row */}
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xl flex-shrink-0">{fav.frameworkIcon}</span>
                    <div className="min-w-0">
                        <p className="font-bold text-white text-sm leading-tight truncate">{fav.framework}</p>
                        <p className="text-[11px] text-slate-500 truncate">{fav.section}</p>
                    </div>
                </div>
                {/* Remove heart */}
                <button
                    onClick={() => onRemove(fav.id)}
                    aria-label="Remove from favorites"
                    title="Remove favorite"
                    className="flex-shrink-0 p-1.5 rounded-lg border border-rose-500/40 bg-rose-500/10 text-rose-400
                         hover:bg-rose-500/25 transition-all duration-150"
                >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                </button>
            </div>

            {/* Step label */}
            <div className="flex items-center gap-2">
                <span
                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md border"
                    style={{ color: accentColor, borderColor: `${accentColor}44`, background: `${accentColor}12` }}
                >
                    {fav.label}
                </span>
                {fav.lang && (
                    <span className="text-[10px] font-mono text-slate-500 bg-surface-800 border border-surface-500 px-2 py-0.5 rounded-md uppercase">
                        {fav.lang}
                    </span>
                )}
            </div>

            {/* Command block */}
            <div className="flex items-start gap-2 bg-[#0d1117] border border-surface-500/70 rounded-xl px-4 py-3">
                <span className="text-slate-600 font-mono text-sm select-none flex-shrink-0 mt-0.5">$</span>
                <code className="font-mono text-brand-cyan text-[12px] flex-1 break-all whitespace-pre-wrap leading-snug">
                    {fav.command}
                </code>
                <CopyButton text={fav.command} />
            </div>

            {/* Saved date */}
            <p className="text-[10px] text-slate-600 text-right">
                Saved {new Date(fav.savedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
            </p>
        </article>
    );
}

export default function FavoritesPage() {
    const { favorites, removeFavorite, clearAll } = useFavoritesContext();
    const [confirmClear, setConfirmClear] = useState(false);

    const sections = [...new Set(favorites.map((f) => f.section))];

    return (
        <main className="min-h-screen">
            <section className="max-w-7xl mx-auto px-6 pt-14 pb-10">
                <Link
                    to="/commands"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-cyan transition-colors mb-8"
                >
                    <span>←</span> Back to Commands
                </Link>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-2">
                    <div>
                        <p className="text-rose-400 font-mono text-xs font-bold tracking-widest uppercase mb-3">
                            My Library
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3 flex items-center gap-3">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5" className="text-rose-500">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                            Favorite Commands
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl">
                            Commands you've hearted across all sections, ready to copy.
                        </p>
                    </div>
                    <div className="flex items-center gap-4 self-start md:self-auto">
                        <div className="flex items-center gap-2 bg-surface-700 border border-surface-500 rounded-xl px-5 py-3">
                            <span className="font-mono text-rose-400 text-2xl font-black">{favorites.length}</span>
                            <span className="text-slate-400 text-sm">Saved</span>
                        </div>
                        {favorites.length > 0 && (
                            confirmClear ? (
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => { clearAll(); setConfirmClear(false); }}
                                        className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-500/20 border border-rose-500/60 text-rose-400 hover:bg-rose-500/30 transition-all"
                                    >
                                        Yes, clear all
                                    </button>
                                    <button
                                        onClick={() => setConfirmClear(false)}
                                        className="px-4 py-2 rounded-xl text-xs font-bold border border-surface-500 text-slate-400 hover:text-white transition-all"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setConfirmClear(true)}
                                    className="px-4 py-2 rounded-xl text-xs font-bold border border-surface-500 text-slate-500 hover:border-rose-400 hover:text-rose-400 transition-all"
                                >
                                    Clear all
                                </button>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                {favorites.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-40 gap-6 text-center">
                        <div className="relative">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-700">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-slate-400 mb-2">No favorites yet</p>
                            <p className="text-sm text-slate-600 max-w-xs mx-auto">
                                Click the ♥ heart button on any command to save it here for quick access.
                            </p>
                        </div>
                        <Link
                            to="/commands"
                            className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                                 bg-brand-cyan text-surface-900 hover:bg-brand-cyan/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-brand-cyan/20"
                        >
                            Browse Commands →
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-10">
                        {sections.map((section) => {
                            const sectionFavs = favorites.filter((f) => f.section === section);
                            const accentColor = SECTION_COLORS[section] || '#00f5c4';
                            return (
                                <div key={section}>
                                    <div className="flex items-center gap-3 mb-5">
                                        <span
                                            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                                            style={{ color: accentColor, borderColor: `${accentColor}44`, background: `${accentColor}12` }}
                                        >
                                            {section}
                                        </span>
                                        <span className="text-slate-600 text-xs font-mono">{sectionFavs.length} saved</span>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                        {sectionFavs.map((fav) => (
                                            <FavCard key={fav.id} fav={fav} onRemove={removeFavorite} />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>
        </main>
    );
}
