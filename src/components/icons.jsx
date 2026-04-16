function IconBase({ className, children }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {children}
    </svg>
  )
}

export function HeartbeatIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 21c-4.4-3.2-8-6.1-8-10.3A4.7 4.7 0 0 1 8.8 6c1.6 0 2.6.8 3.2 1.7.6-.9 1.6-1.7 3.2-1.7A4.7 4.7 0 0 1 20 10.7C20 14.9 16.4 17.8 12 21Z" />
      <path d="m8.5 12 2.1-2.5 1.8 4 1.6-3 1.5 1.5" />
    </IconBase>
  )
}

export function ArrowRightIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  )
}

export function BrainIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M9 8.4A2.9 2.9 0 1 1 14.7 8a3.2 3.2 0 0 1 2.3 3.1A3 3 0 0 1 15 14a2.5 2.5 0 0 1-4.9.6A2.8 2.8 0 0 1 7 12a2.9 2.9 0 0 1 2-2.7Z" />
      <path d="M10 7.6V17" />
      <path d="M14 8v8.5" />
    </IconBase>
  )
}

export function CalendarIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 10h16" />
    </IconBase>
  )
}

export function ChatIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M7 18.5c-1.7 0-3-1.2-3-2.9V9.4c0-1.7 1.3-2.9 3-2.9h10c1.7 0 3 1.2 3 2.9v6.2c0 1.7-1.3 2.9-3 2.9H10l-4 3v-3H7Z" />
    </IconBase>
  )
}

export function PinIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 21s6-5.6 6-10.5A6 6 0 1 0 6 10.5C6 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.1" />
    </IconBase>
  )
}

export function ClockIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.8 1.8" />
    </IconBase>
  )
}

export function ShieldIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3 6 5.6v5.8c0 4 2.5 6.8 6 8.6 3.5-1.8 6-4.6 6-8.6V5.6L12 3Z" />
      <path d="m9.2 12 1.8 1.8 3.8-4.2" />
    </IconBase>
  )
}

export function StethoscopeIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M8 4v5a4 4 0 0 0 8 0V4" />
      <path d="M8 7H6" />
      <path d="M18 7h-2" />
      <path d="M12 13v2.5a4.5 4.5 0 0 0 9 0V13" />
      <circle cx="20.5" cy="11.5" r="1.5" />
    </IconBase>
  )
}
