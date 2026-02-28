import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCommandsByEcosystem, ecosystems } from '../data/index.js';

const COMMANDS_PER_PAGE = 8;
const ecoIcons = { linux: '🐧', git: '🔀', npm: '📦', react: '⚛️', astro: '🚀', docker: '🐳' };

export default function EcosystemPage() {
    const { ecosystem } = useParams();
    const [page, setPage] = useState(1);
    const [copied, setCopied] = useState(null);

    const eco = ecosystems.find((e) => e.id === ecosystem);
    const allCmds = getCommandsByEcosystem(ecosystem);
    const totalPages = Math.ceil(allCmds.length / COMMANDS_PER_PAGE);
    const pageCmds = allCmds.slice((page - 1) * COMMANDS_PER_PAGE, page * COMMANDS_PER_PAGE);

    if (!eco) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-2xl font-bold text-slate-300">Ecosystem not found</p>
                <Link to="/commands" className="text-brand-cyan underline">← Back to Commands</Link>
            </main>
        );
    }

    const handleCopy = async (cmd) => {
        await navigator.clipboard.writeText(cmd.command);
        setCopied(cmd.id);
        setTimeout(() => setCopied(null), 1500);
    };

    const handlePage = (p) => {
        setPage(p);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main className="min-h-screen">
            {/* Breadcrumb + header */}
            <section className="max-w-5xl mx-auto px-6 pt-12 pb-8">
                <Link
                    to="/commands"
                    className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-brand-cyan transition-colors mb-6"
                >
                    <span>←</span> Back to Ecosystems
                </Link>

                <div className="flex items-center gap-4 mb-2">
                    <div
                        className="w-12 h-12 rounded-xl border flex items-center justify-center text-2xl flex-shrink-0"
                        style={{ borderColor: `${eco.color}44`, background: `${eco.color}12` }}
                    >
                        {ecoIcons[eco.id]}
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                            {eco.label} Commands
                        </h1>
                        <p className="text-slate-500 text-sm mt-1">
                            {allCmds.length} commands &nbsp;·&nbsp; Page {page} of {totalPages}
                        </p>
                    </div>
                </div>
            </section>

            {/* Command cards */}
            <section className="max-w-5xl mx-auto px-6 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pageCmds.map((cmd, i) => (
                        <article
                            key={cmd.id}
                            className="flex flex-col gap-3 p-5 rounded-xl border border-surface-500 bg-surface-700
                         hover:border-brand-cyan/50 hover:-translate-y-0.5 transition-all duration-200"
                            style={{ animationDelay: `${i * 40}ms` }}
                        >
                            {/* Top row */}
                            <div className="flex items-center justify-between gap-2">
                                <span
                                    className="text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border"
                                    style={{
                                        color: eco.color,
                                        borderColor: `${eco.color}44`,
                                        background: `${eco.color}12`,
                                    }}
                                >
                                    {cmd.category}
                                </span>
                                <div className="flex gap-1">
                                    {cmd.platform.map((p) => (
                                        <span key={p} className="text-[10px] font-mono text-slate-500 bg-surface-900 border border-surface-500 rounded px-1.5 py-0.5 capitalize">
                                            {p}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Command block */}
                            <div className="flex items-start gap-2 bg-surface-900 border border-surface-500 rounded-lg px-4 py-3">
                                <span className="text-brand-cyan font-mono text-sm font-bold mt-0.5 select-none opacity-60">$</span>
                                <pre className="font-mono text-brand-cyan text-[13px] leading-relaxed break-all flex-1 whitespace-pre-wrap">
                                    {cmd.command}
                                </pre>
                                <button
                                    onClick={() => handleCopy(cmd)}
                                    className={`flex-shrink-0 p-1.5 rounded border transition-all duration-150 ${copied === cmd.id
                                            ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
                                            : 'border-surface-500 text-slate-500 hover:border-brand-cyan hover:text-brand-cyan'
                                        }`}
                                    aria-label="Copy command"
                                >
                                    {copied === cmd.id ? (
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    ) : (
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="9" y="9" width="13" height="13" rx="2" />
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {/* Description */}
                            <p className="text-slate-400 text-sm leading-relaxed">{cmd.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5">
                                {cmd.tags.slice(0, 5).map((t) => (
                                    <span key={t} className="text-[11px] font-mono text-slate-600">#{t}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Pagination */}
            {totalPages > 1 && (
                <section className="max-w-5xl mx-auto px-6 pb-20 flex items-center justify-center gap-2">
                    {/* Prev */}
                    <button
                        onClick={() => handlePage(Math.max(1, page - 1))}
                        disabled={page === 1}
                        className="page-btn disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        ←
                    </button>

                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <button
                            key={p}
                            onClick={() => handlePage(p)}
                            className={`page-btn ${p === page ? 'active' : ''}`}
                        >
                            {p}
                        </button>
                    ))}

                    {/* Next */}
                    <button
                        onClick={() => handlePage(Math.min(totalPages, page + 1))}
                        disabled={page === totalPages}
                        className="page-btn disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        →
                    </button>
                </section>
            )}
        </main>
    );
}
