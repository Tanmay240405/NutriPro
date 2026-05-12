import { Fish, Dumbbell, Pill } from 'lucide-react';
import { RECENT_ACTIVITIES } from '@/constants';

function getActivityIcon(id: string) {
  switch (id) {
    case 'a1':
      return {
        icon: <Fish size={20} strokeWidth={2} />,
        containerClass: 'bg-[#f0f7ff] text-[#4ea3fc]',
      };
    case 'a2':
      return {
        icon: <Dumbbell size={20} strokeWidth={2} />,
        containerClass: 'bg-[#fff9eb] text-[#f5a83b]',
      };
    case 'a3':
      return {
        icon: <Pill size={20} strokeWidth={2} />,
        containerClass: 'bg-[#fff0f3] text-[#fa667f]',
      };
    default:
      return {
        icon: <div />,
        containerClass: 'bg-charcoal-50 text-charcoal-500',
      };
  }
}

export function RecentActivityCard() {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 border border-charcoal-100 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-bold text-charcoal-900">Recent Activity</h3>
        <button className="text-[11px] font-bold uppercase tracking-wide text-sage-600 hover:text-sage-700 transition-colors">
          View All
        </button>
      </div>

      <div className="flex flex-col justify-between flex-1 gap-4">
        {RECENT_ACTIVITIES.map((activity) => {
          const { icon, containerClass } = getActivityIcon(activity.id);
          
          return (
            <div
              key={activity.id}
              className="group flex items-center gap-4 rounded-xl transition-colors hover:bg-charcoal-50/50 p-1.5 -mx-1.5 cursor-pointer"
            >
              {/* Icon */}
              <div className={`flex h-11 w-11 items-center justify-center rounded-[14px] shrink-0 ${containerClass}`}>
                {icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold text-charcoal-900 truncate">
                  {activity.title}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-charcoal-400">{activity.subtitle}</p>
              </div>

              {/* Time */}
              <div className="shrink-0 pl-2">
                <span className="text-[11px] font-medium text-charcoal-400">{activity.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
