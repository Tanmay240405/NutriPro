import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import type { NavItem } from '@/types';

interface NavbarProps {
  items: NavItem[];
  variant?: 'landing' | 'dashboard';
  rightSlot?: React.ReactNode;
}

export function Navbar({ items, variant = 'landing', rightSlot }: NavbarProps) {
  const isLanding = variant === 'landing';

  return (
    <header className={`w-full ${isLanding ? 'absolute top-0 left-0 z-50' : ''}`}>
      <nav className="mx-auto flex max-w-7xl items-center px-8 py-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-sage-200/60 transition-colors group-hover:bg-sage-200">
            <Leaf className="h-5 w-5 text-sage-700" />
          </div>
          {!isLanding && (
            <span className="text-xl font-bold tracking-tight font-display italic text-charcoal-900">
              NutriPro
            </span>
          )}
        </Link>

        {/* Nav Links – positioned right next to logo for landing */}
        <ul
          className={`hidden items-center gap-8 md:flex ${
            isLanding ? 'ml-10' : 'ml-auto mr-auto'
          }`}
        >
          {items.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  item.isActive
                    ? 'text-charcoal-900'
                    : 'text-charcoal-400 hover:text-charcoal-900'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Slot – pushed to far right */}
        {rightSlot && (
          <div className="ml-auto flex items-center gap-4">
            {rightSlot}
          </div>
        )}
      </nav>
    </header>
  );
}
