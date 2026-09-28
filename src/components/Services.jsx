import { SectionHeading } from './Section'
import { AtomIcon, BlocksIcon, CheckIcon, GradCapIcon } from './icons'

const services = [
  {
    icon: BlocksIcon,
    title: 'Primary School Foundations',
    years: 'Kindergarten – Year 6',
    text: 'Build strong literacy and numeracy skills early, with engaging lessons that make learning feel like play.',
    points: ['Reading & comprehension', 'Writing & spelling', 'Numeracy & NAPLAN prep'],
  },
  {
    icon: AtomIcon,
    title: 'High School Math & Science',
    years: 'Years 7 – 10',
    text: 'Master the core concepts that later years depend on, and develop problem-solving skills that stick.',
    points: ['Mathematics (all streams)', 'General science', 'Study skills & exam technique'],
  },
  {
    icon: GradCapIcon,
    title: 'HSC Exam Preparation',
    years: 'Years 11 – 12',
    text: 'Targeted, syllabus-aligned coaching to help students walk into their HSC exams prepared and calm.',
    points: ['Maths Advanced & Extension', 'Chemistry, Physics & Biology', 'Past-paper practice & feedback'],
  },
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-title"
          eyebrow="Our services"
          title="Tutoring for every stage of school"
          intro="From first sums to final exams, our programs follow the NSW curriculum and grow with your child."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, years, text, points }) => (
            <li
              key={title}
              className="group flex flex-col rounded-2xl border border-harbour-200 bg-white p-8 shadow-sm transition hover:border-navy-700 hover:shadow-xl hover:shadow-harbour-200/60"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-harbour-100 text-navy-800 transition group-hover:bg-navy-900 group-hover:text-white">
                <Icon className="h-7 w-7" />
              </span>
              <p className="mt-6 text-sm font-semibold text-navy-700">{years}</p>
              <h3 className="mt-1 text-xl font-bold text-navy-900">{title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
              <ul className="mt-6 space-y-2 border-t border-harbour-200 pt-6 text-slate-700">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-navy-700" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
