import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';
import { SERVICE_TAGS } from '@/constants';
import HomeImage1 from '@/assets/HomeImage1.png';
import nutritionist from '@/assets/nutritionist.png';

export function HeroSection() {
  return (
    <section id="hero" className="relative mx-auto max-w-[1536px] px-8 pt-6 pb-24">
      <div className="grid grid-cols-1 items-start gap-12 lg:gap-16 lg:grid-cols-12">
        {/* ── Left Column ── */}
        <div className="lg:col-span-5 pt-28 space-y-8 xl:pl-8">
          {/* Main Heading */}
          <h1 className="text-[4.5rem] leading-[1.05] font-extrabold tracking-[-0.02em] text-charcoal-900 xl:text-[5.5rem]">
            We Take
            <br />
            Care About
            <br />
            Your{' '}
            <span className="font-display italic font-bold text-sage-500">
              Health
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-[340px] text-[16px] leading-relaxed text-charcoal-500">
            Make sure your daily nutrition is sufficient. Consult your problem
            about nutrition with us.
          </p>

          {/* CTA Row */}
          <div className="flex items-center gap-5 pt-2">
            <Link to="/dashboard">
              <Button variant="primary" size="lg" className="px-8 py-4 text-[15px]">
                Get Started
              </Button>
            </Link>

            {/* Avatar Stack */}
            <div className="flex -space-x-3">
              {[HomeImage1, nutritionist, HomeImage1].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-12 w-12 rounded-full border-[3px] border-white object-cover shadow-sm"
                />
              ))}
            </div>

            {/* Arrow Button */}
            <button className="flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-charcoal-200 text-charcoal-600 transition-all duration-200 hover:bg-charcoal-900 hover:text-white hover:border-charcoal-900">
              <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Service Tags */}
          <div className="flex flex-wrap gap-3 pt-8">
            {SERVICE_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-charcoal-200 px-5 py-2.5 text-[13px] font-medium text-charcoal-600 transition-all hover:bg-sage-50 hover:border-sage-300 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right Column – Hero Image ── */}
        <div className="lg:col-span-7 relative min-h-[700px] w-full flex items-start justify-end lg:-mr-2">
          {/* Main Image */}
          <div className="relative z-10 w-full h-[700px] overflow-hidden rounded-[3.5rem]">
            <img
              src={HomeImage1}
              alt="Fresh healthy food arrangement"
              className="w-full h-full object-cover mix-blend-multiply bg-sage-200/50"
            />
          </div>

          {/* Top Right Cutout Wrapper */}
          <div className="absolute top-0 right-0 z-20 bg-white rounded-bl-[3rem] pl-6 pb-6">
            {/* Corner smoothing SVGs */}
            <svg className="absolute top-0 right-full w-10 h-10 text-white fill-current" viewBox="0 0 100 100">
              <path d="M0 0 H100 V100 A100 100 0 0 0 0 0 Z" />
            </svg>
            <svg className="absolute top-full right-0 w-10 h-10 text-white fill-current" viewBox="0 0 100 100">
              <path d="M0 0 H100 V100 A100 100 0 0 0 0 0 Z" />
            </svg>
            
            <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[#bcd9ad] shadow-sm cursor-pointer hover:bg-[#a5c494] transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-white text-white">
                <ArrowUpRight size={20} className="font-light" />
              </div>
            </div>
          </div>

          {/* Bottom Left Cutout Wrapper */}
          <div className="absolute bottom-0 left-0 z-20 bg-white rounded-tr-[3rem] pr-6 pt-6">
            {/* Corner smoothing SVGs */}
            <svg className="absolute bottom-0 left-full w-10 h-10 text-white fill-current" viewBox="0 0 100 100">
              <path d="M0 0 V100 H100 A100 100 0 0 1 0 0 Z" />
            </svg>
            <svg className="absolute bottom-full left-0 w-10 h-10 text-white fill-current" viewBox="0 0 100 100">
              <path d="M0 0 V100 H100 A100 100 0 0 1 0 0 Z" />
            </svg>

            <div className="flex items-center gap-5 rounded-[2.5rem] bg-[#f2f4f2] px-6 py-4 border border-charcoal-100/30">
              <img
                src={nutritionist}
                alt="Dr. Richard Lee"
                className="h-14 w-14 rounded-full object-cover ring-[3px] ring-white shadow-sm"
              />
              <div className="pr-4">
                <p className="text-[17px] font-bold text-charcoal-900 tracking-[-0.01em]">
                  Nutritionists
                </p>
                <p className="text-[14px] text-charcoal-500 mt-0.5">Dr. Richard Lee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
