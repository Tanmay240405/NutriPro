import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui';
import HomeImage1 from '@/assets/HomeImage1.png';
import nutritionist from '@/assets/nutritionist.png';
import userAvatar from '@/assets/user-avatar.png';

export function TodaysGoalCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-sage-50 p-6 border border-sage-100 h-full shadow-sm">
      {/* Badge */}
      <div className="w-full bg-sage-200/50 text-center text-[10px] font-extrabold uppercase tracking-widest text-sage-800 px-4 py-2 rounded-full mb-6">
        Today's Goal
      </div>

      <div className="flex items-start justify-between gap-6">
        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-[28px] font-bold leading-[1.2] text-charcoal-900 tracking-tight">
            We Take
            <br />
            Care About
            <br />
            Your{' '}
            <span className="relative inline-block font-display italic text-sage-600 font-semibold pr-1">
              Health
              <span className="absolute bottom-1.5 left-0 right-1 h-[2.5px] bg-sage-400/80 rounded-full" />
            </span>
          </h3>
          <p className="mt-4 text-[13px] text-charcoal-500 leading-relaxed max-w-[220px]">
            Make sure your daily nutrition is sufficient. Consult your problem about nutrition with our AI advisor.
          </p>
          <Link to="#get-started" className="mt-6 inline-block">
            <Button variant="primary" size="sm" className="px-6 py-2.5 shadow-md hover:shadow-lg font-semibold tracking-wide">
              Get Started
            </Button>
          </Link>

          {/* Mini avatars */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-3">
              <img src={userAvatar} alt="" className="relative z-30 h-[34px] w-[34px] rounded-full border-2 border-sage-50 object-cover shadow-sm bg-white" />
              <img src={nutritionist} alt="" className="relative z-20 h-[34px] w-[34px] rounded-full border-2 border-sage-50 object-cover shadow-sm bg-white" />
              <img src={HomeImage1} alt="" className="relative z-10 h-[34px] w-[34px] rounded-full border-2 border-sage-50 object-cover shadow-sm bg-white" />
            </div>
            <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-charcoal-200 text-charcoal-500 bg-white hover:bg-charcoal-900 hover:text-white hover:border-charcoal-900 transition-all shadow-sm">
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="hidden shrink-0 sm:block relative">
          <div className="relative mt-2 mr-2">
            <img
              src={HomeImage1}
              alt="Nutritional food"
              className="h-[210px] w-[160px] rounded-[24px] object-cover shadow-md"
            />
            {/* Nutritionist floating card */}
            <div className="absolute -bottom-4 -left-6 flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2.5 shadow-xl border border-white/40">
              <img src={nutritionist} alt="Nutritionist" className="h-9 w-9 rounded-full object-cover" />
              <div>
                <p className="text-[11px] font-bold text-charcoal-900">Nutritionists</p>
                <p className="text-[10px] font-medium text-charcoal-400 mt-0.5">Dr. Richard Lee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
