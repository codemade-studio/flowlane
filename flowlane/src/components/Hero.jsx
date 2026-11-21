import { Button } from './ui.jsx'
import BoardMockup from './BoardMockup.jsx'

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-gradient-to-b from-brand-soft/70 via-white to-white">
      <div className="mx-auto max-w-[1248px] px-6 pb-20 pt-16 text-center sm:pt-24">
        <a
          href="#features"
          className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-brand shadow-sm ring-1 ring-brand/20 transition hover:ring-brand/40"
        >
          <span className="rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-white">New</span>
          AI sprint planning <span aria-hidden="true">→</span>
        </a>
        <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.035em] text-ink sm:text-7xl">
          <span className="block sm:inline">Plan less.</span> <span className="block sm:inline">Ship more.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-body sm:text-xl">
          Flowlane turns your backlog into a realistic sprint in seconds, keeps every board in sync, and gives your
          whole team one calm place to see what’s shipping next.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">Start free <span aria-hidden="true">→</span></Button>
          <Button size="lg" variant="secondary" href="#faq" className="w-full sm:w-auto">Book a demo</Button>
        </div>
        <p className="mt-4 text-sm text-subtle">Free for teams up to 5 · No credit card required</p>

        <div className="mx-auto mt-16 max-w-[1100px] rounded-2xl bg-white/60 p-2 shadow-2xl shadow-brand/15 ring-1 ring-line sm:p-3">
          <BoardMockup />
        </div>
      </div>
    </section>
  )
}
