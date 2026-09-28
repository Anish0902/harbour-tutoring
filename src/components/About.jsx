import { SectionHeading } from './Section'
import { CameraIcon } from './icons'

const values = [
  { title: 'Confidence first', text: 'Students who believe they can learn, do.' },
  { title: 'Small by design', text: 'Small groups mean nobody slips through the cracks.' },
  { title: 'Partners with parents', text: 'Clear, honest updates after every term.' },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-harbour-100 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading id="about-title" align="left" eyebrow="About us" title="Born in Sydney, built on confidence" />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-700">
            <p>
              Harbour Tutoring began in 2014 at a kitchen table in Balmain. Our founder, a high school maths teacher,
              kept meeting bright students who had simply decided they were “bad at school”. A few extra hours of
              patient, one-on-one attention was often all it took to change their minds.
            </p>
            <p>
              Word spread, and what started as a handful of neighbourhood students has grown into a team of
              passionate Sydney teachers. Our mission hasn’t changed: help every student build the skills, habits and
              self-belief to thrive in the classroom and beyond.
            </p>
          </div>
          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-harbour-200">
                <dt className="font-bold text-navy-900">{v.title}</dt>
                <dd className="mt-1 text-sm text-slate-600">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team photo placeholder: replace with <img src="/team.jpg" alt="The Harbour Tutoring team" /> */}
        <figure className="relative">
          <div
            role="img"
            aria-label="Placeholder for a team photo"
            className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-3xl border-2 border-dashed border-navy-700/40 bg-white text-navy-700"
          >
            <CameraIcon className="h-12 w-12" />
            <span className="text-base font-semibold">Team photo coming soon</span>
          </div>
          <figcaption className="absolute -bottom-5 left-6 rounded-xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-lg">
            Our teaching team, Sydney
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
