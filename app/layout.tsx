import { Analytics } from '@vercel/analytics/next'
import { Manrope, Unbounded } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const manrope = Manrope({ subsets: ['latin', 'cyrillic'], variable: '--font-sans' })
const unbounded = Unbounded({ subsets: ['latin', 'cyrillic'], variable: '--font-display', weight: ['500', '600', '700', '800'] })

const SITE_URL = 'https://kush1.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Kush Casino официальный сайт — играть онлайн в Куш Казино | Зеркало 2026',
  description:
    'Kush Casino официальный сайт: играть онлайн в Куш Казино на реальные деньги. Рабочее зеркало на сегодня, бонус 100%, вывод через СБП за 5 минут, слоты с высоким RTP. Регистрация за 1 минуту.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'Kush Casino официальный сайт — играть онлайн в Куш Казино',
    description:
      'Kush Casino официальный сайт: играть онлайн в Куш Казино на реальные деньги. Рабочее зеркало, бонус 100%, вывод через СБП за 5 минут.',
    url: SITE_URL,
    siteName: 'Kush Casino',
    type: 'website',
    locale: 'ru_RU',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0f0e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${unbounded.variable} bg-background`}>
      <head>
        <meta name="theme-color" content="#0b0f0e" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="yandex-verification" content="a5cd418c8082d6a6" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kush Casino официальный сайт — играть онлайн в Куш Казино" />
        <meta
          name="twitter:description"
          content="Kush Casino официальный сайт: играть онлайн в Куш Казино. Рабочее зеркало, бонус 100%, вывод через СБП за 5 минут."
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
