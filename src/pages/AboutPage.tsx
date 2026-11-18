import CtaLink from '@/components/CtaLink';
import CoachesSection from '@/components/CoachesSection';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Fortius"
        title="Built to grow athletes"
        description="Fortius Sports Academy is a premier destination for recreational and professional athletes, combining world-class facilities with coaching that helps players elevate their game."
        image="https://static.wixstatic.com/media/3f5dd9_76d3fdbf2cc144ea801b8db70596de5b~mv2.jpg/v1/fill/w_1009,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3f5dd9_76d3fdbf2cc144ea801b8db70596de5b~mv2.jpg"
        actions={<CtaLink to="/coaching" variant="accent">Meet the coaching team</CtaLink>}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal variant="left">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-accent-700">Our story</p>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase text-brand-900 sm:text-5xl">A place to play, train, and compete</h2>
            <p className="mt-5 text-base leading-relaxed text-brand-600">Our two Alpharetta-area facilities offer a premier environment for athletes of all levels, with flexible membership and coaching programs tailored to the way you want to play.</p>
          </Reveal>
          <Reveal variant="right" className="rounded-3xl bg-brand-800 p-8 text-white sm:p-10">
            <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-lime-400">Our mission</p>
            <p className="mt-5 text-xl leading-relaxed">To inspire and empower athletes by providing exceptional facilities, coaching, and a supportive environment that fosters growth, excellence, and a lifelong passion for sports.</p>
          </Reveal>
        </div>
      </section>

      <CoachesSection tone="soft" />
    </>
  );
}
