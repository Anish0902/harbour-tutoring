import Logo from './Logo'
import { NAV_LINKS } from './Navbar'
import { FacebookIcon, InstagramIcon, LinkedInIcon, YouTubeIcon } from './icons'

const socials = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Instagram', icon: InstagramIcon },
  { label: 'LinkedIn', icon: LinkedInIcon },
  { label: 'YouTube', icon: YouTubeIcon },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-harbour-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="inline-block rounded-lg">
              <Logo light />
              <span className="sr-only">Back to top</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-harbour-200">
              Helping Sydney students build confidence and achieve their best, from primary school to the HSC.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-harbour-100 hover:text-white hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-white">Follow us</p>
            {/* Social placeholders: swap href="#" for your real profile URLs. */}
            <ul className="mt-3 flex gap-3">
              {socials.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={`Harbour Tutoring on ${label}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-harbour-400 hover:text-navy-950"
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 text-sm text-harbour-200 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Harbour Tutoring. All rights reserved.</p>
          <p>ABN 00 000 000 000 · Sydney, NSW</p>
        </div>
      </div>
    </footer>
  )
}
