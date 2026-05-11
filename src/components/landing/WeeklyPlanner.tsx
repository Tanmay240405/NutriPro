import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WEEKLY_PLAN } from '@/constants';
import type { DayPlan } from '@/types';

function MealCard({ meal }: { meal: { name: string; calories: number } }) {
  return (
    <div className="rounded-xl bg-white/80 px-3 py-2 text-xs shadow-sm border border-charcoal-50">
      <p className="font-medium text-charcoal-800 leading-tight">{meal.name}</p>
      <p className="mt-1 text-charcoal-400">{meal.calories} kcal</p>
    </div>
  );
}

function DayColumn({ plan }: { plan: DayPlan }) {
  const isToday = plan.shortDay === 'THU';
  const isHighlighted = plan.isHighlighted;

  return (
    <div
      className={`flex flex-col rounded-2xl p-4 min-h-[340px] transition-all duration-300 ${
        isHighlighted
          ? 'bg-sage-200/60 ring-1 ring-sage-300 shadow-md'
          : 'bg-[#f2f4f2]'
      }`}
    >
      {/* Day Header */}
      <p
        className={`mb-4 text-center text-xs font-semibold uppercase tracking-wider ${
          isToday
            ? 'text-sage-600 underline underline-offset-4 decoration-2'
            : 'text-charcoal-400'
        }`}
      >
        {plan.shortDay}
      </p>

      {/* Meals */}
      <div className="flex flex-1 flex-col gap-2">
        {plan.meals.length > 0 ? (
          plan.meals.map((meal) => <MealCard key={meal.id} meal={meal} />)
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <p className="text-xs text-charcoal-300 italic">No meals planned</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function WeeklyPlanner() {
  const [_weekOffset, setWeekOffset] = useState(0);

  return (
    <section id="weekly-planner" className="mx-auto max-w-7xl px-6 py-20">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-sage-500">
          Focusing on high-nutritional organic food
        </p>
        <h2 className="mt-3 text-4xl font-display italic font-bold text-charcoal-900 md:text-5xl">
          Weekly Planner
        </h2>
      </div>

      {/* Week Navigation */}
      <div className="mb-8 flex items-center justify-end gap-2">
        <button
          onClick={() => setWeekOffset((p) => p - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-900 text-white transition-transform hover:scale-105 active:scale-95"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => setWeekOffset((p) => p + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-100 text-charcoal-700 transition-transform hover:scale-105 hover:bg-charcoal-200 active:scale-95"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Day Grid */}
      <div className="grid grid-cols-7 gap-3">
        {WEEKLY_PLAN.map((plan) => (
          <DayColumn key={plan.day} plan={plan} />
        ))}
      </div>
    </section>
  );
}
