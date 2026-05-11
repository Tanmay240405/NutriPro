/* ── Domain Types ── */

export interface MealEntry {
  id: string;
  name: string;
  calories: number;
  time: string;
}

export interface DayPlan {
  day: string;
  shortDay: string;
  meals: MealEntry[];
  isHighlighted?: boolean;
}

export interface ActivityEntry {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  time: string;
}

export interface MacroNutrient {
  name: string;
  current: number;
  target: number;
  unit: string;
  color: string;
}

export interface HydrationData {
  current: number;
  target: number;
  unit: string;
  bars: number[];
}

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}
