// Shared section heading: small eyebrow label, title and optional intro.
export function SectionHeading({ eyebrow, title, intro, id, align = 'center', dark = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className={`text-sm font-bold uppercase tracking-widest ${dark ? 'text-harbour-300' : 'text-navy-700'}`}>
        {eyebrow}
      </p>
      <h2 id={id} className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg ${dark ? 'text-harbour-100' : 'text-slate-600'}`}>{intro}</p>}
    </div>
  )
}
