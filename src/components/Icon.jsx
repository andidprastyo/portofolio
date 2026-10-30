/* ============================================================================
   Inline icon set — no icon dependency, all currentColor.
   ========================================================================= */

const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function Icon({ name, size = 16, ...rest }) {
  const props = { ...base, width: size, height: size, ...rest }

  switch (name) {
    case 'github':
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.4 7.4 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
        </svg>
      )

    case 'linkedin':
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M3.6 2.2a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0ZM.24 5.34h3.13V16H.24V5.34Zm5.2 0h3v1.46h.04c.42-.79 1.44-1.62 2.96-1.62 3.17 0 3.75 2.08 3.75 4.79V16h-3.12v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V16H5.44V5.34Z" />
        </svg>
      )

    case 'x':
      return (
        <svg {...props} fill="currentColor" stroke="none">
          <path d="M12.6 1h2.45l-5.35 6.12L16 15h-4.93l-3.86-5.05L2.8 15H.35l5.72-6.54L0 1h5.05l3.49 4.62L12.6 1Zm-.86 12.6h1.36L4.32 2.32H2.86L11.74 13.6Z" />
        </svg>
      )

    case 'mail':
      return (
        <svg {...props}>
          <rect x="1.5" y="3" width="13" height="10" rx="1" />
          <path d="m2 4.5 6 4.5 6-4.5" />
        </svg>
      )

    case 'external':
      return (
        <svg {...props}>
          <path d="M6.5 3H3.5A1.5 1.5 0 0 0 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-3" />
          <path d="M9.5 2H14v4.5M14 2 7.5 8.5" />
        </svg>
      )

    case 'link':
      return (
        <svg {...props}>
          <path d="M6.5 9.5a3 3 0 0 0 4.24 0l2.12-2.12a3 3 0 0 0-4.24-4.25l-1.06 1.06" />
          <path d="M9.5 6.5a3 3 0 0 0-4.24 0L3.14 8.62a3 3 0 0 0 4.24 4.25l1.06-1.06" />
        </svg>
      )

    case 'search':
      return (
        <svg {...props}>
          <circle cx="7" cy="7" r="4.5" />
          <path d="m10.5 10.5 3 3" />
        </svg>
      )

    case 'arrow-right':
      return (
        <svg {...props}>
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      )

    case 'download':
      return (
        <svg {...props}>
          <path d="M8 2v8M4.5 6.5 8 10l3.5-3.5" />
          <path d="M2.5 13h11" />
        </svg>
      )

    case 'pin':
      return (
        <svg {...props}>
          <path d="M8 14s5-4.5 5-8A5 5 0 0 0 3 6c0 3.5 5 8 5 8Z" />
          <circle cx="8" cy="6" r="1.8" />
        </svg>
      )

    case 'check':
      return (
        <svg {...props}>
          <path d="m3 8.5 3.5 3.5L13 5" />
        </svg>
      )

    case 'leaf':
      return (
        <svg {...props}>
          <path d="M13.8 2.2C7.4 2.2 3 4.5 3 9a4.2 4.2 0 0 0 4.2 4.2c4.5 0 6.6-4.6 6.6-11Z" />
          <path d="M2 14c2.4-3 5.1-5.2 9-7" />
        </svg>
      )

    case 'sprout':
      return (
        <svg {...props}>
          <path d="M8 14V8" />
          <path d="M8 9C4.5 9 2.5 7 2.5 3.5 6 3.5 8 5.5 8 9Z" />
          <path d="M8 7c0-3 1.8-5 5.5-5C13.5 5.5 11.5 7.5 8 7Z" />
          <path d="M5 14h6" />
        </svg>
      )

    default:
      return null
  }
}
