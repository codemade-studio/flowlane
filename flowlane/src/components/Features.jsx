import { SectionHeader } from './ui.jsx'

const Icon = ({ d }) => (
  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  </span>
)

const features = [
  {
    title: 'AI sprint planning',
    text: 'Drop in your backlog and Flowlane suggests a balanced sprint based on your team’s real velocity, priorities, and time off.',
    d: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z M19 17l.7 1.8 1.8.7-1.8.7L19 22l-.7-1.8-1.8-.7 1.8-.7L19 17Z',
  },
  {
    title: 'Boards that stay in sync',
    text: 'Every update shows up instantly for everyone. Drag an issue, and your board, roadmap, and reports update with it.',
    d: 'M4 5h4v14H4z M10 5h4v9h-4z M16 5h4v6h-4z',
  },
  {
    title: 'Roadmaps anyone can read',
    text: 'Turn epics into a clear timeline your CEO, clients, and support team can understand — without a status meeting.',
    d: 'M3 6h10 M7 12h12 M5 18h8 M17 4v4 M21 10v4',
  },
  {
    title: 'Works with your stack',
    text: 'Connect GitHub, Slack, Figma, and 40+ tools. Pull requests close issues automatically, so the board is never out of date.',
    d: 'M9 7 4 12l5 5 M15 7l5 5-5 5',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-[1248px] px-6 py-24 sm:py-28">
        <SectionHeader
          eyebrow="Features"
          title="Everything your team needs to ship, nothing it doesn’t"
          text="Flowlane replaces the spreadsheet, the status meeting, and the three-tab planning ritual with one fast, focused workspace."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article key={f.title} className="rounded-2xl border border-line bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5">
              <Icon d={f.d} />
              <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-body">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
