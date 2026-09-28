import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
    ArrowDownRight,
    ArrowUpRight,
    Menu,
    X,
    Plus,
    Minus,
    MoveUpRight,
    Target,
    Mail,
    Monitor,
    Palette,
    Share2
} from 'lucide-react'
import './index.css'

const colors = {
    ink: '#2f4156',
    slate: '#567c8d',
    paper: '#f5efeb',
    mist: '#c8d9e6'
}

const services = [
    {
        n: '01',
        title: 'Website development',
        desc: 'High-converting websites built to look premium, communicate clearly and turn visitors into real opportunities.',
        tags: ['Web design', 'Development', 'Conversion'],
        icon: Monitor
    },

    {
        n: '02',
        title: 'Branding',
        desc: 'Distinctive brand identities that give your business a clear personality, stronger recognition and a consistent visual presence.',
        tags: ['Brand identity', 'Visual design', 'Brand strategy'],
        icon: Palette
    },

    {
        n: '03',
        title: 'SMMA',
        desc: 'End-to-end social media management designed to build your presence, engage your audience and keep your brand consistently visible.',
        tags: ['Social media', 'Content strategy', 'Growth'],
        icon: Share2
    },

    {
        n: '04',
        title: 'Precision Meta advertising',
        desc: 'Paid social without the guesswork. Sharp targeting, compelling creative and data-driven campaigns built to maximize every opportunity.',
        tags: ['Meta strategy', 'Creative testing', 'Performance'],
        icon: Target
    },

    {
        n: '05',
        title: 'Lead generation',
        desc: 'We connect the right offer to the right audience and build focused journeys that turn attention into qualified leads.',
        tags: ['Lead funnels', 'Landing pages', 'Conversion'],
        icon: ArrowUpRight
    }
]

const faqs = [
    [
        'What does Lucid actually do?',
        'Lucid is a focused digital marketing partner offering website development, branding, social media management, precision Meta advertising and lead generation — bringing creative, strategy and performance together.'
    ],
    [
        'Who is Lucid built for?',
        'The model is designed for ambitious brands that want marketing to feel intentional rather than bloated. Think businesses with a clear offer, room to grow and a high bar for creative.'
    ],
    [
        'Do you handle strategy and execution?',
        'Yes. The concept is intentionally end-to-end: positioning and creative thinking inform the execution, while performance data feeds the next creative decision.'
    ],
    [
        'Is Lucid currently taking on clients?',
        'Lucid is currently positioned as a blueprint for the kind of digital partner it aims to become. This concept website is designed to communicate that standard clearly.'
    ],
]

function App() {
    const [openFaq, setOpenFaq] = useState(null)
    const [menu, setMenu] = useState(false)

    return (
        <div className="overflow-x-hidden bg-[#f5efeb] text-[#2f4156]">

            <header className="fixed top-0 z-50 w-full border-b border-[#2f4156]/10 bg-[#f5efeb]/85 backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

                    <a
                        href="#top"
                        className="group flex items-center gap-2 font-mono-lucid text-sm font-medium tracking-[.28em]"
                    >
                        <span className="grid place-items-center border border-[#2f4156] text-[10px] transition group-hover:bg-[#2f4156] group-hover:text-[#f5efeb]"></span>
                        LUCID
                    </a>

                    <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[.14em] md:flex">
                        {['Approach', 'Services', 'About'].map(x => (
                            <a
                                key={x}
                                href={'#' + x.toLowerCase()}
                                className="transition hover:opacity-50"
                            >
                                {x}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="rounded-full bg-[#2f4156] px-5 py-3 text-[#f5efeb] transition hover:-translate-y-0.5 hover:bg-[#567c8d]"
                        >
                            Start a conversation
                            <MoveUpRight className="ml-2 inline h-3.5 w-3.5" />
                        </a>
                    </nav>

                    <button
                        onClick={() => setMenu(!menu)}
                        className="md:hidden"
                        aria-label="Toggle menu"
                    >
                        {menu ? <X /> : <Menu />}
                    </button>

                </div>

                {menu && (
                    <div className="border-t border-[#2f4156]/10 bg-[#f5efeb] px-5 py-6 md:hidden">
                        {['Approach', 'Services', 'About', 'Contact'].map(x => (
                            <a
                                onClick={() => setMenu(false)}
                                key={x}
                                href={'#' + x.toLowerCase()}
                                className="block py-3 text-sm font-semibold uppercase tracking-widest"
                            >
                                {x}
                            </a>
                        ))}
                    </div>
                )}
            </header>

            <main id="top">

                {/* HERO */}
                <section className="grain relative min-h-[92vh] overflow-hidden px-5 pt-32 md:px-8 md:pt-44">
                    <div className="absolute inset-0 grid-bg" />

                    <div className="lucid-orbit absolute right-[-6rem] top-32 hidden h-72 w-72 rounded-full border border-[#2f4156]/15 md:block">
                        <div className="absolute left-1/2 top-0 h-8 w-px bg-[#2f4156]/40" />
                        <div className="absolute bottom-0 left-1/2 h-8 w-px bg-[#2f4156]/40" />
                    </div>

                    <div className="relative mx-auto max-w-7xl">

                        <div className="mb-16 flex items-center justify-between font-mono-lucid text-[10px] uppercase tracking-[.24em] text-[#567c8d] md:mb-24">
                            <span>Bengaluru / India</span>
                            <span>Simple by design. Powerful by result.</span>
                        </div>

                        <div className="hero-enter max-w-6xl">
                            <p className="mb-6 max-w-md text-sm font-medium leading-6 text-[#567c8d]">
                                A focused digital partner for brands that would rather make an impact than make noise.
                            </p>

                            <h1 className="text-balance text-[clamp(4rem,12vw,10.5rem)] font-extrabold leading-[.83] tracking-[-.075em]">
                                Clarity
                                <br />
                                <span className="ml-[12vw]">creates</span>
                                <br />
                                <span className="text-[#567c8d]">growth.</span>
                            </h1>
                        </div>

                        <div className="mt-20 flex flex-col gap-7 border-t border-[#2f4156]/15 pt-6 md:mt-28 md:flex-row md:items-end md:justify-between">
                            <p className="max-w-lg text-sm leading-7 text-[#2f4156]/70">
                                Lucid brings together strong creative, intelligent performance marketing and measurable growth — without the unnecessary layers.
                            </p>

                            <a
                                href="#approach"
                                className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[.16em]"
                            >
                                Explore the approach

                                <span className="grid h-10 w-10 place-items-center rounded-full border border-[#2f4156]/30 transition group-hover:bg-[#2f4156] group-hover:text-[#f5efeb]">
                  <ArrowDownRight className="h-4 w-4" />
                </span>
                            </a>
                        </div>

                    </div>
                </section>

                {/* APPROACH */}
                <section
                    id="approach"
                    className="border-y border-[#2f4156]/10 bg-[#2f4156] px-5 py-24 text-[#f5efeb] md:px-8 md:py-36"
                >
                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-16 md:grid-cols-[.7fr_1.3fr] md:gap-24">

                            <div>
                                <p className="font-mono-lucid text-[10px] uppercase tracking-[.25em] text-[#c8d9e6]">
                                    / 01 — The idea
                                </p>
                            </div>

                            <div>
                                <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-.04em] md:text-7xl">
                                    The internet is loud.
                                    <br />
                                    <span className="text-[#c8d9e6]">
                    Your marketing doesn't have to be.
                  </span>
                                </h2>

                                <p className="mt-10 max-w-2xl text-base leading-8 text-[#f5efeb]/65">
                                    In an industry increasingly defined by noise, complexity and inflated agency models, Lucid was built around a simpler belief: identify what matters, execute it exceptionally well, and let the outcomes speak.
                                </p>
                            </div>

                        </div>

                        <div className="mt-24 grid border-t border-[#f5efeb]/15 md:grid-cols-3">

                            {[
                                ['01', 'Less noise', "We strip away the layers that don't create value."],
                                ['02', 'Better thinking', 'Strategy and creative work together from the start.'],
                                ['03', 'Clear outcomes', 'Every activity has a reason — and a measurable direction.']
                            ].map(([n, t, d]) => (
                                <div
                                    key={n}
                                    className="border-b border-[#f5efeb]/15 p-7 first:pl-0 md:border-b-0 md:border-r md:p-10 md:first:pl-0 md:last:border-r-0"
                                >
                  <span className="font-mono-lucid text-xs text-[#c8d9e6]">
                    {n}
                  </span>

                                    <h3 className="mt-12 text-xl font-semibold">{t}</h3>

                                    <p className="mt-4 max-w-xs text-sm leading-6 text-[#f5efeb]/55">
                                        {d}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section id="services" className="px-5 py-24 md:px-8 md:py-36">

                    <div className="mx-auto max-w-7xl">

                        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                            <div>

                                <p className="font-mono-lucid text-[10px] uppercase tracking-[.25em] text-[#567c8d]">
                                    / 02 — What we do
                                </p>

                                <h2 className="mt-5 text-5xl font-bold tracking-[-.05em] md:text-7xl">
                                    Five services.
                                    <br />
                                    <span className="text-[#567c8d]">
                    One clear goal.
                  </span>
                                </h2>

                            </div>

                            <p className="max-w-sm text-sm leading-7 text-[#2f4156]/60">
                                A deliberately focused service model built to keep strategy, creative and performance close together.
                            </p>

                        </div>

                        {/* ALL 5 SERVICES ARE MAPPED HERE */}
                        <div className="mt-20 border-t border-[#2f4156]/15">

                            {services.map((s) => {

                                const Icon = s.icon

                                return (
                                    <div
                                        key={s.n}
                                        className="service-row group grid gap-8 border-b border-[#2f4156]/15 py-10 md:grid-cols-[.2fr_1fr_.9fr_.5fr] md:items-center"
                                    >

                    <span className="font-mono-lucid text-xs text-[#567c8d]">
                      {s.n}
                    </span>

                                        <div>

                                            <h3 className="text-3xl font-semibold tracking-[-.03em] transition group-hover:text-[#567c8d] md:text-4xl">
                                                {s.title}
                                            </h3>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {s.tags.map(t => (
                                                    <span
                                                        key={t}
                                                        className="rounded-full border border-[#2f4156]/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider"
                                                    >
                            {t}
                          </span>
                                                ))}
                                            </div>

                                        </div>

                                        <p className="max-w-md text-sm leading-7 text-[#2f4156]/60">
                                            {s.desc}
                                        </p>

                                        <div className="hidden justify-end md:flex">

                      <span className="grid h-12 w-12 place-items-center rounded-full border border-[#2f4156]/15 transition group-hover:bg-[#c8d9e6]">
                        <Icon className="h-5 w-5" />
                      </span>

                                        </div>

                                    </div>
                                )
                            })}

                        </div>

                    </div>
                </section>

                {/* ABOUT */}
                <section
                    id="about"
                    className="bg-[#c8d9e6] px-5 py-24 md:px-8 md:py-36"
                >
                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-14 md:grid-cols-[.65fr_1.35fr] md:gap-24">

                            <p className="font-mono-lucid text-[10px] uppercase tracking-[.25em]">
                                / 03 — The story
                            </p>

                            <div>

                                <h2 className="text-balance text-4xl font-bold leading-tight tracking-[-.045em] md:text-7xl">
                                    Lucid started with a question:
                                    <br />
                                    <span className="text-[#567c8d]">
                    what if less could mean more?
                  </span>
                                </h2>

                                <div className="mt-12 grid gap-8 text-sm leading-7 text-[#2f4156]/70 md:grid-cols-2">
                                    <p>
                                        Founded in Bengaluru, Lucid was created with a clear objective: bring greater clarity, precision and intent to digital marketing.
                                    </p>

                                    <p>
                                        As the foundation took shape, the decision was made to pause rather than compromise on the standard. The experience became an intensive exercise in brand strategy, positioning, creative direction and growth thinking.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="mt-24 flex flex-col gap-6 border-t border-[#2f4156]/20 pt-8 md:flex-row md:items-center md:justify-between">
              <span className="font-mono-lucid text-xs uppercase tracking-[.2em]">
                A blueprint for a different kind of partner.
              </span>

                            <div className="flex items-center gap-4 text-sm font-semibold">
                                <span className="h-px w-16 bg-[#2f4156]/30" />
                                Clear thinking. Deliberate execution.
                            </div>
                        </div>

                    </div>
                </section>

                {/* WHY LUCID */}
                <section className="px-5 py-24 md:px-8 md:py-36">

                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-14 md:grid-cols-[.6fr_1.4fr]">

                            <p className="font-mono-lucid text-[10px] uppercase tracking-[.25em] text-[#567c8d]">
                                / 04 — Why Lucid
                            </p>

                            <div>

                                <h2 className="text-4xl font-bold tracking-[-.04em] md:text-6xl">
                                    Good marketing isn't
                                    <br />
                                    <span className="text-[#567c8d]">
                    complicated.
                  </span>
                                </h2>

                                <div className="mt-14 grid gap-10 md:grid-cols-2">

                                    {[
                                        'Creative with a commercial purpose',
                                        'Performance informed by real signals',
                                        'Strategy that stays close to execution',
                                        "A standard that doesn't bend for volume"
                                    ].map((x, i) => (
                                        <div
                                            key={x}
                                            className="flex gap-4 border-t border-[#2f4156]/15 pt-5"
                                        >
                      <span className="font-mono-lucid text-xs text-[#567c8d]">
                        0{i + 1}
                      </span>

                                            <p className="font-semibold leading-6">
                                                {x}
                                            </p>
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>
                </section>

                {/* DIFFERENT STANDARD */}
                <section className="bg-[#567c8d] px-5 py-24 text-[#f5efeb] md:px-8 md:py-32">

                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-16 md:grid-cols-[1fr_.55fr] md:items-end">

                            <div>

                                <p className="font-mono-lucid text-[10px] uppercase tracking-[.25em] text-[#c8d9e6]">
                                    / 05 — A different standard
                                </p>

                                <h2 className="mt-6 text-balance text-5xl font-bold leading-[.95] tracking-[-.055em] md:text-8xl">
                                    Make the
                                    <br />
                                    signal
                                    <br />
                                    <span className="text-[#c8d9e6]">
                    clear.
                  </span>
                                </h2>

                            </div>

                            <div>

                                <p className="text-sm leading-7 text-[#f5efeb]/75">
                                    The Lucid model is built for brands that value sharp thinking, considered creative and growth that can be explained — not just presented.
                                </p>

                                <a
                                    href="#contact"
                                    className="mt-8 inline-flex items-center rounded-full bg-[#f5efeb] px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#2f4156] transition hover:-translate-y-1"
                                >
                                    Let's talk
                                    <ArrowUpRight className="ml-3 h-4 w-4" />
                                </a>

                            </div>

                        </div>

                    </div>
                </section>

                {/* FAQ */}
                <section className="px-5 py-24 md:px-8 md:py-32">

                    <div className="mx-auto max-w-4xl">

                        <p className="font-mono-lucid text-[10px] uppercase tracking-[.25em] text-[#567c8d]">
                            / 06 — Frequently asked
                        </p>

                        <h2 className="mt-5 text-4xl font-bold tracking-[-.04em] md:text-6xl">
                            Questions, without
                            <br />
                            the agency jargon.
                        </h2>

                        <div className="mt-14 border-t border-[#2f4156]/15">

                            {faqs.map(([q, a], i) => {

                                const open = openFaq === i

                                return (
                                    <div key={q} className="border-b border-[#2f4156]/15">

                                        <button
                                            onClick={() => setOpenFaq(open ? null : i)}
                                            className="flex w-full items-center justify-between gap-8 py-7 text-left"
                                        >
                      <span className="text-lg font-semibold">
                        {q}
                      </span>

                                            {open
                                                ? <Minus className="shrink-0" />
                                                : <Plus className="shrink-0" />
                                            }
                                        </button>

                                        <div
                                            className={`faq-answer overflow-hidden ${
                                                open ? 'faq-open' : ''
                                            }`}
                                        >
                                            <p className="max-w-2xl pb-8 text-sm leading-7 text-[#2f4156]/65">
                                                {a}
                                            </p>
                                        </div>

                                    </div>
                                )
                            })}

                        </div>

                    </div>
                </section>

                {/* CONTACT */}
                <section
                    id="contact"
                    className="grain relative overflow-hidden bg-[#2f4156] px-5 py-24 text-[#f5efeb] md:px-8 md:py-36"
                >

                    <div className="absolute inset-0 grid-bg opacity-20" />

                    <div className="relative mx-auto max-w-7xl">

                        <div className="grid gap-16 md:grid-cols-[1.2fr_.8fr] md:items-end">

                            <div>

                                <p className="font-mono-lucid text-[10px] uppercase tracking-[.25em] text-[#c8d9e6]">
                                    / 07 — Contact
                                </p>

                                <h2 className="mt-6 text-balance text-5xl font-bold leading-[.95] tracking-[-.055em] md:text-8xl">
                                    Have something
                                    <br />
                                    <span className="text-[#c8d9e6]">
                    worth building?
                  </span>
                                </h2>

                            </div>

                            <div>

                                <p className="text-sm leading-7 text-[#f5efeb]/65">
                                    Tell us what you're trying to solve, build or grow. We'll keep the first conversation clear and useful.
                                </p>

                                <a
                                    href="mailto:hello@lucid.studio"
                                    className="mt-8 inline-flex items-center gap-3 border-b border-[#c8d9e6]/50 pb-2 text-lg font-semibold"
                                >
                                    hello@lucid.studio
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>

                            </div>

                        </div>

                        <div className="mt-24 flex flex-col justify-between gap-8 border-t border-[#f5efeb]/15 pt-7 md:flex-row md:items-center">

              <span className="font-mono-lucid text-xs uppercase tracking-[.2em] text-[#f5efeb]/50">
                Lucid / Bengaluru / India
              </span>

                            <div className="flex gap-3">

                                <a
                                    aria-label="Instagram"
                                    href="#"
                                    className="grid h-10 w-10 place-items-center rounded-full border border-[#f5efeb]/20 hover:bg-[#f5efeb] hover:text-[#2f4156]"
                                >
                  <span className="text-[11px] font-bold">
                    IG
                  </span>
                                </a>

                                <a
                                    aria-label="LinkedIn"
                                    href="#"
                                    className="grid h-10 w-10 place-items-center rounded-full border border-[#f5efeb]/20 hover:bg-[#f5efeb] hover:text-[#2f4156]"
                                >
                  <span className="text-[10px] font-bold">
                    in
                  </span>
                                </a>

                                <a
                                    aria-label="Email"
                                    href="mailto:hello@lucid.studio"
                                    className="grid h-10 w-10 place-items-center rounded-full border border-[#f5efeb]/20 hover:bg-[#f5efeb] hover:text-[#2f4156]"
                                >
                                    <Mail className="h-4 w-4" />
                                </a>

                            </div>

                        </div>

                    </div>
                </section>

            </main>

            <footer className="flex flex-col justify-between gap-3 bg-[#2f4156] px-5 pb-8 text-[10px] uppercase tracking-[.16em] text-[#f5efeb]/35 md:flex-row md:px-8">

        <span>
          © {new Date().getFullYear()} Lucid
        </span>

                <span>
          Clear thinking. Deliberate execution. Measurable growth.
        </span>

            </footer>

        </div>
    )
}

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)