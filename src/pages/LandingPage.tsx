import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection, WeeklyPlanner } from '@/components/landing';
import { LANDING_NAV_ITEMS } from '@/constants';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navbar – no right slot for landing, matching reference */}
      <Navbar items={LANDING_NAV_ITEMS} variant="landing" />

      {/* Hero */}
      <HeroSection />

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-charcoal-200 to-transparent" />
      </div>

      {/* Weekly Planner */}
      <WeeklyPlanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}
