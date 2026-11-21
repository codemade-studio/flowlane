const logos = [
  { name: 'Northwind', shape: 'rounded-full' },
  { name: 'Lumen Labs', shape: 'rounded-md' },
  { name: 'Orbitly', shape: 'rounded-full ring-4 ring-gray-300 bg-transparent' },
  { name: 'Kitefly', shape: 'rotate-45 rounded-sm' },
  { name: 'Brightpath', shape: 'rounded-t-full' },
  { name: 'Nova & Co', shape: 'rounded-sm' },
]

export default function Logos() {
  return (
    <section aria-label="Customers" className="border-y border-line bg-white">
      <div className="mx-auto max-w-[1248px] px-6 py-12">
        <p className="text-center text-sm font-medium text-subtle">Trusted by fast-moving product teams</p>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((l) => (
            <li key={l.name} className="flex items-center justify-center gap-2 text-gray-400 transition-colors hover:text-gray-600">
              <span className={`h-4 w-4 bg-gray-300 ${l.shape}`} aria-hidden="true" />
              <span className="text-lg font-semibold tracking-tight">{l.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
