import { Button } from './ui.jsx'

export default function CTA() {
  return (
    <section aria-label="Get started" className="bg-white">
      <div className="mx-auto max-w-[1248px] px-6 pb-24 sm:pb-28">
        <div className="rounded-3xl bg-gradient-to-br from-brand to-[#4f3ee0] px-6 py-16 text-center sm:px-16 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.1]">
            Spend Monday shipping, not planning.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-lg text-white/80">
            Set up your first sprint in under five minutes. Free for teams up to 5.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="light" size="lg" href="#top" className="w-full sm:w-auto">Start free</Button>
            <Button variant="ghostLight" size="lg" href="#faq" className="w-full sm:w-auto">Book a demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
