export function LogoMark({ className = 'h-7 w-7' }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-lg bg-brand ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round">
        <path d="M6 8h12M6 12h8M6 16h4" />
      </svg>
    </span>
  )
}

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="Flowlane home">
      <LogoMark />
      <span className="text-xl font-semibold tracking-tight text-ink">Flowlane</span>
    </a>
  )
}

export function Button({ href = '#pricing', variant = 'primary', size = 'md', children, className = '' }) {
  const sizes = { md: 'h-10 px-4 text-sm', lg: 'h-12 px-6 text-base' }
  const variants = {
    primary: 'bg-brand text-white shadow-sm shadow-brand/30 hover:bg-brand-dark',
    secondary: 'bg-white text-ink ring-1 ring-line hover:bg-paper hover:ring-gray-300',
    dark: 'bg-ink text-white hover:bg-gray-800',
    light: 'bg-white text-brand hover:bg-brand-soft',
    ghostLight: 'bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20',
  }
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

export function SectionHeader({ eyebrow, title, text, center = true }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className="text-sm font-semibold text-brand">{eyebrow}</p>}
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink sm:text-[2.75rem] sm:leading-[1.1]">{title}</h2>
      {text && <p className="mx-auto mt-4 max-w-2xl text-balance text-lg leading-relaxed text-body">{text}</p>}
    </div>
  )
}

export function Check({ className = 'h-5 w-5 text-brand' }) {
  return (
    <svg viewBox="0 0 20 20" className={`shrink-0 ${className}`} fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  )
}

export function Avatar({ initials, color = 'bg-brand', size = 'h-6 w-6 text-[10px]' }) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-full font-semibold text-white ring-2 ring-white ${color} ${size}`}>
      {initials}
    </span>
  )
}
