import { SectionHeading } from './Section'

const faqs = [
  {
    q: 'What happens in the free assessment?',
    a: 'A 30-minute session with one of our teachers to see where your child is up to, followed by a short written summary and a suggested learning plan. There’s no obligation to enrol.',
  },
  {
    q: 'Do you offer online sessions?',
    a: 'Yes. Private tutoring runs in person or online, whichever suits your family.',
  },
  {
    q: 'How are group sessions organised?',
    a: 'Groups have 4–6 students and are matched by year level and subject, so every student works on material pitched at the right level.',
  },
  {
    q: 'Are there lock-in contracts?',
    a: 'No. You pay per term, and you can switch between group and private tutoring, or stop, whenever you need to.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Questions parents often ask"
          intro="Can’t see your question here? Send us a message below and we’ll get back to you."
        />
        <div className="mt-12 space-y-4">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-harbour-200 bg-harbour-50 px-6 py-5 open:bg-white open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-navy-900 [&::-webkit-details-marker]:hidden">
                {q}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-harbour-100 text-xl text-navy-800 transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
