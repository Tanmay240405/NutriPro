import { ArrowUpRight } from 'lucide-react';
import consultChild from '@/assets/consult-child.png';
import consultDiet from '@/assets/consult-diet.png';

interface ConsultCardProps {
  title: string;
  image: string;
  gradient: string;
}

function ConsultCard({ title, image, gradient }: ConsultCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl ${gradient} p-6 min-h-[220px] flex flex-col justify-end cursor-pointer transition-transform hover:scale-[1.02]`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 ${gradient} opacity-70`} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h4 className="text-xl font-bold text-charcoal-900 leading-snug max-w-[180px]">
          {title}
        </h4>
        <button className="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-charcoal-700 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md">
          <ArrowUpRight size={14} />
        </button>
      </div>
    </div>
  );
}

export function ConsultationCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <ConsultCard
        title="Consult The Best Nutrition For Your Child"
        image={consultChild}
        gradient="bg-gradient-to-br from-sage-100 to-sage-200"
      />
      <ConsultCard
        title="Consult Diet Foods Suitable For Your Body"
        image={consultDiet}
        gradient="bg-gradient-to-br from-sage-200 to-olive-500/20"
      />
    </div>
  );
}
