import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui';
import HomeImage1 from '@/assets/HomeImage1.png';
import nutritionist from '@/assets/nutritionist.png';

export function TodaysGoalCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-sage-50 p-6 border border-sage-100">
      {/* Badge */}
      <span className="inline-block rounded-full bg-sage-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-sage-700">
        Today's Goal
      </span>

      <div className="mt-4 flex items-start justify-between gap-6">
        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold leading-snug text-charcoal-900">
            We Take
            <br />
            Care About
            <br />
            Your <span className="font-display italic text-sage-600">Health</span>
          </h3>
          <p className="mt-3 text-sm text-charcoal-500 leading-relaxed max-w-[250px]">
            Make sure your daily nutrition is sufficient. Consult your problem about nutrition with our AI advisor.
          </p>
          <Link to="#get-started" className="mt-4 inline-block">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </Link>

          {/* Mini avatars */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex -space-x-2">
              <img src={nutritionist} alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
              <img src={HomeImage1} alt="" className="h-7 w-7 rounded-full border-2 border-white object-cover" />
            </div>
            <button className="flex h-7 w-7 items-center justify-center rounded-full border border-charcoal-200 text-charcoal-500 hover:bg-charcoal-900 hover:text-white hover:border-charcoal-900 transition-all">
              <ArrowUpRight size={12} />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="hidden shrink-0 sm:block">
          <div className="relative">
            <img
              src={HomeImage1}
              alt="Nutritional food"
              className="h-48 w-40 rounded-2xl object-cover shadow-lg"
            />
            {/* Nutritionist floating card */}
            <div className="absolute -bottom-3 -left-8 flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm">
              <img src={nutritionist} alt="Nutritionist" className="h-8 w-8 rounded-full object-cover" />
              <div>
                <p className="text-[11px] font-semibold text-charcoal-900">Nutritionists</p>
                <p className="text-[10px] text-charcoal-400">Dr. Richard Lee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
