import { CALORIE_DATA, MACRO_NUTRIENTS } from '@/constants';

export function CalorieIntakeCard() {
  const { consumed, target } = CALORIE_DATA;
  const percentage = Math.round((consumed / target) * 100);
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 border border-charcoal-100 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-bold text-charcoal-900">Caloric Intake</h3>
        <span className="text-charcoal-300">📊</span>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        {/* Circular Progress */}
        <div className="relative mb-8">
          <svg width="150" height="150" className="-rotate-90">
            {/* Background track */}
            <circle
              cx="75"
              cy="75"
              r={radius}
              fill="none"
              stroke="#f4f7f2"
              strokeWidth="12"
            />
            {/* Progress arc */}
            <circle
              cx="75"
              cy="75"
              r={radius}
              fill="none"
              stroke="#7a9466"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
            <span className="text-4xl font-extrabold tracking-tight text-charcoal-900">
              {consumed.toLocaleString()}
            </span>
            <span className="text-[13px] font-semibold text-charcoal-400 mt-0.5">kcal</span>
          </div>
        </div>

        {/* Macros Row */}
        <div className="grid w-full grid-cols-4 gap-2 px-1">
          {MACRO_NUTRIENTS.map((macro) => (
            <div key={macro.name} className="text-center flex flex-col items-center">
              <div
                className="mb-2.5 h-1.5 w-7 rounded-full"
                style={{ backgroundColor: macro.color }}
              />
              <p className="text-[13px] font-extrabold text-charcoal-900">
                {macro.current}<span className="text-[10px] font-bold text-charcoal-500 ml-0.5">{macro.unit}</span>
              </p>
              <p className="mt-0.5 text-[10px] font-bold text-charcoal-400">{macro.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
