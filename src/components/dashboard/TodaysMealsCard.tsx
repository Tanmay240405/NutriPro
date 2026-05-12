import { UtensilsCrossed } from 'lucide-react';
import { WEEKLY_PLAN } from '@/constants';

export function TodaysMealsCard() {
  const activeDayPlan = WEEKLY_PLAN.find((day) => day.isHighlighted) || WEEKLY_PLAN[1];
  const meals = activeDayPlan.meals;

  return (
    <div className="rounded-2xl bg-white p-6 border border-charcoal-100 h-full">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-charcoal-800">Today's Meals</h3>
        <span className="text-sage-400">
          <UtensilsCrossed size={18} />
        </span>
      </div>

      <div className="space-y-3">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="rounded-xl bg-charcoal-50/70 p-3.5 transition-colors hover:bg-charcoal-50"
          >
            <p className="text-sm font-semibold text-charcoal-900">{meal.name}</p>
            <p className="mt-1 text-[11px] font-medium text-sage-600">
              {meal.time} <span className="mx-1 text-sage-400">•</span> {meal.calories} kcal
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
