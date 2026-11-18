import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import CtaLink from '@/components/CtaLink';
import Logo from '@/components/Logo';
import { BOOKING_URL } from '@/data/links';

const SPORT_ITEMS = [
  { label: 'Badminton', slug: 'badminton' },
  { label: 'Pickleball', slug: 'pickleball' },
  { label: 'Table Tennis', slug: 'table-tennis' },
] as const;

type NavItem = {
  label: string;
  to: string;
  children?: readonly { label: string; to: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'Courts',
    to: '/courts',
    children: SPORT_ITEMS.map((sport) => ({ ...sport, to: `/courts/${sport.slug}` })),
  },
  { label: 'Membership', to: '/membership' },
  {
    label: 'Coaching',
    to: '/coaching',
    children: SPORT_ITEMS.map((sport) => ({ ...sport, label: `${sport.label} Coaching`, to: `/coaching/${sport.slug}` })),
  },
  { label: 'Pro Shop', to: '/pro-shop' },
  { label: 'Refer & Win', to: '/refer' },
  { label: 'Deal Zone', to: '/deals' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-sm font-semibold transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent-700 after:transition-all after:duration-300 hover:text-accent-700 hover:after:w-full ${
      isActive ? 'text-accent-700 after:w-full' : 'text-brand-800 after:w-0'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-shadow duration-300 ${
        isScrolled ? 'border-brand-100 shadow-md' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
          {NAV_ITEMS.map((item) => (
            item.children ? (
              <div key={item.to} className="group relative py-2">
                <NavLink
                  to={item.to}
                  className={({ isActive }) => `${linkClass({ isActive })} inline-flex items-center gap-1`}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                </NavLink>
                <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 translate-y-2 rounded-2xl border border-brand-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                          isActive ? 'bg-accent-50 text-accent-700' : 'text-brand-800 hover:bg-brand-50 hover:text-accent-700'
                        }`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
                {item.label}
              </NavLink>
            )
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <CtaLink to={BOOKING_URL} variant="lime" className="!px-5 !py-2.5">
            Book Now
          </CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-brand-800 transition-colors hover:bg-brand-50 xl:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-t border-brand-100 bg-white transition-all duration-300 xl:hidden ${
          isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              item.children ? (
                <div key={item.to}>
                  <div className="flex items-center rounded-xl transition-colors hover:bg-brand-50">
                    <NavLink
                      to={item.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex-1 px-4 py-3 text-base font-semibold ${isActive ? 'text-accent-700' : 'text-brand-800'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                    <button
                      type="button"
                      aria-expanded={openMobileMenu === item.to}
                      aria-label={`Show ${item.label} pages`}
                      onClick={() => setOpenMobileMenu((open) => (open === item.to ? null : item.to))}
                      className="mr-2 rounded-lg p-2 text-brand-700"
                    >
                      <ChevronDown className={`h-5 w-5 transition-transform ${openMobileMenu === item.to ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  {openMobileMenu === item.to && (
                    <div className="ml-4 border-l border-brand-100 pl-3">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          onClick={() => setIsMenuOpen(false)}
                          className={({ isActive }) =>
                            `block rounded-xl px-4 py-2.5 text-sm font-semibold ${
                              isActive ? 'text-accent-700' : 'text-brand-700 hover:bg-brand-50'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                      isActive ? 'bg-accent-50 text-accent-700' : 'text-brand-800 hover:bg-brand-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            ))}
            <div className="mt-3 pb-2">
              <CtaLink to={BOOKING_URL} variant="lime" className="w-full">
                Book Now
              </CtaLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
