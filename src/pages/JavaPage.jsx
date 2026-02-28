import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { javaFrameworks, javaCategories } from '../data/javaData.js';
import JavaCard, { JAVA_TABS, StepRow } from '../components/JavaCard';

export default function JavaPage() {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [selectedFw, setSelectedFw] = useState(null);
    const [buildTool, setBuildTool] = useState('maven');

    useEffect(() => {
        document.body.style.overflow = selectedFw ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [selectedFw]);

    const filtered = useMemo(() => {
        let list = javaFrameworks;
        if (category !== 'All') {
            list = list.filter((fw) =>
                fw.badge.toLowerCase() === category.toLowerCase()
            );
        }
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
            {/* ── Page header ──────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pt-14 pb-10">
                <Link
                    to="/commands"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-cyan transition-colors mb-8"
                >
                    <span>←</span> Back to Commands
                </Link>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-2">
                    <div>
                        <p className="text-orange-500 font-mono text-xs font-bold tracking-widest uppercase mb-3">
                            Java Ecosystem
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3">
                            Java Frameworks
                        </h1>
                        <p className="text-slate-400 text-lg max-w-2xl">
                            Enterprise and cloud-native Java frameworks. Explore project setups using Gradle or Maven.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 bg-surface-700 border border-surface-500 rounded-xl px-5 py-3 self-start md:self-auto">
                        <span className="font-mono text-orange-500 text-2xl font-black">{javaFrameworks.length}</span>
                        <span className="text-slate-400 text-sm">Frameworks</span>
                    </div>
                </div>
            </section>

            {/* ── Filters ─────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pb-8">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="relative flex-1 max-w-md">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search Java frameworks…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-surface-700 border border-surface-500 rounded-xl
                         text-white placeholder-slate-500 text-sm outline-none
                         focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
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

                    <div className="flex flex-wrap gap-2">
                        {javaCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all duration-150 ${category === cat
                                    ? 'bg-orange-500/10 border-orange-500 text-orange-500'
                                    : 'border-surface-500 text-slate-400 hover:border-slate-400 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Cards grid ──────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <p className="text-xs text-slate-600 font-mono mb-5">
                    Showing <span className="text-orange-500">{filtered.length}</span> of {javaFrameworks.length} Java frameworks
                    {search && ` · matching "${search}"`}
                </p>

                {filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 gap-4 text-center">
                        <span className="text-5xl opacity-30">☕</span>
                        <p className="text-lg font-semibold text-slate-400">No Java frameworks found</p>
                        <p className="text-sm text-slate-600">Try a different keyword or clear the filters</p>
                        <button
                            onClick={() => { setSearch(''); setCategory('All'); }}
                            className="mt-2 px-5 py-2.5 rounded-xl border border-orange-500/40 text-orange-400
                         text-sm font-medium hover:bg-orange-500/10 transition-all"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                        {filtered.map((fw) => (
                            <div key={fw.id} className="break-inside-avoid rounded-2xl">
                                <JavaCard fw={fw} onShowSteps={setSelectedFw} />
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* ── Glass Modal Overlay ─────────── */}
            {selectedFw && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 sm:pt-20"
                    style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(5, 7, 15, 0.75)' }}
                    onClick={() => setSelectedFw(null)}
                >
                    <div
                        className="relative w-full max-w-2xl bg-[#0d1117] border border-surface-500 rounded-3xl
                     shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_0_1px_rgba(249,115,22,0.2)]
                     overflow-hidden flex flex-col max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal header */}
                        <div className="flex justify-between items-start gap-4 p-6 sm:p-8 border-b border-surface-500 bg-surface-900/60 flex-shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl">{selectedFw.icon}</div>
                                <div>
                                    <h2 className="text-2xl font-extrabold text-white mb-1">
                                        {selectedFw.name} Setup
                                    </h2>
                                    <p className="text-slate-400 text-sm">{selectedFw.badge} Java Setup Guide</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedFw(null)}
                                className="p-2 -mr-2 -mt-2 rounded-xl text-slate-400 hover:text-white hover:bg-surface-700 transition-colors flex-shrink-0"
                            >
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="p-6 sm:p-8 overflow-y-auto bg-[#0d1117]">
                            {/* Build tabs */}
                            <div className="flex gap-2 p-1 mb-8 bg-surface-800 border border-surface-500 rounded-xl w-fit">
                                {JAVA_TABS.map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setBuildTool(t.id)}
                                        className={`px-5 py-2 rounded-lg text-sm font-bold font-mono transition-all duration-150 ${buildTool === t.id
                                            ? 'bg-orange-500/20 text-orange-500 border border-orange-500/30'
                                            : 'text-slate-500 hover:text-slate-300 border border-transparent'
                                            }`}
                                    >
                                        {t.label}
                                    </button>
                                ))}
                            </div>

                            {/* Steps */}
                            <div className="flex flex-col gap-6 sm:gap-8 pb-4">
                                {(selectedFw.steps || []).map((s, i) => (
                                    <StepRow key={i} number={i + 1} step={s} buildTool={buildTool} />
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="mt-8 pt-6 border-t border-surface-500/50 flex items-center justify-between">
                                <a
                                    href={selectedFw.docs}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                    Official Docs ↗
                                </a>
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
