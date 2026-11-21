import { SectionHeader, Avatar } from './ui.jsx'

const quotes = [
  {
    quote: 'We cut sprint planning from two hours to fifteen minutes. The AI suggestions are scarily close to what we would have picked ourselves.',
    name: 'Sarah Chen', role: 'Head of Product, Northwind', initials: 'SC', color: 'bg-brand',
  },
  {
    quote: 'Flowlane is the first tool our engineers actually like opening. It’s fast, it stays out of the way, and the GitHub sync just works.',
    name: 'Marcus Reid', role: 'Engineering Manager, Orbitly', initials: 'MR', color: 'bg-sky-500',
  },
  {
    quote: 'I send our investors a roadmap link instead of a slide deck now. It’s always current, and I never have to update it by hand.',
    name: 'Priya Nair', role: 'Co-founder & CEO, Kitefly', initials: 'PN', color: 'bg-emerald-500',
  },
]

const Stars = () => (
  <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section id="customers" className="bg-white">
      <div className="mx-auto max-w-[1248px] px-6 py-24 sm:py-28">
        <SectionHeader eyebrow="Customers" title="Loved by teams who ship every week" />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="flex flex-col rounded-2xl border border-line bg-white p-7 transition hover:shadow-lg hover:shadow-brand/5">
              <Stars />
              <blockquote className="mt-5 flex-1 text-[17px] leading-relaxed text-ink">“{q.quote}”</blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                <Avatar initials={q.initials} color={q.color} size="h-10 w-10 text-sm" />
                <span>
                  <span className="block text-[15px] font-semibold text-ink">{q.name}</span>
                  <span className="block text-sm text-subtle">{q.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
