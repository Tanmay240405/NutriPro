import { Bookmark } from 'lucide-react';
import { RECENT_ACTIVITIES } from '@/constants';

export function RecentActivityCard() {
  return (
    <div className="rounded-2xl bg-white p-6 border border-charcoal-100">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-charcoal-800">Recent Activity</h3>
        <button className="text-xs font-medium text-sage-600 hover:text-sage-700 transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {RECENT_ACTIVITIES.map((activity) => (
          <div
            key={activity.id}
            className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-charcoal-50"
          >
            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-50 text-lg shrink-0">
              {activity.icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-charcoal-900 truncate">
                {activity.title}
              </p>
              <p className="text-xs text-charcoal-400">{activity.subtitle}</p>
            </div>

            {/* Time + Bookmark */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs text-charcoal-400">{activity.time}</span>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity text-charcoal-300 hover:text-sage-500">
                <Bookmark size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
