export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 40 40" className="h-9 w-9 flex-none" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill={light ? '#FFFFFF' : '#0B2545'} />
        <path d="M8 26c4-3 8-3 12 0s8 3 12 0" stroke="#8DB8E8" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path
          d="M20 9v12M20 9l8 5-8 3"
          stroke={light ? '#0B2545' : '#FFFFFF'}
          strokeWidth="2.6"
          fill="none"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
      <span className={`text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}>
        Harbour <span className={light ? 'text-harbour-300' : 'text-navy-700'}>Tutoring</span>
      </span>
    </span>
  )
}
