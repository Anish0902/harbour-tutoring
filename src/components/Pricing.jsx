import { SectionHeading } from './Section'
import { CheckIcon } from './icons'

const plans = [
  {
    name: 'Weekly Group Sessions',
    price: 50,
    blurb: 'Learn alongside peers in a small, focused group.',
    features: [
      'Small groups of 4–6 students',
      'Grouped by year level and subject',
      'Weekly homework & practice sets',
      'Termly written progress report',
      'Free initial assessment',
    ],
    featured: false,
  },
  {
    name: '1-on-1 Private Tutoring',
    price: 90,
    blurb: 'Undivided attention and a plan built just for your child.',
    features: [
      'Fully personalised learning plan',
      'Flexible times, in-person or online',
      'Help with school assignments',
      'Progress update after every session',
      'Free initial assessment',
      'Direct messaging with your tutor',
    ],
    featured: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="bg-harbour-100 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="pricing-title"
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          intro="No enrolment fees and no lock-in contracts. Pay per term, and change plans whenever you need to."
        />
        <div className="mx-auto mt-14 grid max-w-4xl items-start gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              aria-labelledby={`plan-${plan.price}`}
              className={`relative flex h-full flex-col rounded-3xl p-8 sm:p-10 ${
                plan.featured
                  ? 'bg-navy-900 text-white shadow-2xl shadow-navy-900/30 ring-1 ring-navy-900'
                  : 'bg-white text-navy-900 shadow-sm ring-1 ring-harbour-200'
              }`}
            >
              {plan.featured && (
                <p className="absolute -top-4 left-8 rounded-full bg-harbour-400 px-4 py-1 text-sm font-bold text-navy-950">
                  Most popular
                </p>
              )}
              <h3 id={`plan-${plan.price}`} className="text-xl font-bold">
                {plan.name}
              </h3>
              <p className={`mt-2 ${plan.featured ? 'text-harbour-200' : 'text-slate-600'}`}>{plan.blurb}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight">${plan.price}</span>
                <span className={`text-lg font-medium ${plan.featured ? 'text-harbour-200' : 'text-slate-600'}`}>
                  /hr
                </span>
              </p>
              <ul className={`mt-8 flex-1 space-y-3 ${plan.featured ? 'text-harbour-50' : 'text-slate-700'}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                        plan.featured ? 'bg-harbour-400 text-navy-950' : 'bg-harbour-100 text-navy-800'
                      }`}
                    >
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 block rounded-full px-6 py-3.5 text-center font-bold transition ${
                  plan.featured
                    ? 'bg-white text-navy-900 hover:bg-harbour-100'
                    : 'bg-navy-900 text-white hover:bg-navy-700'
                }`}
              >
                Get started<span className="sr-only"> with {plan.name}</span>
              </a>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-600">All prices in AUD and include GST.</p>
      </div>
    </section>
  )
}
