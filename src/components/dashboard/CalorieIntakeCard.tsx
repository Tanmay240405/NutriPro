import { CALORIE_DATA, MACRO_NUTRIENTS } from '@/constants';

export function CalorieIntakeCard() {
  const { consumed, target } = CALORIE_DATA;
  const percentage = Math.round((consumed / target) * 100);
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="rounded-2xl bg-white p-6 border border-charcoal-100">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-charcoal-800">Caloric Intake</h3>
        <span className="text-charcoal-300">📊</span>
      </div>

      <div className="flex flex-col items-center">
        {/* Circular Progress */}
        <div className="relative mb-5">
          <svg width="140" height="140" className="-rotate-90">
            {/* Background track */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke="#e8ede5"
              strokeWidth="10"
            />
            {/* Progress arc */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              fill="none"
              stroke="#7a9466"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-charcoal-900">
              {consumed.toLocaleString()}
            </span>
            <span className="text-xs text-charcoal-400">kcal</span>
          </div>
        </div>

        {/* Macros Row */}
        <div className="grid w-full grid-cols-4 gap-2">
          {MACRO_NUTRIENTS.map((macro) => (
            <div key={macro.name} className="text-center">
              <div
                className="mx-auto mb-1 h-1.5 w-8 rounded-full"
                style={{ backgroundColor: macro.color }}
              />
              <p className="text-xs font-semibold text-charcoal-800">
                {macro.current}{macro.unit}
              </p>
              <p className="text-[10px] text-charcoal-400">{macro.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
