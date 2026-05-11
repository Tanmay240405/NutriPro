import { Bell } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui';
import {
  TodaysGoalCard,
  CalorieIntakeCard,
  HydrationCard,
  RecentActivityCard,
  ConsultationCards,
} from '@/components/dashboard';
import { DASHBOARD_NAV_ITEMS, USER_PROFILE } from '@/constants';
import userAvatar from '@/assets/user-avatar.png';

export function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-cream-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-60 flex flex-1 flex-col">
        {/* Top Navbar */}
        <Navbar
          items={DASHBOARD_NAV_ITEMS}
          variant="dashboard"
          rightSlot={
            <div className="flex items-center gap-3">
              <Button variant="secondary" size="sm">
                Get Started
              </Button>
              <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white border border-charcoal-100 text-charcoal-500 transition-colors hover:bg-charcoal-50">
                <Bell size={16} />
                <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-red-400 border-2 border-cream-50" />
              </button>
              <img
                src={userAvatar}
                alt={USER_PROFILE.fullName}
                className="h-9 w-9 rounded-full object-cover ring-2 ring-sage-200 cursor-pointer"
              />
            </div>
          }
        />

        {/* Dashboard Content */}
        <main className="flex-1 px-8 pb-8">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-charcoal-900">
              Welcome back,{' '}
              <span className="font-display italic text-sage-600">
                {USER_PROFILE.name}.
              </span>
            </h1>
            <p className="mt-2 text-sm text-charcoal-400">
              Your nutrition profile is looking exceptional today.
            </p>
          </div>

          {/* Top Row: Goal Card + Calorie Card */}
          <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <TodaysGoalCard />
            </div>
            <div className="lg:col-span-2">
              <CalorieIntakeCard />
            </div>
          </div>

          {/* Middle Row: Hydration + Recent Activity */}
          <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <HydrationCard />
            </div>
            <div className="lg:col-span-3">
              <RecentActivityCard />
            </div>
          </div>

          {/* Bottom Row: Consultation Cards */}
          <ConsultationCards />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
