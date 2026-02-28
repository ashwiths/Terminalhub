import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { frameworks, categories } from '../data/frameworks.js';
import FrameworkCard, { PKG_MANAGERS, StepRow } from '../components/FrameworkCard';
import HeartButton from '../components/HeartButton';

export default function FrameworksPage() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [selectedFw, setSelectedFw] = useState(null);
    const [pkg, setPkg] = useState('npm');

    // Prevent scrolling on body when modal is open
    useEffect(() => {
        if (selectedFw) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedFw]);

    const filtered = useMemo(() => {
        let list = frameworks;

        // Category filter
        if (category !== 'All') {
            list = list.filter((fw) =>
                fw.badge.toLowerCase().includes(category.toLowerCase())
            );
        }

        // Search filter
        const q = search.trim().toLowerCase();
        if (q) {
            list = list.filter(
                (fw) =>
                    fw.name.toLowerCase().includes(q) ||
                    fw.description.toLowerCase().includes(q) ||
                    fw.tags.some((t) => t.includes(q)) ||
                    fw.badge.toLowerCase().includes(q)
            );
        }

        return list;
    }, [search, category]);

    return (
        <main className="min-h-screen relative">
            {/* ── Page header ───────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pt-14 pb-10">
                <Link
                    to="/commands"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-cyan transition-colors mb-8"
                >
                    <span>←</span> Back to Commands
                </Link>

                {/* Hero */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-2">
                    <div>
                        <p className="text-brand-cyan font-mono text-xs font-bold tracking-widest uppercase mb-3">
                            Setup Guide
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3">
                            Framework Setup Guide
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl">
                            Every major frontend framework with the exact install command — copy and go.
                        </p>
                    </div>

                    {/* Stats pill */}
                    <div className="flex items-center gap-2 bg-surface-700 border border-surface-500 rounded-xl px-5 py-3 self-start md:self-auto">
                        <span className="font-mono text-brand-cyan text-2xl font-black">{frameworks.length}</span>
                        <span className="text-slate-400 text-sm">Frameworks</span>
                    </div>
                </div>
            </section>

            {/* ── Search + Category filters ─────────────────── */}
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
                            placeholder="Search frameworks…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-surface-700 border border-surface-500 rounded-xl
                         text-white placeholder-slate-500 text-sm outline-none
                         focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 transition-all"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500
                           hover:text-white transition-colors"
                            >
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Category tabs */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all duration-150 ${category === cat
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

            {/* ── Framework grid ────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                {/* Result count */}
                <p className="text-xs text-slate-600 font-mono mb-5">
                    Showing <span className="text-brand-cyan">{filtered.length}</span> of {frameworks.length} frameworks
                    {search && ` · matching "${search}"`}
                </p>

                {filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 gap-4 text-center">
                        <span className="text-5xl opacity-30">🔍</span>
                        <p className="text-lg font-semibold text-slate-400">No frameworks found</p>
                        <p className="text-sm text-slate-600">Try a different keyword or clear the filters</p>
                        <button
                            onClick={() => { setSearch(''); setCategory('All'); }}
                            className="mt-2 px-5 py-2.5 rounded-xl border border-brand-cyan/40 text-brand-cyan
                         text-sm font-medium hover:bg-brand-cyan/10 transition-all"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                        {filtered.map((fw, i) => (
                            <div key={fw.id} className="break-inside-avoid shadow-sm rounded-2xl">
                                <FrameworkCard fw={fw} index={i} onShowSteps={setSelectedFw} />
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* ── Fullscreen Glass Modal Overlay ────────────── */}
            {selectedFw && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 sm:pt-20"
                    style={{
                        backdropFilter: 'blur(12px)',
                        backgroundColor: 'rgba(5, 7, 15, 0.7)'
                    }}
                    onClick={() => setSelectedFw(null)}
                >
                    <div
                        className="relative w-full max-w-2xl bg-[#0d1117] border border-surface-500 rounded-3xl
                     shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_0_1px_rgba(167,139,250,0.1)]
                     overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start gap-4 p-6 sm:p-8 border-b border-surface-500 bg-surface-900/50">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">{selectedFw.icon}</div>
                                <div>
                                    <h2 className="text-2xl font-extrabold text-white mb-1">
                                        {selectedFw.name} Setup
                                    </h2>
                                    <p className="text-slate-400 text-sm">
                                        Complete installation workflow
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedFw(null)}
                                className="p-2 -mr-2 -mt-2 rounded-xl text-slate-400 hover:text-white hover:bg-surface-700 transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar bg-[#0d1117]">
                            <div className="flex gap-2 p-1 mb-8 bg-surface-800 border border-surface-500 rounded-xl w-fit">
                                {PKG_MANAGERS.map((m) => (
                                    <button
                                        key={m}
                                        onClick={() => setPkg(m)}
                                        className={`px-5 py-2 rounded-lg text-sm font-bold font-mono transition-all duration-150 ${pkg === m
                                            ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30'
                                            : 'text-slate-500 hover:text-slate-300 border border-transparent'
                                            }`}
                                    >
                                        {m}
                                    </button>
                                ))}
                            </div>

                            <div className="flex flex-col gap-6 sm:gap-8 pb-4">
                                {(selectedFw.steps || []).map((s, i) => {
                                    const cmd = s[pkg];
                                    return (
                                        <div key={i} className="relative">
                                            <StepRow number={i + 1} step={s} pkg={pkg} />
                                            {cmd !== null && cmd !== undefined && (
                                                <div className="absolute right-0 top-0 mt-[6px]">
                                                    <HeartButton item={{
                                                        id: `frontend-frameworks-${selectedFw.id}-step-${i}-${pkg}`,
                                                        framework: selectedFw.name,
                                                        frameworkIcon: selectedFw.icon,
                                                        section: 'Frontend Frameworks',
                                                        label: s.label,
                                                        command: cmd,
                                                        lang: pkg,
                                                    }} />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-8 pt-6 border-t border-surface-500/50 flex justify-end">
                                <button
                                    onClick={() => setSelectedFw(null)}
                                    className="px-6 py-2.5 rounded-xl border border-surface-500 text-slate-300 hover:text-white hover:bg-surface-700 font-medium text-sm transition-colors"
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
