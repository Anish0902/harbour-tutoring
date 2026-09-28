import { SectionHeading } from './Section'

const values = [
  { title: 'Confidence first', text: 'Students who believe they can learn, do.' },
  { title: 'Small by design', text: 'Small groups mean nobody slips through the cracks.' },
  { title: 'Partners with parents', text: 'Clear, honest updates after every term.' },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-harbour-100 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
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
        </div>

        <dl className="grid gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-1">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-harbour-200">
              <dt className="text-lg font-bold text-navy-900">{v.title}</dt>
              <dd className="mt-1 text-slate-600">{v.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
