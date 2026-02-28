import { useState } from 'react';

export const JAVA_TABS = [
    { id: 'maven', label: 'Maven' },
    { id: 'gradle', label: 'Gradle' }
];

export function CopyButton({ text, size = 'sm' }) {
    const [copied, setCopied] = useState(false);
    const handle = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch { /* noop */ }
    };
    const cls = size === 'xs'
        ? 'p-1 rounded-lg border text-[10px]'
        : 'p-1.5 rounded-lg border';

    return (
        <button
            onClick={handle}
            aria-label="Copy"
            className={`flex-shrink-0 transition-all duration-150 ${cls} ${copied
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

export function StepRow({ number, step, buildTool }) {
    const cmd = step[buildTool];
    const isMultiLine = cmd && cmd.includes('\n');
    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex items-start gap-2 mt-2">
                <span className="text-orange-500 font-mono text-xs font-bold select-none whitespace-nowrap">
                    Step {number}
                </span>
                <span className="text-slate-400 text-sm leading-snug">{step.hint}</span>
            </div>
            <div className={`flex ${isMultiLine ? 'items-start' : 'items-center'} gap-3 bg-[#0d1117] border border-surface-500/70
                      rounded-xl px-4 py-3 group/cmd`}>
                <span className="text-slate-600 font-mono text-sm select-none flex-shrink-0 mt-0.5">$</span>
                <code className={`font-mono text-brand-cyan text-sm flex-1 break-all ${isMultiLine ? 'whitespace-pre-wrap' : 'leading-snug'}`}>
                    {cmd}
                </code>
                <CopyButton text={cmd} size="sm" />
            </div>
        </div>
    );
}

export default function JavaCard({ fw, onShowSteps }) {
    const [copiedMain, setCopiedMain] = useState(false);
    const mainCmd = fw.steps?.[0]?.[`maven`] ?? ''; // Maven init command

    const handleCopyMain = async () => {
        try {
            await navigator.clipboard.writeText(mainCmd);
            setCopiedMain(true);
            setTimeout(() => setCopiedMain(false), 1600);
        } catch { /* noop */ }
    };

    return (
        <article
            className="group relative flex flex-col gap-4 p-6 rounded-2xl border
                 bg-surface-700 hover:bg-surface-600 hover:-translate-y-0.5
                 transition-all duration-200"
            style={{ boxShadow: 'inset 0 0 0 1px #1e2333' }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `inset 0 0 0 1px ${fw.badgeColor}55, 0 8px 32px rgba(0,0,0,0.4)`)
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #1e2333')
            }
        >
            {/* ── Header ───────── */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                    <span className="text-2xl">{fw.icon}</span>
                    <h3 className="font-bold text-white text-lg leading-tight">{fw.name}</h3>
                </div>
                <span
                    className="flex-shrink-0 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1
                     rounded-full border whitespace-nowrap mt-0.5"
                    style={{
                        color: fw.badgeColor === '#000000' || fw.badgeColor === '#ffffff' ? '#e2e8f0' : fw.badgeColor,
                        borderColor: `${fw.badgeColor === '#000000' || fw.badgeColor === '#ffffff' ? '#e2e8f0' : fw.badgeColor}44`,
                        background: `${fw.badgeColor === '#000000' || fw.badgeColor === '#ffffff' ? '#e2e8f0' : fw.badgeColor}12`,
                    }}
                >
                    {fw.badge}
                </span>
            </div>

            {/* ── Description ──── */}
            <p className="text-slate-400 text-sm leading-relaxed">{fw.description}</p>

            {/* ── Quick install ─── */}
            <div className={`flex ${mainCmd.includes('\n') ? 'items-start' : 'items-center'} gap-2 bg-surface-900 border border-surface-500 rounded-xl px-4 py-3`}>
                <span className="text-slate-600 font-mono text-sm select-none flex-shrink-0 mt-0.5">$</span>
                <code className={`font-mono text-brand-cyan text-[12.5px] flex-1 break-all ${mainCmd.includes('\n') ? 'whitespace-pre-wrap' : 'leading-snug'}`}>
                    {mainCmd}
                </code>
                <button
                    onClick={handleCopyMain}
                    aria-label="Copy install command"
                    className={`flex-shrink-0 p-1.5 rounded-lg border transition-all duration-150 ${copiedMain
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                        : 'border-surface-500 text-slate-500 hover:border-orange-500 hover:text-orange-500'
                        }`}
                >
                    {copiedMain ? (
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

            {/* ── Show Steps ────── */}
            <button
                onClick={() => onShowSteps(fw)}
                className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl border
                    border-surface-500 text-slate-400 hover:border-orange-500/40 hover:text-orange-500
                    text-sm font-medium transition-all duration-200"
            >
                <span className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h6v6" />
                        <path d="M10 14L21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                    Show Setup Steps
                </span>
                <span className="text-xs text-slate-500 font-mono">→</span>
            </button>

            {/* ── Docs link ────── */}
            <a
                href={fw.docs}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-400 transition-colors w-fit"
            >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Official Docs ↗
            </a>
        </article>
    );
}
