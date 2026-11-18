import { ArrowRight, Medal } from 'lucide-react';
import CtaLink from '@/components/CtaLink';
import Reveal from '@/components/Reveal';
import { COACHES } from '@/data/coaches';

type CoachesSectionProps = {
  compact?: boolean;
  showCta?: boolean;
  tone?: 'white' | 'soft' | 'dark';
};

export default function CoachesSection({ compact = false, showCta = true, tone = 'soft' }: CoachesSectionProps) {
  const toneClass = tone === 'dark' ? 'bg-brand-800 text-white' : tone === 'white' ? 'bg-white' : 'bg-brand-50/60';
  const coaches = compact ? COACHES.slice(0, 4) : COACHES;

  return (
    <section className={`${toneClass} py-20 sm:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className={`font-display text-sm font-bold uppercase tracking-[0.3em] ${tone === 'dark' ? 'text-lime-400' : 'text-accent-700'}`}>
              Team Fortius
            </p>
            <h2 className={`mt-3 font-display text-4xl font-bold uppercase sm:text-5xl ${tone === 'dark' ? 'text-white' : 'text-brand-900'}`}>
              Coaches who raise your game
            </h2>
            <p className={`mt-4 max-w-xl text-base ${tone === 'dark' ? 'text-brand-100' : 'text-brand-600'}`}>
              Train with a supportive team that helps beginners find their footing and competitive athletes chase their next breakthrough.
            </p>
          </Reveal>
          {showCta && (
            <Reveal variant="right">
              <CtaLink to="/coaching" variant={tone === 'dark' ? 'accent' : 'primary'}>
                Explore coaching
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </CtaLink>
            </Reveal>
          )}
        </div>

        <div className={`mt-12 grid gap-5 ${compact ? 'md:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-5'}`}>
          {coaches.map((coach, index) => (
            <Reveal key={coach.name} delay={index * 100} variant="up">
              <article className={`group h-full overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${tone === 'dark' ? 'border-white/10 bg-white/10 hover:border-lime-300/60' : 'border-brand-100 bg-white hover:border-accent-300'}`}>
                <div className="relative aspect-square overflow-hidden bg-brand-100">
                  <img src={coach.image} alt={`${coach.name}, Fortius coach`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-900/80 text-lime-300 backdrop-blur">
                    <Medal className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-5">
                  <p className={`text-xs font-semibold uppercase tracking-[0.18em] ${tone === 'dark' ? 'text-lime-300' : 'text-accent-700'}`}>{coach.specialty}</p>
                  <h3 className={`mt-2 font-display text-2xl font-bold uppercase ${tone === 'dark' ? 'text-white' : 'text-brand-900'}`}>{coach.name}</h3>
                  {!compact && <p className={`mt-3 text-sm leading-relaxed ${tone === 'dark' ? 'text-brand-100' : 'text-brand-600'}`}>{coach.description}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
