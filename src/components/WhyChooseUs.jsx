import { SectionHeading } from './Section'
import { CertificateIcon, ChartIcon, PlanIcon } from './icons'

const features = [
  {
    icon: CertificateIcon,
    title: 'Certified Teachers',
    text: 'Every tutor is a qualified, NESA-accredited teacher or subject specialist with a current Working With Children Check.',
  },
  {
    icon: PlanIcon,
    title: 'Personalised Plans',
    text: 'We start with a free assessment, then build a learning plan around your child’s goals, gaps and pace.',
  },
  {
    icon: ChartIcon,
    title: 'Proven Results',
    text: 'Regular progress reports keep you in the loop, and our students consistently lift their marks and confidence.',
  },
]

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="why-title"
          eyebrow="Why choose us"
          title="Support that makes a real difference"
          intro="Great tutoring is about more than homework help. It’s the right teacher, the right plan and steady encouragement."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-2xl border border-harbour-200 bg-harbour-50 p-8 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-harbour-200/60"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-white">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-navy-900">{title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
