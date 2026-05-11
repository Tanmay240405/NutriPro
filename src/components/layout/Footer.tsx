import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-charcoal-100 bg-charcoal-50/50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <p className="text-sm font-semibold text-charcoal-800 font-display italic">NutriPro</p>
            <p className="mt-1 text-xs text-charcoal-400">
              © 2026 NutriPro Wellness. Clinical insights for superior living.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="#privacy" className="text-xs text-charcoal-400 hover:text-charcoal-700 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#terms" className="text-xs text-charcoal-400 hover:text-charcoal-700 transition-colors">
              Terms of Service
            </Link>
            <Link to="#support" className="text-xs text-charcoal-400 hover:text-charcoal-700 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
