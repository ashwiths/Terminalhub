import { Link } from 'react-router-dom';
import { frameworks } from '../data/frameworks.js';
import { stylingFrameworks } from '../data/styling.js';
import { backendFrameworks } from '../data/backend.js';
import { pythonFrameworks } from '../data/pythonData.js';
import { javaFrameworks } from '../data/javaData.js';

export default function CommandsPage() {
    return (
        <main className="min-h-screen">
            {/* Page header */}
            <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
                <p className="text-brand-cyan font-mono text-sm font-medium mb-3 tracking-widest uppercase">
                    Browse
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                    Framework Library
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl">
                    Explore framework setup guides and CLI commands — all copyable in one click.
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-6 pb-24 flex flex-col gap-5">
                {/* ── Frontend Frameworks card ── */}
                <Link
                    to="/frameworks"
                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl
                     border border-brand-purple/50 bg-brand-purple/5 shadow-[0_0_0_1px_rgba(167,139,250,0.3),0_8px_32px_rgba(0,0,0,0.4)]
                     hover:bg-brand-purple/10 transition-all duration-200"
                >
                    <div className="w-16 h-16 rounded-2xl border border-brand-purple/30 bg-brand-purple/10
                          flex items-center justify-center text-3xl flex-shrink-0">
                        🧩
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h2 className="text-2xl font-extrabold text-white tracking-tight">
                                Frontend Setup Guide
                            </h2>
                            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full
                               border border-brand-purple/40 bg-brand-purple/10 text-brand-purple">
                                Featured
                            </span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                            Every major frontend framework — React, Next.js, Astro, Vue, Nuxt, Svelte, SvelteKit,
                            SolidJS, Qwik, Alpine.js, Lit &amp; Remix — with the exact install command and category labels.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {['React', 'Next.js', 'Astro', 'Vue', 'Svelte', `+${frameworks.length - 5} more`].map((f) => (
                                <span key={f} className="text-[11px] font-mono text-brand-purple/80 bg-brand-purple/10 border border-brand-purple/20 rounded px-2 py-0.5">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center
                          text-brand-purple group-hover:bg-brand-purple group-hover:text-white
                          transition-all duration-200 group-hover:translate-x-1 flex-shrink-0 self-center shadow-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </div>
                </Link>

                {/* ── Styling Frameworks card ── */}
                <Link
                    to="/styling"
                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl
                     border border-pink-500/40 bg-pink-500/5 shadow-[0_0_0_1px_rgba(236,72,153,0.25),0_8px_32px_rgba(0,0,0,0.4)]
                     hover:bg-pink-500/10 transition-all duration-200"
                >
                    <div className="w-16 h-16 rounded-2xl border border-pink-500/30 bg-pink-500/10
                          flex items-center justify-center text-3xl flex-shrink-0">
                        🎨
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h2 className="text-2xl font-extrabold text-white tracking-tight">
                                Styling Frameworks
                            </h2>
                            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full
                               border border-pink-500/40 bg-pink-500/10 text-pink-400">
                                New
                            </span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                            Tailwind CSS, Bootstrap, Material UI, ShadCN UI, Chakra UI, and Ant Design —
                            complete install workflows with config steps and usage examples.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {['Tailwind', 'Bootstrap', 'MUI', 'ShadCN', 'Chakra', `+${stylingFrameworks.length - 5} more`].map((f) => (
                                <span key={f} className="text-[11px] font-mono text-pink-400/80 bg-pink-500/10 border border-pink-500/20 rounded px-2 py-0.5">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center
                          text-pink-400 group-hover:bg-pink-500 group-hover:text-white
                          transition-all duration-200 group-hover:translate-x-1 flex-shrink-0 self-center shadow-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </div>
                </Link>

                {/* ── Backend Frameworks card ── */}
                <Link
                    to="/backend"
                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl
                     border border-emerald-500/40 bg-emerald-500/5 shadow-[0_0_0_1px_rgba(16,185,129,0.25),0_8px_32px_rgba(0,0,0,0.4)]
                     hover:bg-emerald-500/10 transition-all duration-200"
                >
                    <div className="w-16 h-16 rounded-2xl border border-emerald-500/30 bg-emerald-500/10
                          flex items-center justify-center text-3xl flex-shrink-0">
                        🔌
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h2 className="text-2xl font-extrabold text-white tracking-tight">
                                Backend Frameworks
                            </h2>
                            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full
                               border border-emerald-500/40 bg-emerald-500/10 text-emerald-400">
                                Node.js
                            </span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                            Express.js, NestJS, Fastify, AdonisJS, LoopBack, and KeystoneJS —
                            instantly accessible project setup commands for REST APIs, GraphQL, and CMS.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {['Express', 'NestJS', 'Fastify', 'AdonisJS', `+${backendFrameworks.length - 4} more`].map((f) => (
                                <span key={f} className="text-[11px] font-mono text-emerald-400/80 bg-emerald-500/10 border border-emerald-500/20 rounded px-2 py-0.5">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center
                          text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white
                          transition-all duration-200 group-hover:translate-x-1 flex-shrink-0 self-center shadow-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </div>
                </Link>

                {/* ── Python Frameworks card ── */}
                <Link
                    to="/python"
                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl
                     border border-yellow-500/40 bg-yellow-500/5 shadow-[0_0_0_1px_rgba(234,179,8,0.25),0_8px_32px_rgba(0,0,0,0.4)]
                     hover:bg-yellow-500/10 transition-all duration-200"
                >
                    <div className="w-16 h-16 rounded-2xl border border-yellow-500/30 bg-yellow-500/10
                          flex items-center justify-center text-3xl flex-shrink-0">
                        🐍
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h2 className="text-2xl font-extrabold text-white tracking-tight">
                                Python Frameworks
                            </h2>
                            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full
                               border border-yellow-500/40 bg-yellow-500/10 text-yellow-400">
                                Python
                            </span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                            Django, Flask, FastAPI, and Pyramid — complete project creation workflows with virtual environment setup included.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {['Django', 'Flask', 'FastAPI', 'Pyramid'].map((f) => (
                                <span key={f} className="text-[11px] font-mono text-yellow-400/80 bg-yellow-500/10 border border-yellow-500/20 rounded px-2 py-0.5">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center
                          text-yellow-400 group-hover:bg-yellow-500 group-hover:text-white
                          transition-all duration-200 group-hover:translate-x-1 flex-shrink-0 self-center shadow-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </div>
                </Link>

                {/* ── Java Frameworks card ── */}
                <Link
                    to="/java"
                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 rounded-2xl
                     border border-orange-500/40 bg-orange-500/5 shadow-[0_0_0_1px_rgba(249,115,22,0.25),0_8px_32px_rgba(0,0,0,0.4)]
                     hover:bg-orange-500/10 transition-all duration-200"
                >
                    <div className="w-16 h-16 rounded-2xl border border-orange-500/30 bg-orange-500/10
                          flex items-center justify-center text-3xl flex-shrink-0">
                        ☕
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h2 className="text-2xl font-extrabold text-white tracking-tight">
                                Java Frameworks
                            </h2>
                            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full
                               border border-orange-500/40 bg-orange-500/10 text-orange-500">
                                Java Ecosystem
                            </span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                            Spring Boot, Micronaut, and Quarkus — enterprise and cloud-native Java frameworks with setup guides for Gradle and Maven.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {['Spring Boot', 'Micronaut', 'Quarkus'].map((f) => (
                                <span key={f} className="text-[11px] font-mono text-orange-400/80 bg-orange-500/10 border border-orange-500/20 rounded px-2 py-0.5">
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center
                          text-orange-500 group-hover:bg-orange-500 group-hover:text-white
                          transition-all duration-200 group-hover:translate-x-1 flex-shrink-0 self-center shadow-lg">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </div>
                </Link>
            </section>
        </main>
    );
}

