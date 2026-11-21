import { Logo } from './ui.jsx'

const cols = [
  { title: 'Product', links: [['Features', '#features'], ['Pricing', '#pricing'], ['Customers', '#customers'], ['Changelog', '#top']] },
  { title: 'Company', links: [['About', '#top'], ['Careers', '#top'], ['Blog', '#top'], ['Contact', '#top']] },
  { title: 'Resources', links: [['Docs', '#top'], ['Help center', '#faq'], ['Privacy', '#top'], ['Terms', '#top']] },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1248px] px-6 py-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-body">The calm planning tool for product teams that would rather ship.</p>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 className="text-sm font-semibold text-ink">{c.title}</h3>
              <ul className="mt-4 space-y-3">
                {c.links.map(([label, href]) => (
                  <li key={label}><a href={href} className="text-[15px] text-body transition-colors hover:text-brand">{label}</a></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Flowlane. All rights reserved.</p>
          <a
            href="https://codemade.studio"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 self-start rounded-full bg-white px-3 py-1.5 font-medium text-body ring-1 ring-line transition hover:text-ink hover:ring-gray-300 sm:self-auto"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Concept project by <span className="font-semibold text-ink">Codemade Studio</span> ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
