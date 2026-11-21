import { Avatar } from './ui.jsx'

const tags = {
  Design: 'bg-pink-50 text-pink-700',
  Frontend: 'bg-sky-50 text-sky-700',
  Backend: 'bg-amber-50 text-amber-700',
  Bug: 'bg-red-50 text-red-700',
  Growth: 'bg-emerald-50 text-emerald-700',
}

const columns = [
  {
    name: 'Backlog', dot: 'bg-gray-400', cards: [
      { id: 'FL-142', title: 'Onboarding checklist for new workspaces', tag: 'Growth', who: ['PN'], pts: 3 },
      { id: 'FL-139', title: 'Dark mode tokens', tag: 'Design', who: ['MR'], pts: 2 },
    ],
  },
  {
    name: 'In progress', dot: 'bg-brand', cards: [
      { id: 'FL-128', title: 'Sprint capacity forecast', tag: 'Backend', who: ['SC', 'MR'], pts: 5, progress: 60 },
      { id: 'FL-131', title: 'Drag & drop between lanes', tag: 'Frontend', who: ['PN'], pts: 3, progress: 35 },
    ],
  },
  {
    name: 'In review', dot: 'bg-amber-400', cards: [
      { id: 'FL-124', title: 'Fix timezone offset on due dates', tag: 'Bug', who: ['SC'], pts: 1 },
      { id: 'FL-120', title: 'Roadmap share links', tag: 'Frontend', who: ['MR'], pts: 3 },
    ],
  },
  {
    name: 'Done', dot: 'bg-emerald-500', cards: [
      { id: 'FL-117', title: 'Slack notifications v2', tag: 'Backend', who: ['PN'], pts: 2, done: true },
      { id: 'FL-112', title: 'New issue composer', tag: 'Design', who: ['SC'], pts: 3, done: true },
    ],
  },
]

const people = { SC: 'bg-brand', MR: 'bg-sky-500', PN: 'bg-emerald-500' }

function Card({ c }) {
  return (
    <div className="rounded-lg border border-line bg-white p-3 text-left shadow-sm">
      <div className="flex items-center justify-between text-[11px] font-medium text-subtle">
        <span>{c.id}</span>
        <span className="rounded bg-paper px-1.5 py-0.5">{c.pts} pts</span>
      </div>
      <p className={`mt-1.5 text-[13px] font-medium leading-snug ${c.done ? 'text-subtle line-through decoration-gray-300' : 'text-ink'}`}>{c.title}</p>
      {c.progress != null && (
        <div className="mt-2.5 h-1 rounded-full bg-gray-100">
          <div className="h-1 rounded-full bg-brand" style={{ width: `${c.progress}%` }} />
        </div>
      )}
      <div className="mt-2.5 flex items-center justify-between">
        <span className={`rounded-md px-1.5 py-0.5 text-[11px] font-medium ${tags[c.tag]}`}>{c.tag}</span>
        <span className="flex -space-x-1.5">
          {c.who.map((p) => <Avatar key={p} initials={p} color={people[p]} size="h-5 w-5 text-[9px]" />)}
        </span>
      </div>
    </div>
  )
}

const nav = ['Inbox', 'My issues', 'Sprint 24', 'Roadmap', 'Docs']

export default function BoardMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white text-left">
      {/* window bar */}
      <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-300" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-300" />
        <span className="mx-auto rounded-md bg-white px-3 py-1 text-xs text-subtle ring-1 ring-line">app.flowlane.io/northwind/sprint-24</span>
      </div>
      <div className="flex">
        {/* sidebar */}
        <aside className="hidden w-52 shrink-0 border-r border-line bg-paper/60 p-4 lg:block">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-ink text-[11px] font-bold text-white">N</span>
            <span className="text-sm font-semibold">Northwind</span>
          </div>
          <ul className="mt-5 space-y-0.5">
            {nav.map((n) => (
              <li key={n} className={`rounded-md px-2.5 py-1.5 text-[13px] font-medium ${n === 'Sprint 24' ? 'bg-white text-ink shadow-sm ring-1 ring-line' : 'text-body'}`}>{n}</li>
            ))}
          </ul>
          <p className="mt-6 px-2.5 text-[11px] font-semibold uppercase tracking-wider text-subtle">Teams</p>
          <ul className="mt-2 space-y-0.5">
            {[['Product', 'bg-brand'], ['Platform', 'bg-sky-500'], ['Growth', 'bg-emerald-500']].map(([t, c]) => (
              <li key={t} className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] text-body">
                <span className={`h-2 w-2 rounded-full ${c}`} />{t}
              </li>
            ))}
          </ul>
        </aside>
        {/* main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-subtle">Product · Nov 18 – Dec 1</p>
              <p className="text-lg font-semibold text-ink">Sprint 24</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-xs font-medium text-brand sm:inline-flex">
                ✦ AI planned · 34 / 36 pts
              </span>
              <span className="flex -space-x-1.5">
                <Avatar initials="SC" color="bg-brand" />
                <Avatar initials="MR" color="bg-sky-500" />
                <Avatar initials="PN" color="bg-emerald-500" />
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col, i) => (
              <div key={col.name} className={`rounded-lg bg-paper p-2.5 ${i === 0 ? 'hidden sm:block' : i > 1 ? 'hidden lg:block' : ''}`}>
                <div className="mb-2.5 flex items-center gap-2 px-1 text-[13px] font-semibold text-ink">
                  <span className={`h-2 w-2 rounded-full ${col.dot}`} />
                  {col.name}
                  <span className="font-normal text-subtle">{col.cards.length}</span>
                </div>
                <div className="space-y-2">
                  {col.cards.map((c) => <Card key={c.id} c={c} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
