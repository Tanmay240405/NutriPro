import { Plus } from 'lucide-react';
import { HYDRATION_DATA } from '@/constants';

export function HydrationCard() {
  const { current, target, unit, bars } = HYDRATION_DATA;

  return (
    <div className="rounded-2xl bg-white p-6 border border-charcoal-100">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-charcoal-800">Hydration</h3>
        <span className="text-charcoal-300">💧</span>
      </div>

      {/* Bar Chart */}
      <div className="mb-4 flex items-end justify-between gap-1.5 h-24 px-1">
        {bars.map((value, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div className="w-full rounded-t-md overflow-hidden bg-sage-100 relative" style={{ height: '100%' }}>
              <div
                className="absolute bottom-0 left-0 right-0 rounded-t-md bg-sage-400 transition-all duration-500"
                style={{ height: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold text-charcoal-900">
            {current}<span className="text-lg font-normal text-charcoal-400">{unit}</span>
          </p>
          <p className="text-xs text-charcoal-400">Daily Goal: {target}{unit}</p>
        </div>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal-900 text-white shadow-md transition-transform hover:scale-110 active:scale-95">
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}
