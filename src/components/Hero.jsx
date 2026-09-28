import { ArrowRightIcon, CheckIcon } from './icons'

const stats = [
  { value: '1,200+', label: 'students supported' },
  { value: '4.9/5', label: 'average parent rating' },
  { value: '12 yrs', label: 'teaching in Sydney' },
]

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-navy-900 text-white">
      {/* Soft harbour-wave backdrop */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-navy-800"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0 80c160-40 320-40 480 0s320 40 480 0 320-40 480 0v80H0z" />
      </svg>
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-navy-700/40 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-harbour-200 ring-1 ring-white/15">
            <span className="h-2 w-2 rounded-full bg-harbour-400" aria-hidden="true" />
            Sydney tutoring · Kindergarten to HSC
          </p>
          <h1 id="hero-title" className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Unlock Your Child's Potential with{' '}
            <span className="text-harbour-300">Harbour Tutoring</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-harbour-100">
            Friendly, qualified teachers who build confidence as well as grades. We meet every student where they
            are, then map out a clear path to where they want to be.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-bold text-navy-900 shadow-lg shadow-navy-950/30 transition hover:bg-harbour-100"
            >
              Book a Free Assessment
              <ArrowRightIcon className="h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold text-white ring-2 ring-white/30 transition hover:bg-white/10"
            >
              Explore our programs
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-harbour-200">
            {['No lock-in contracts', 'In-person & online', 'WWCC-cleared tutors'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-harbour-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-harbour-300">Results that speak</p>
          <dl className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((s) => (
              <div key={s.label} className="border-l-4 border-harbour-400 pl-4">
                <dt className="text-sm text-harbour-200">{s.label}</dt>
                <dd className="text-3xl font-extrabold text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
