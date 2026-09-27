import { Dices } from 'lucide-react'

const hashtags = [
  '#KushCasinoОфициальныйСайт',
  '#KushCasinoОфициальный',
  '#КушКазиноОфициальныйСайт',
  '#КушКазиноОфициальный',
  '#КушКазино',
  '#KushCasinoЗеркало',
  '#KushCasinoИграть',
  '#КушКазиноЗеркалоРабочее',
  '#КушКазиноИграть',
  '#КушКазиноОнлайн',
  '#КушКазиноЗеркало',
  '#KushКазино',
]

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Dices className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Kush <span className="text-primary">Casino</span>
          </span>
        </div>

        <h2 className="mt-8 font-display text-lg font-bold text-foreground">Популярные теги</h2>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {hashtags.map((tag) => (
            <a
              key={tag}
              href="#top"
              className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-muted-foreground transition hover:border-primary/50 hover:text-primary"
            >
              {tag}
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Kush Casino. Все права защищены.
          </p>
          <p className="inline-flex items-center gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-1.5 text-sm font-semibold text-destructive">
            18+ Играйте ответственно
          </p>
        </div>
      </div>
    </footer>
  )
}
