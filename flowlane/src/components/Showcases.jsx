import { Avatar, Check } from './ui.jsx'

function SprintMockup() {
  const bars = [36, 33, 31, 26, 24, 19, 15, 12, 8]
  const suggestions = [
    { t: 'Sprint capacity forecast', p: 5, who: 'SC', c: 'bg-brand' },
    { t: 'Drag & drop between lanes', p: 3, who: 'PN', c: 'bg-emerald-500' },
    { t: 'Roadmap share links', p: 3, who: 'MR', c: 'bg-sky-500' },
  ]
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-xl shadow-brand/10 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-subtle">Sprint 24 · Burndown</p>
          <p className="text-2xl font-bold text-ink">8 pts left</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">On track</span>
      </div>
      <div className="mt-5 flex h-36 items-end gap-2 border-b border-line pb-px" aria-hidden="true">
        {bars.map((b, i) => (
          <div key={i} className="flex h-full flex-1 flex-col justify-end">
            <div className={`rounded-t ${i === bars.length - 1 ? 'bg-brand' : 'bg-brand/25'}`} style={{ height: `${(b / 36) * 100}%` }} />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-subtle"><span>Nov 18</span><span>Today</span><span>Dec 1</span></div>
      <div className="mt-5 rounded-xl bg-brand-soft/60 p-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-brand">✦ Flowlane suggests</p>
        <ul className="mt-3 space-y-2">
          {suggestions.map((s) => (
            <li key={s.t} className="flex items-center gap-3 rounded-lg bg-white px-3 py-2.5 text-sm ring-1 ring-line">
              <Check className="h-4 w-4 text-brand" />
              <span className="flex-1 font-medium text-ink">{s.t}</span>
              <span className="text-xs text-subtle">{s.p} pts</span>
              <Avatar initials={s.who} color={s.c} size="h-6 w-6 text-[10px]" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function RoadmapMockup() {
  const months = ['Oct', 'Nov', 'Dec', 'Jan']
  const rows = [
    { name: 'Mobile app beta', start: 0, span: 2, c: 'bg-brand', pct: 80 },
    { name: 'Public API v2', start: 0, span: 3, c: 'bg-sky-500', pct: 45 },
    { name: 'SSO & audit logs', start: 1, span: 2, c: 'bg-amber-400', pct: 20 },
    { name: 'Templates gallery', start: 2, span: 2, c: 'bg-emerald-500', pct: 0 },
  ]
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-xl shadow-brand/10 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Q4 Roadmap</p>
        <span className="rounded-md bg-paper px-2 py-1 text-xs font-medium text-body ring-1 ring-line">Shared with 12 people</span>
      </div>
      <div className="mt-5 grid grid-cols-4 border-b border-line pb-2 text-xs font-medium text-subtle">
        {months.map((m) => <span key={m}>{m}</span>)}
      </div>
      <ul className="mt-3 space-y-3">
        {rows.map((r) => (
          <li key={r.name} className="grid grid-cols-4 items-center gap-y-1">
            <div
              className={`rounded-lg ${r.c} px-3 py-2 text-xs font-semibold text-white`}
              style={{ gridColumn: `${r.start + 1} / span ${r.span}` }}
            >
              <span className="block truncate">{r.name}</span>
              <span className="mt-1.5 block h-1 rounded-full bg-white/30">
                <span className="block h-1 rounded-full bg-white" style={{ width: `${r.pct}%` }} />
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center gap-3 rounded-xl border border-line p-3">
        <Avatar initials="SC" color="bg-brand" size="h-8 w-8 text-xs" />
        <p className="text-sm text-body"><span className="font-semibold text-ink">Sarah</span> moved <span className="font-medium text-ink">Public API v2</span> to December · 2m ago</p>
      </div>
    </div>
  )
}

const showcases = [
  {
    eyebrow: 'Sprint planning',
    title: 'Your whole sprint, planned in seconds',
    text: 'Flowlane looks at your backlog, your team’s velocity, and who’s out next week — then proposes a sprint you can actually finish.',
    points: ['Capacity-aware suggestions', 'Live burndown and scope alerts', 'One-click carry-over of unfinished work'],
    mock: <SprintMockup />,
  },
  {
    eyebrow: 'Roadmaps',
    title: 'Roadmaps that update themselves',
    text: 'Every epic on your roadmap is linked to real work. When issues move, the timeline moves too — so stakeholders always see the truth.',
    points: ['Share a live link, no login needed', 'Progress rolled up from every issue', 'Comments and changes in one feed'],
    mock: <RoadmapMockup />,
    reverse: true,
  },
]

export default function Showcases() {
  return (
    <section aria-label="Product showcase" className="bg-paper">
      <div className="mx-auto max-w-[1248px] space-y-24 px-6 py-24 sm:space-y-32 sm:py-28">
        {showcases.map((s) => (
          <div key={s.title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className={s.reverse ? 'lg:order-2' : ''}>
              <p className="text-sm font-semibold text-brand">{s.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{s.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-body">{s.text}</p>
              <ul className="mt-7 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[15px] font-medium text-ink"><Check />{p}</li>
                ))}
              </ul>
              <a href="#pricing" className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold text-brand hover:text-brand-dark">
                Try it free <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className={s.reverse ? 'lg:order-1' : ''}>{s.mock}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
