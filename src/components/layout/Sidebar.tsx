import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  PieChart,
  Settings,
  UtensilsCrossed,
  MessageSquare,
  LogOut,
} from 'lucide-react';
import userAvatar from '@/assets/user-avatar.png';
import { USER_PROFILE } from '@/constants';

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive?: boolean;
}

const NAV_ITEMS: SidebarItem[] = [
  { icon: <LayoutDashboard size={18} />, label: 'Overview', href: '/dashboard', isActive: true },
  { icon: <PieChart size={18} />, label: 'Macro Tracker', href: '#macro' },
  { icon: <Settings size={18} />, label: 'Settings', href: '#settings' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-60 flex-col bg-charcoal-50/80 backdrop-blur-md border-r border-charcoal-100">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-2 px-6 pt-24 pb-6">
        <div className="relative">
          <img
            src={userAvatar}
            alt={USER_PROFILE.fullName}
            className="h-16 w-16 rounded-full object-cover ring-2 ring-sage-200 ring-offset-2"
          />
          <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full bg-green-400 border-2 border-white" />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-charcoal-900">{USER_PROFILE.fullName}</p>
          <p className="text-xs text-charcoal-400">{USER_PROFILE.subtitle}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  item.isActive
                    ? 'bg-sage-500 text-white shadow-md'
                    : 'text-charcoal-600 hover:bg-charcoal-100 hover:text-charcoal-900'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="border-t border-charcoal-100 px-4 py-4 space-y-1">
        <Link
          to="#plan"
          className="flex items-center gap-3 rounded-xl bg-sage-500 px-4 py-3 text-sm font-medium text-white shadow-md transition-all hover:bg-sage-600 hover:shadow-lg"
        >
          <UtensilsCrossed size={18} />
          Plan Meal
        </Link>
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-charcoal-500 hover:bg-charcoal-100 transition-colors">
          <MessageSquare size={18} />
          Support
        </button>
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-charcoal-500 hover:bg-charcoal-100 transition-colors">
          <LogOut size={18} />
          Log Out
        </button>
      </div>
    </aside>
  );
}
