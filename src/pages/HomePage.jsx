import { Link } from 'react-router-dom';

const features = [
    { icon: '🔍', title: 'Instant Search', desc: 'Live fuzzy search across all ecosystems by command name, description, or tag.' },
    { icon: '📋', title: 'One-Click Copy', desc: 'Copy any command to your clipboard instantly — no more retyping from memory.' },
    { icon: '🗂️', title: 'Categorized', desc: 'Commands are organized by ecosystem and sub-category for fast browsing.' },
    { icon: '🌐', title: 'Open Source', desc: 'Every command is community-contributed. Add yours in under 2 minutes.' },
];

const ecosystemPills = [
    { label: 'Linux', icon: '🐧', color: '#f59e0b' },
    { label: 'Git', icon: '🔀', color: '#f97316' },
    { label: 'npm', icon: '📦', color: '#ef4444' },
    { label: 'React', icon: '⚛️', color: '#38bdf8' },
    { label: 'Astro', icon: '🚀', color: '#a78bfa' },
    { label: 'Docker', icon: '🐳', color: '#0ea5e9' },
];

export default function HomePage() {
    return (
        <main className="min-h-screen">

            {/* ── Hero ─────────────────────────────────────── */}
            <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
                {/* Glow orb */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full
                        bg-brand-cyan/5 blur-3xl pointer-events-none -z-0" />

                <div className="relative z-10">
                    {/* Badge */}
                    <span className="inline-flex items-center gap-2 border border-brand-cyan/30 bg-brand-cyan/8
                           text-brand-cyan text-xs font-mono font-bold uppercase tracking-widest
                           px-4 py-1.5 rounded-full mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse inline-block" />
                        Open Source · Community Driven
                    </span>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6">
                        Your centralized<br />
                        <span className="bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-cyan
                             bg-clip-text text-transparent animate-pulse">
                            command library
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
                        I built <span className="text-white font-semibold">TerminalHub</span> because I was tired of
                        Googling the same CLI commands every day. It's a single, searchable, copy-paste-ready reference
                        for <strong className="text-slate-300">Linux, Git, npm, React, Astro, Docker</strong> — and growing.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            to="/commands"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm
                         bg-brand-cyan text-surface-900 hover:bg-brand-cyan/90 transition-all duration-150
                         shadow-lg shadow-brand-cyan/20 hover:shadow-brand-cyan/40 hover:-translate-y-0.5"
                        >
                            Browse Commands →
                        </Link>
                        <a
                            href="https://github.com/your-org/terminalhub"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm
                         border border-surface-500 text-slate-300 hover:border-slate-400 hover:text-white
                         transition-all duration-150 hover:-translate-y-0.5"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            Star on GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Ecosystem pills ───────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="flex flex-wrap justify-center gap-3">
                    {ecosystemPills.map((e) => (
                        <Link
                            key={e.label}
                            to={`/commands/${e.label.toLowerCase()}`}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-surface-500
                         bg-surface-700 hover:-translate-y-0.5 transition-all duration-200 group"
                            style={{ '--eco': e.color }}
                        >
                            <span className="text-base">{e.icon}</span>
                            <span
                                className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors"
                                style={{ color: 'inherit' }}
                            >
                                {e.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── Terminal preview ──────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="rounded-2xl border border-surface-500 bg-surface-800 overflow-hidden shadow-card">
                    {/* Terminal chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-500 bg-surface-900">
                        <span className="w-3 h-3 rounded-full bg-red-500/70" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <span className="w-3 h-3 rounded-full bg-green-500/70" />
                        <span className="ml-3 text-xs font-mono text-slate-600">terminalhub ~ bash</span>
                    </div>
                    {/* Lines */}
                    <div className="p-6 font-mono text-sm space-y-2">
                        {[
                            { prompt: '$', cmd: 'git log --oneline --graph --decorate', color: '#00f5c4' },
                            { prompt: '$', cmd: 'docker compose up -d', color: '#0ea5e9' },
                            { prompt: '$', cmd: 'npm audit fix', color: '#ef4444' },
                            { prompt: '$', cmd: 'find . -name "*.js" -type f', color: '#f59e0b' },
                        ].map((line, i) => (
                            <div key={i} className="flex items-start gap-3 opacity-90">
                                <span className="text-brand-cyan/50 select-none">{line.prompt}</span>
                                <span style={{ color: line.color }}>{line.cmd}</span>
                            </div>
                        ))}
                        <div className="flex items-center gap-2 mt-4 opacity-40">
                            <span className="text-brand-cyan/50">$</span>
                            <span className="w-2 h-4 bg-brand-cyan animate-blink inline-block" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Feature grid ─────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pb-28">
                <h2 className="text-2xl md:text-3xl font-extrabold text-center text-white mb-12 tracking-tight">
                    Everything you need, nothing you don't
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="p-6 rounded-xl border border-surface-500 bg-surface-700
                         hover:border-brand-cyan/40 hover:bg-surface-600 transition-all duration-200"
                        >
                            <span className="text-3xl mb-4 block">{f.icon}</span>
                            <h3 className="font-bold text-white mb-2">{f.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pb-28">
                <div className="relative rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 p-12 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 to-brand-purple/5 pointer-events-none" />
                    <p className="text-brand-cyan font-mono text-sm tracking-widest uppercase mb-4">Open Source</p>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                        Add your favorite command
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto mb-8">
                        Edit one JSON file, open a PR. New commands go live for everyone within minutes.
                    </p>
                    <Link
                        to="/favorites"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm
                       bg-brand-cyan text-surface-900 hover:bg-brand-cyan/90 transition-all duration-150
                       shadow-lg shadow-brand-cyan/20 hover:-translate-y-0.5"
                    >
                        ❤ Explore Favorites →
                    </Link>
                </div>
            </section>

        </main>
    );
}
