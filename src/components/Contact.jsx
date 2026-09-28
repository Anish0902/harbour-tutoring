import { useState } from 'react'
import { SectionHeading } from './Section'
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from './icons'

const details = [
  {
    icon: MapPinIcon,
    label: 'Visit us',
    value: (
      <>
        Suite 4, 88 Wharf Lane
        <br />
        Sydney NSW 2000
      </>
    ),
  },
  { icon: PhoneIcon, label: 'Call us', value: <a href="tel:+61255501234">02 5550 1234</a> },
  {
    icon: MailIcon,
    label: 'Email us',
    value: <a href="mailto:hello@harbourtutoring.com.au">hello@harbourtutoring.com.au</a>,
  },
  {
    icon: ClockIcon,
    label: 'Opening hours',
    value: (
      <>
        Mon – Fri: 3pm – 8pm
        <br />
        Saturday: 9am – 3pm
      </>
    ),
  },
]

const emptyForm = { name: '', email: '', phone: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (values.phone && !/^[\d\s()+-]{8,}$/.test(values.phone)) errors.phone = 'Please enter a valid phone number.'
  if (!values.message.trim()) errors.message = 'Please tell us a little about how we can help.'
  return errors
}

function Field({ id, label, error, optional, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-navy-900">
        {label} {optional && <span className="font-normal text-slate-500">(optional)</span>}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = (hasError) =>
  `block w-full rounded-xl border bg-white px-4 py-3 text-navy-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:ring-4 ${
    hasError
      ? 'border-red-600 focus:border-red-600 focus:ring-red-100'
      : 'border-harbour-300 focus:border-navy-700 focus:ring-harbour-200'
  }`

export default function Contact() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      // Centre the first invalid field so it isn't hidden behind the sticky navbar.
      const first = document.getElementById(Object.keys(found)[0])
      first?.focus({ preventScroll: true })
      first?.scrollIntoView({ block: 'center', behavior: 'smooth' })
      return
    }

    setStatus('sending')
    try {
      if (import.meta.env.DEV) {
        // No form backend in local dev: pretend the send succeeded.
        await new Promise((r) => setTimeout(r, 600))
      } else {
        // Submits to Netlify Forms (see the hidden form in index.html).
        const body = new URLSearchParams({ 'form-name': 'contact', ...values }).toString()
        const res = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body,
        })
        if (!res.ok) throw new Error(`Form submission failed: ${res.status}`)
      }
      setStatus('sent')
      setValues(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  const describedBy = (name) => (errors[name] ? `${name}-error` : undefined)

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact us"
          title="Book your free assessment"
          intro="Tell us a little about your child and we’ll get back to you within one business day."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <form
            name="contact"
            noValidate
            onSubmit={handleSubmit}
            className="rounded-3xl bg-harbour-50 p-6 ring-1 ring-harbour-200 sm:p-10 lg:col-span-3"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={update}
                  aria-invalid={!!errors.name}
                  aria-describedby={describedBy('name')}
                  className={inputClass(errors.name)}
                  placeholder="Jane Citizen"
                />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={update}
                  aria-invalid={!!errors.email}
                  aria-describedby={describedBy('email')}
                  className={inputClass(errors.email)}
                  placeholder="jane@example.com"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field id="phone" label="Phone" optional error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={update}
                    aria-invalid={!!errors.phone}
                    aria-describedby={describedBy('phone')}
                    className={inputClass(errors.phone)}
                    placeholder="04XX XXX XXX"
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field id="message" label="Message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={values.message}
                    onChange={update}
                    aria-invalid={!!errors.message}
                    aria-describedby={describedBy('message')}
                    className={`${inputClass(errors.message)} resize-y`}
                    placeholder="E.g. My daughter is in Year 9 and would like help with maths…"
                  />
                </Field>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-8 w-full rounded-full bg-navy-900 px-8 py-4 text-base font-bold text-white shadow-lg shadow-navy-900/20 transition hover:bg-navy-700 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-harbour-400 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            <div aria-live="polite" className="mt-4">
              {status === 'sent' && (
                <p className="rounded-xl bg-emerald-50 px-4 py-3 font-medium text-emerald-800 ring-1 ring-emerald-200">
                  Thanks! Your message has been sent. We’ll be in touch within one business day.
                </p>
              )}
              {status === 'error' && (
                <p className="rounded-xl bg-red-50 px-4 py-3 font-medium text-red-800 ring-1 ring-red-200">
                  Sorry, something went wrong. Please try again or call us on 02 5550 1234.
                </p>
              )}
            </div>
          </form>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {details.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex gap-4">
                  <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-navy-900 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-500">{label}</p>
                    <p className="mt-0.5 font-semibold break-words text-navy-900 [&_a]:underline-offset-4 [&_a:hover]:underline">
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Replace this box with a Google Maps <iframe> embed. */}
            <div
              role="img"
              aria-label="Map placeholder"
              className="flex min-h-64 flex-1 items-center justify-center rounded-3xl bg-gray-200 p-6 text-center text-lg font-semibold text-gray-700 ring-1 ring-gray-300"
            >
              Google Maps Embed Here
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
