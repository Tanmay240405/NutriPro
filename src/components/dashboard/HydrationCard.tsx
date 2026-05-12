import { Plus } from 'lucide-react';
import { HYDRATION_DATA } from '@/constants';

export function HydrationCard() {
  const { current, target, unit } = HYDRATION_DATA;

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 border border-charcoal-100 shadow-sm relative">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-charcoal-900">Hydration</h3>
        {/* Beautiful SVG Water Drop */}
        <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] text-[#71a6ca] fill-[#71a6ca]">
          <path d="M12 2C12 2 6 10 6 14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14C18 10 12 2 12 2Z" />
        </svg>
      </div>

      <div className="flex-1" />

      {/* Stats */}
      <div className="flex items-end justify-between mt-8">
        <div>
          <p className="text-[34px] font-extrabold tracking-tight text-charcoal-900 leading-none mb-1.5">
            {current}<span className="text-xl font-medium text-charcoal-400 ml-0.5">{unit}</span>
          </p>
          <p className="text-[11px] font-semibold text-charcoal-400">Daily Goal: {target}{unit}</p>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-900 text-white shadow-md transition-transform hover:scale-105 active:scale-95 hover:bg-charcoal-800">
          <Plus size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
