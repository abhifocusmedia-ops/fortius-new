import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Dumbbell, Gift, Sparkles } from 'lucide-react';
import CtaLink from '@/components/CtaLink';
import CoachesSection from '@/components/CoachesSection';
import FacilityHighlights from '@/components/FacilityHighlights';
import Reveal from '@/components/Reveal';
import SportCard from '@/components/SportCard';
import { BOOKING_URL, REFER_URL } from '@/data/links';
import { SPORTS } from '@/data/sports';

const STATS = [
  { value: '24', label: 'Badminton Courts' },
  { value: '4', label: 'Pickleball Courts' },
  { value: '10', label: 'Table Tennis Tables' },
];

const HERO_SLIDES = [
  {
    eyebrow: 'Badminton',
    title: 'Every rally starts here.',
    description: 'Train, play, and compete on 24 indoor badminton courts built for your next level.',
    image: 'https://images.pexels.com/photos/8007494/pexels-photo-8007494.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    primary: { label: 'Book a court', to: '/courts/badminton' },
    secondary: { label: 'Explore coaching', to: '/coaching/badminton' },
  },
  {
    eyebrow: 'Pickleball',
    title: 'Make your next move.',
    description: 'Discover tournament-grade pickleball courts for casual games, coaching, and competition.',
    image: 'https://images.pexels.com/photos/32975182/pexels-photo-32975182.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    primary: { label: 'Explore pickleball', to: '/courts/pickleball' },
    secondary: { label: 'View memberships', to: '/membership' },
  },
  {
    eyebrow: 'Fortius Sports Academy',
    title: 'Play. Train. Compete.',
    description: 'A high-performance home for badminton, pickleball, and table tennis in the Alpharetta area.',
    image: 'https://images.pexels.com/photos/32843102/pexels-photo-32843102.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000',
    primary: { label: 'Join us', to: '/membership' },
    secondary: { label: 'Meet our coaches', to: '/coaching' },
  },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slide = HERO_SLIDES[activeSlide];

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setActiveSlide((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <>
      <section
        className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-brand-900 text-white"
        aria-roledescription="carousel"
        aria-label="Fortius highlights"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {HERO_SLIDES.map((item, index) => (
          <img
            key={item.title}
            src={item.image}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 -z-20 h-full w-full object-cover transition-all duration-1000 ease-out ${index === activeSlide ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-900 via-brand-900/75 to-brand-900/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-900 via-transparent to-brand-900/35" />
        <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-between px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-accent-100 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Built for your next level
            </span>
            <div className="hidden items-center gap-2 sm:flex">
              <span className="font-display text-sm font-bold tracking-[0.2em] text-white/70">{String(activeSlide + 1).padStart(2, '0')}</span>
              <span className="h-px w-10 bg-white/40" />
              <span className="font-display text-sm font-bold tracking-[0.2em] text-white/50">{String(HERO_SLIDES.length).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div key={slide.title} className="max-w-3xl animate-fade-up">
              <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-lime-400">{slide.eyebrow}</p>
              <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-[1.02] tracking-wide text-white sm:text-6xl lg:text-8xl">{slide.title}</h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">{slide.description}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <CtaLink to={slide.primary.to} variant="lime">{slide.primary.label}</CtaLink>
                <CtaLink to={slide.secondary.to} variant="outline-light">{slide.secondary.label}</CtaLink>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end">
              <button type="button" onClick={() => goToSlide(activeSlide - 1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-brand-900" aria-label="Previous slide">
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => goToSlide(activeSlide + 1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white hover:text-brand-900" aria-label="Next slide">
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-8 border-t border-white/20 pt-5">
            <div className="flex items-center gap-2" role="tablist" aria-label="Choose hero slide">
              {HERO_SLIDES.map((item, index) => (
                <button key={item.title} type="button" onClick={() => goToSlide(index)} className={`h-1.5 rounded-full transition-all duration-500 ${index === activeSlide ? 'w-12 bg-lime-400' : 'w-5 bg-white/45 hover:bg-white/80'}`} role="tab" aria-selected={index === activeSlide} aria-label={`Go to slide ${index + 1}`} />
              ))}
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-white/75 transition-colors hover:text-lime-300 sm:block">
              Book a session <ArrowRight className="ml-2 inline h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-accent-700 text-white">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div className="flex items-center gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 transition-transform duration-500 hover:scale-110 hover:rotate-6">
              <Gift className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-2xl font-bold uppercase tracking-wide">Refer and win!!!</p>
              <p className="mt-1 text-sm text-accent-50 sm:text-base">
                10% OFF on First Month for Both. Chance to Win a $100 Pro-Shop Credit. Refer more! Win more!
              </p>
            </div>
          </div>
          <CtaLink to={REFER_URL} variant="secondary" showArrow>
            Refer Now!
          </CtaLink>
        </Reveal>
      </section>

      <section className="border-b border-brand-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-brand-100 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          {STATS.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 120}
              className="flex flex-col items-center py-10 text-center"
            >
              <span className="font-display text-5xl font-bold text-brand-800">{stat.value}</span>
              <span className="mt-2 h-1 w-12 origin-center rounded-full bg-lime-500 animate-count-bar" style={{ animationDelay: `${index * 120 + 200}ms` }} />
              <span className="mt-3 font-display text-sm font-bold uppercase tracking-[0.25em] text-accent-700">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-brand-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Our Sports</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">
              Play Your Way
            </h2>
            <p className="mt-4 text-base text-brand-600">
              Pick the sport you love, or combine them. Sign up for a membership and start playing this week.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {SPORTS.map((sport, index) => (
              <Reveal key={sport.slug} delay={index * 150} variant="up">
                <SportCard sport={sport} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-800 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="scale">
            <Dumbbell className="mx-auto h-10 w-10 text-lime-400" aria-hidden="true" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide sm:text-5xl">
              Love all? You can Dink, Ping Pong and Smash!
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="max-w-2xl text-base text-brand-100 sm:text-lg">
              Get the combo membership and play every sport we offer, all in one place.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <CtaLink to="/membership" variant="accent">
              Combo Membership
            </CtaLink>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal variant="left">
              <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Coaching</p>
              <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">
                Interested to get trained?
              </h2>
              <p className="mt-4 text-base text-brand-600">Or enroll your junior. Premier academy with top coaches.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaLink to="/coaching" variant="primary">
                  View Coaching Programs
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </CtaLink>
              </div>
            </Reveal>
            <Reveal variant="right">
              <img
                src="https://images.pexels.com/photos/26238663/pexels-photo-26238663.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="A player training on an indoor badminton court"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl transition-transform duration-700 hover:scale-[1.02]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <CoachesSection compact tone="dark" />

      <section className="bg-brand-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">The Facility</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">
              Built for Performance
            </h2>
          </Reveal>
          <div className="mt-12">
            <FacilityHighlights />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal variant="left">
            <CtaLink
              to="/pro-shop"
              variant="primary"
              className="!flex-col !items-start !justify-end !rounded-3xl !px-8 !py-12 !text-left !text-base"
            >
              <span className="font-display text-3xl font-bold uppercase">Pro Shop</span>
              <span className="text-sm font-normal text-brand-100">
                Yonex badminton gear and Selkirk pickleball paddles, plus stringing service.
              </span>
            </CtaLink>
          </Reveal>
          <Reveal variant="right" delay={150}>
            <CtaLink
              to="/deals"
              variant="accent"
              className="!flex-col !items-start !justify-end !rounded-3xl !px-8 !py-12 !text-left !text-base"
            >
              <span className="font-display text-3xl font-bold uppercase">Deal Zone</span>
              <span className="text-sm font-normal text-accent-50">
                Member offers and referral rewards to help you save on your first month.
              </span>
            </CtaLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
