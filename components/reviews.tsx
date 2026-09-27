import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Алексей',
    text: 'Играю в Куш Казино уже полгода. Официальный сайт работает стабильно, а зеркало спасает при блокировке. Вывод через СБП реально за 5 минут, деньги приходят мгновенно.',
    rating: 5,
  },
  {
    name: 'Марина',
    text: 'Понравился приветственный бонус 100% и фриспины. Играть онлайн в Куш Казино удобно даже с телефона. Поддержка отвечает быстро и по делу.',
    rating: 5,
  },
  {
    name: 'Дмитрий',
    text: 'Слотов очень много, RTP честный. Выигрывал несколько раз, вывод на карту прошёл без проблем. Куш Казино зеркало рабочее всегда под рукой.',
    rating: 4,
  },
  {
    name: 'Ольга',
    text: 'Регистрация заняла минуту, бонус начислили сразу. Кэшбэк возвращается каждую неделю. Рекомендую Куш Казино всем, кто любит играть онлайн.',
    rating: 5,
  },
  {
    name: 'Сергей',
    text: 'Пользуюсь Куш Казино зеркалом рабочем на сегодня, когда основной сайт недоступен. Всё работает отлично, баланс и бонусы на месте. Играть онлайн в Куш Казино — одно удовольствие.',
    rating: 5,
  },
  {
    name: 'Наталья',
    text: 'Вывод через СБП действительно за 5 минут, проверяла лично. Слоты с высоким RTP, фриспины за регистрацию. Куш Казино официальный сайт рекомендую друзьям.',
    rating: 4,
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <h2 className="text-balance font-display text-2xl font-bold leading-tight sm:text-3xl">
          Отзывы игроков о Куш Казино
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <figcaption className="font-semibold text-foreground">{r.name}</figcaption>
                <div className="flex gap-0.5" aria-label={`Оценка ${r.rating} из 5`}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-3 leading-relaxed text-muted-foreground">{r.text}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
