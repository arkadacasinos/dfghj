import { BadgeCheck, Clock, Gift, LogIn, ShieldCheck } from 'lucide-react'

const badges = [
  { icon: ShieldCheck, label: 'Лицензия' },
  { icon: Clock, label: 'Выплаты СБП 5 мин' },
  { icon: Gift, label: 'Бонус 100%' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 text-center sm:px-6 sm:pt-20">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5">
          {badges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
            >
              <b.icon className="h-3.5 w-3.5" aria-hidden="true" />
              {b.label}
            </span>
          ))}
        </div>

        <h1 className="mx-auto max-w-3xl text-balance font-display text-3xl font-bold leading-tight sm:text-5xl">
          Kush Casino официальный сайт — играть онлайн в{' '}
          <span className="text-primary">Куш Казино</span> и рабочее зеркало
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Официальный сайт Kush Casino открыт для всех игроков. Куш Казино играть онлайн можно
          на реальные деньги и в демо-режиме, а при блокировке всегда доступно рабочее зеркало.
          Бонус 100% на первый депозит, вывод через СБП за 5 минут и более 3000 слотов от лучших
          провайдеров. Kush Casino играть удобно с любого устройства — Куш Казино официальный
          сайт работает круглосуточно и принимает игроков из России и стран СНГ.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://casinokush1.vercel.app"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition hover:brightness-110 sm:w-auto"
          >
            <LogIn className="h-5 w-5" aria-hidden="true" />
            Войти и играть
          </a>
          <a
            href="https://casinokush1.vercel.app"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-card px-7 py-3.5 text-base font-semibold transition hover:border-primary/50 sm:w-auto"
          >
            <BadgeCheck className="h-5 w-5 text-primary" aria-hidden="true" />
            Рабочее зеркало
          </a>
        </div>
      </div>
    </section>
  )
}
