import { useState } from 'react'
import { SectionHeader } from './ui.jsx'

const faqs = [
  { q: 'How does AI sprint planning work?', a: 'Flowlane looks at your backlog priorities, estimates, and your team’s velocity over recent sprints, plus anyone who’s on leave. It then proposes a sprint that fits your real capacity. You can accept it, tweak it, or ignore it — you’re always in control.' },
  { q: 'Can I import from Jira, Trello, or Asana?', a: 'Yes. Our importer brings over issues, labels, assignees, and comments in a few minutes. Most teams are fully moved over in an afternoon.' },
  { q: 'Is there really a free plan?', a: 'Yes. The Free plan is free forever for teams of up to 5 people, with unlimited issues. No credit card required.' },
  { q: 'What happens when I switch to yearly billing?', a: 'You save 20% compared to paying monthly, billed once a year. You can switch between monthly and yearly at any time from your workspace settings.' },
  { q: 'Is my data secure?', a: 'All data is encrypted in transit and at rest, and we run daily backups. The Team plan adds SSO, SAML, and detailed audit logs for larger organizations.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-[1248px] px-6 py-24 sm:py-28">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-[17px] font-semibold text-ink transition-colors hover:text-brand"
                  >
                    {f.q}
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper text-body transition-transform duration-200 ${isOpen ? 'rotate-45 bg-brand-soft text-brand' : ''}`} aria-hidden="true">
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M10 4v12M4 10h12" /></svg>
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="pb-6 pr-12 text-[15px] leading-relaxed text-body">
                    {f.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
