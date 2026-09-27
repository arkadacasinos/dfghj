export const size = { width: 64, height: 64 }
export const contentType = 'image/svg+xml'

export default function Icon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="14" fill="#0b0f0e" />
      <rect x="10" y="10" width="44" height="44" rx="10" fill="#d4af37" />
      <circle cx="32" cy="32" r="13" fill="#0b0f0e" />
      <circle cx="32" cy="32" r="5" fill="#d4af37" />
    </svg>
  )
}
