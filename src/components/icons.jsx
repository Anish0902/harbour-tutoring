// Inline stroke icons (24x24). Decorative by default; pass a title for meaningful use.
function Icon({ children, className = 'h-6 w-6', title }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  )
}

export const CertificateIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="9" r="5" />
    <path d="m9.5 13.5-1.5 7 4-2 4 2-1.5-7" />
    <path d="m10 9 1.4 1.4L14 7.8" />
  </Icon>
)

export const PlanIcon = (p) => (
  <Icon {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3h6v1" />
    <path d="m8.5 11 1.5 1.5 3-3M8.5 16.5h7" />
  </Icon>
)

export const ChartIcon = (p) => (
  <Icon {...p}>
    <path d="M4 20h16" />
    <path d="M6 16v-3M11 16V9M16 16V6" />
    <path d="m5 9 5-4 4 3 5-4" />
  </Icon>
)

export const BlocksIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
    <rect x="8" y="3" width="8" height="8" rx="1.5" />
  </Icon>
)

export const AtomIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="1.6" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
  </Icon>
)

export const GradCapIcon = (p) => (
  <Icon {...p}>
    <path d="m2 9 10-5 10 5-10 5z" />
    <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    <path d="M22 9v6" />
  </Icon>
)

export const CheckIcon = (p) => (
  <Icon {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Icon>
)

export const MapPinIcon = (p) => (
  <Icon {...p}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Icon>
)

export const PhoneIcon = (p) => (
  <Icon {...p}>
    <path d="M5 4h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 6.3 6.3l1.4-2.2L20 15.5V19a1.5 1.5 0 0 1-1.6 1.5C10.6 20 4 13.4 3.5 5.6A1.5 1.5 0 0 1 5 4z" />
  </Icon>
)

export const MailIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6 8.5 7 8.5-7" />
  </Icon>
)

export const ClockIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Icon>
)

export const MenuIcon = (p) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
)

export const CloseIcon = (p) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
)

export const ArrowRightIcon = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
)

// Filled brand marks for the footer social placeholders.
export const FacebookIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21z" />
  </svg>
)

export const InstagramIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

export const LinkedInIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M6.9 8.8H3.8V20h3.1zM5.3 3.8a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM20.2 13.6c0-3-1.6-5-4.4-5-1.4 0-2.4.8-2.8 1.5V8.8H10V20h3.1v-5.9c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3V20h3.2z" />
  </svg>
)

export const YouTubeIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z" />
  </svg>
)
