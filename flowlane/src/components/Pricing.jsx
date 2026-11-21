import { useState } from 'react'
import { SectionHeader, Button, Check } from './ui.jsx'

const plans = [
  {
    name: 'Free', monthly: 0, desc: 'For small teams getting started.', cta: 'Start free',
    features: ['Up to 5 members', 'Unlimited issues', '2 active boards', 'GitHub & Slack integrations'],
  },
  {
    name: 'Pro', monthly: 12, desc: 'For growing teams that ship every week.', cta: 'Start 14-day trial', popular: true,
    features: ['Everything in Free', 'Unlimited members & boards', 'AI sprint planning', 'Roadmaps & share links', 'Priority support'],
  },
  {
    name: 'Team', monthly: 24, desc: 'For organizations with many teams.', cta: 'Contact sales',
    features: ['Everything in Pro', 'Cross-team roadmaps', 'SSO & SAML', 'Audit logs & permissions', 'Dedicated success manager'],
  },
]

const fmt = (n) => (Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`)

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  return (
    <section id="pricing" className="bg-paper">
      <div className="mx-auto max-w-[1248px] px-6 py-24 sm:py-28">
        <SectionHeader eyebrow="Pricing" title="Simple pricing that grows with you" text="Start free. Upgrade when your team is ready." />

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-white p-1 ring-1 ring-line" role="group" aria-label="Billing period">
            {[['Monthly', false], ['Yearly', true]].map(([label, val]) => (
              <button
                key={label}
                type="button"
                aria-pressed={yearly === val}
                onClick={() => setYearly(val)}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${yearly === val ? 'bg-ink text-white shadow-sm' : 'text-body hover:text-ink'}`}
              >
                {label}
                {val && <span className={`rounded-full px-2 py-0.5 text-xs ${yearly ? 'bg-white/15 text-white' : 'bg-brand-soft text-brand'}`}>Save 20%</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1100px] gap-6 lg:grid-cols-3">
          {plans.map((p) => {
            const price = yearly ? p.monthly * 0.8 : p.monthly
            return (
              <article
                key={p.name}
                className={`flex flex-col rounded-2xl bg-white p-8 transition ${p.popular ? 'shadow-2xl shadow-brand/20 ring-2 ring-brand' : 'ring-1 ring-line hover:ring-gray-300'}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                  {p.popular && <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">Most popular</span>}
                </div>
                <p className="mt-2 text-sm text-body">{p.desc}</p>
                <p className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-5xl font-bold tracking-tight text-ink">{fmt(price)}</span>
                  <span className="text-sm text-subtle">{p.monthly === 0 ? 'forever' : 'per user / month'}</span>
                </p>
                <p className="mt-1 h-5 text-sm text-subtle">
                  {p.monthly > 0 && (yearly ? `Billed yearly at ${fmt(price * 12)} per user` : 'Billed monthly')}
                </p>
                <Button variant={p.popular ? 'primary' : 'secondary'} size="lg" className="mt-7 w-full" href="#top">{p.cta}</Button>
                <ul className="mt-8 space-y-3.5 border-t border-line pt-7">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px] text-body"><Check className="mt-0.5 h-5 w-5 text-brand" />{f}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
