export default function SectionHeader({ eyebrow, title, description, align = 'left', tone = 'light' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const isDark = tone === 'dark'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className={`text-sm font-black uppercase tracking-[0.18em] ${isDark ? 'text-orange-300' : 'text-orange-600'}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-black leading-tight sm:text-5xl ${isDark ? 'text-white' : 'text-zinc-950'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>{description}</p>
      ) : null}
    </div>
  )
}
