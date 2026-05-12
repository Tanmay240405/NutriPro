import { CalendarPlus } from 'lucide-react';
import { Button } from '@/components/ui';

export function PlanAheadCard() {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-sage-50 p-6 border border-sage-100 text-center transition-transform hover:scale-[1.01]">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm border border-white/50">
        <CalendarPlus className="h-6 w-6 text-sage-700" strokeWidth={1.5} />
      </div>
      <h3 className="text-base font-bold text-charcoal-900">Plan Ahead</h3>
      <p className="mt-2 text-[13px] text-charcoal-500 leading-relaxed max-w-[180px]">
        Schedule your meals for upcoming days to stay on track.
      </p>
      <Button variant="primary" size="sm" className="mt-6 px-6 py-2.5 font-semibold tracking-wide shadow-md hover:shadow-lg">
        Schedule Meal
      </Button>
    </div>
  );
}
