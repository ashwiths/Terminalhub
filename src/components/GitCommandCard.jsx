import { useState } from 'react';

function CopyBtn({ text }) {
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
            aria-label="Copy command"
            title={copied ? 'Copied!' : 'Copy to clipboard'}
            className={`flex-shrink-0 p-1.5 rounded-lg border transition-all duration-150 ${copied
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                : 'border-surface-500 text-slate-500 hover:border-brand-cyan hover:text-brand-cyan'
                }`}
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

function CopyAllBtn({ commands }) {
    const [copied, setCopied] = useState(false);

    const handle = async () => {
        const all = commands.map(c => c.code).join('\n');
        try {
            await navigator.clipboard.writeText(all);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch { /* noop */ }
    };

    return (
        <button
            onClick={handle}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-150 ${copied
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                : 'border-surface-500 text-slate-500 hover:border-brand-cyan hover:text-brand-cyan'
                }`}
        >
            {copied ? (
                <>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Copied!
                </>
            ) : (
                <>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    Copy All
                </>
            )}
        </button>
    );
}

export default function GitCommandCard({ section }) {
    const [open, setOpen] = useState(true);

    return (
        <article
            className="rounded-2xl border border-surface-500 bg-surface-700 overflow-hidden transition-all duration-200 hover:border-opacity-80"
            style={{
                '--section-color': section.color,
                boxShadow: 'inset 0 0 0 1px #1e2333',
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `inset 0 0 0 1px ${section.color}44, 0 8px 32px rgba(0,0,0,0.35)`)
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #1e2333')
            }
        >
            {/* ── Card Header ──────────────────────── */}
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                aria-expanded={open}
            >
                <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl flex-shrink-0">{section.icon}</span>
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-white text-base leading-tight">{section.title}</h3>
                            <span
                                className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border flex-shrink-0"
                                style={{
                                    color: section.color,
                                    borderColor: `${section.color}44`,
                                    background: `${section.color}14`,
                                }}
                            >
                                {section.category}
                            </span>
                        </div>
                        <p className="text-slate-500 text-xs mt-0.5 leading-snug truncate max-w-xs sm:max-w-sm md:max-w-none">
                            {section.description}
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-slate-600 font-mono hidden sm:block">{section.commands.length} cmds</span>
                    <span
                        className={`transition-transform duration-300 text-slate-500 ${open ? 'rotate-180' : 'rotate-0'}`}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </span>
                </div>
            </button>

            {/* ── Collapsible Body ─────────────────── */}
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-6">
                    {/* Copy All button */}
                    <div className="flex justify-end mb-3">
                        <CopyAllBtn commands={section.commands} />
                    </div>

                    {/* Commands list */}
                    <div className="flex flex-col gap-3">
                        {section.commands.map((cmd, i) => (
                            <div key={i} className="flex flex-col gap-1">
                                {/* Label */}
                                <div className="flex items-center gap-2">
                                    <span
                                        className="text-[10px] font-bold uppercase tracking-wider"
                                        style={{ color: section.color }}
                                    >
                                        {cmd.label}
                                    </span>
                                </div>

                                {/* Command block */}
                                <div className="flex items-center gap-2 bg-[#0d1117] border border-surface-500/70 rounded-xl px-4 py-3 group/cmd">
                                    <span className="text-slate-600 font-mono text-sm select-none flex-shrink-0">$</span>
                                    <code className="font-mono text-brand-cyan text-sm leading-snug flex-1 break-all">
                                        {cmd.code}
                                    </code>
                                    <CopyBtn text={cmd.code} />
                                </div>

                                {/* Optional explanation */}
                                {cmd.explanation && (
                                    <p className="text-slate-600 text-xs leading-relaxed pl-1">
                                        {cmd.explanation}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
