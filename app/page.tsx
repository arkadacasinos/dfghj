import Header from '@/components/header'
import Hero from '@/components/hero'
import {
  Overview,
  Mirror,
  Slots,
  Registration,
  Bonuses,
  Payments,
  Mobile,
} from '@/components/sections'
import Faq from '@/components/faq'
import Reviews from '@/components/reviews'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <article>
        <Overview />
        <Mirror />
        <Slots />
        <Registration />
        <Bonuses />
        <Payments />
        <Mobile />
      </article>
      <Faq />
      <Reviews />
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-balance font-display text-2xl font-bold leading-tight sm:text-3xl">
            Итоги: почему стоит играть онлайн в Куш Казино
          </h2>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Kush Casino официальный сайт — это надёжная и современная платформа для игры на
              реальные деньги. Куш Казино официальный предлагает более 3000 слотов, честный RTP,
              быстрые выплаты через СБП и щедрую бонусную программу. Играть онлайн в Куш Казино
              можно с любого устройства, а при блокировке всегда доступно Куш Казино зеркало
              рабочее на сегодня.
            </p>
            <p>
              Мы рекомендуем начать с регистрации на официальном сайте Куш Казино, активировать
              приветственный бонус 100% и попробовать слоты в демо-режиме. Куш Казино онлайн
              заботится о своих игроках и предлагает лучшие условия на рынке. Играйте ответственно
              и получайте удовольствие от игры в Куш Казино.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
