import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { githubSections } from '../data/githubData.js';
import GitCommandCard from '../components/GitCommandCard';

const CATEGORIES = ['All', ...Array.from(new Set(githubSections.map((s) => s.category)))];

export default function GitHubPage() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = useMemo(() => {
        let list = githubSections;

        if (activeCategory !== 'All') {
            list = list.filter((s) => s.category === activeCategory);
        }

        const q = search.trim().toLowerCase();
        if (q) {
            list = list.filter(
                (s) =>
                    s.title.toLowerCase().includes(q) ||
                    s.description.toLowerCase().includes(q) ||
                    s.category.toLowerCase().includes(q) ||
                    s.commands.some((c) => c.code.toLowerCase().includes(q) || c.label.toLowerCase().includes(q))
            );
        }

        return list;
    }, [search, activeCategory]);

    const totalCommands = githubSections.reduce((acc, s) => acc + s.commands.length, 0);

    return (
        <main className="min-h-screen relative">
            {/* ── Page Header ─────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pt-14 pb-10">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-cyan transition-colors mb-8"
                >
                    <span>←</span> Back to Home
                </Link>

                {/* Hero */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-2">
                    <div>
                        <p className="text-brand-cyan font-mono text-xs font-bold tracking-widest uppercase mb-3">
                            Version Control
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3">
                            Git &amp; GitHub Commands Guide
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl">
                            Every essential Git command — from setup to advanced resets — copy-ready for your terminal.
                        </p>
                    </div>

                    {/* Stats pills */}
                    <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center gap-2 bg-surface-700 border border-surface-500 rounded-xl px-5 py-3">
                            <span className="font-mono text-brand-cyan text-2xl font-black">{githubSections.length}</span>
                            <span className="text-slate-400 text-sm">Sections</span>
                        </div>
                        <div className="flex items-center gap-2 bg-surface-700 border border-surface-500 rounded-xl px-5 py-3">
                            <span className="font-mono text-brand-cyan text-2xl font-black">{totalCommands}</span>
                            <span className="text-slate-400 text-sm">Commands</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Search + Filters ──────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pb-8">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    {/* Search */}
                    <div className="relative flex-1 max-w-md">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search commands…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-surface-700 border border-surface-500 rounded-xl
                         text-white placeholder-slate-500 text-sm outline-none
                         focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Category tabs */}
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all duration-150 ${activeCategory === cat
                                    ? 'bg-brand-cyan/10 border-brand-cyan text-brand-cyan'
                                    : 'border-surface-500 text-slate-400 hover:border-slate-400 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Command Cards Grid ───────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                {/* Result count */}
                <p className="text-xs text-slate-600 font-mono mb-5">
                    Showing <span className="text-brand-cyan">{filtered.length}</span> of {githubSections.length} sections
                    {search && ` · matching "${search}"`}
                </p>

                {filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 gap-4 text-center">
                        <span className="text-5xl opacity-30">🔍</span>
                        <p className="text-lg font-semibold text-slate-400">No commands found</p>
                        <p className="text-sm text-slate-600">Try a different keyword or clear the filters</p>
                        <button
                            onClick={() => { setSearch(''); setActiveCategory('All'); }}
                            className="mt-2 px-5 py-2.5 rounded-xl border border-brand-cyan/40 text-brand-cyan
                         text-sm font-medium hover:bg-brand-cyan/10 transition-all"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {filtered.map((section) => (
                            <GitCommandCard key={section.id} section={section} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
