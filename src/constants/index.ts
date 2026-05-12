import type { DayPlan, ActivityEntry, MacroNutrient, HydrationData, NavItem } from '@/types';

/* ── Navigation ── */
export const LANDING_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Chat', href: '#chat' },
];

export const DASHBOARD_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard', isActive: true },
  { label: 'Community', href: '#community' },
  { label: 'Meal Planner', href: '#meal-planner' },
  { label: 'Resources', href: '#resources' },
  { label: 'Chat', href: '#chat' },
];

/* ── Landing Page Tags ── */
export const SERVICE_TAGS = [
  'Nutrition',
  'Supplements',
  'Vitamins',
  'Healthy Food',
  'Consultation',
];

/* ── Weekly Planner Data ── */
export const WEEKLY_PLAN: DayPlan[] = [
  {
    day: 'Monday',
    shortDay: 'MON',
    meals: [
      { id: 'm1', name: 'Oatmeal, Almond Butter, Banana', calories: 350, time: '8:00 AM' },
      { id: 'm2', name: 'Quinoa Salad', calories: 420, time: '1:00 PM' },
      { id: 'm3', name: 'Grilled Salmon', calories: 480, time: '7:00 PM' },
    ],
  },
  {
    day: 'Tuesday',
    shortDay: 'TUE',
    isHighlighted: true,
    meals: [
      { id: 't1', name: 'Smoothie, Granola', calories: 310, time: '8:00 AM' },
      { id: 't2', name: 'Avocado Toast, Spinach Smoothie', calories: 390, time: '12:30 PM' },
      { id: 't3', name: 'Chicken Breast, Brown Rice', calories: 520, time: '7:00 PM' },
      { id: 't4', name: 'Grilled Chicken, Quinoa', calories: 450, time: '8:30 PM' },
    ],
  },
  {
    day: 'Wednesday',
    shortDay: 'WED',
    meals: [
      { id: 'w1', name: 'Greek Yogurt, Berries', calories: 280, time: '8:00 AM' },
      { id: 'w2', name: 'Turkey Wrap', calories: 410, time: '12:00 PM' },
    ],
  },
  {
    day: 'Thursday',
    shortDay: 'THU',
    meals: [],
  },
  {
    day: 'Friday',
    shortDay: 'FRI',
    meals: [],
  },
  {
    day: 'Saturday',
    shortDay: 'SAT',
    meals: [],
  },
  {
    day: 'Sunday',
    shortDay: 'SUN',
    meals: [],
  },
];

/* ── Dashboard Data ── */
export const RECENT_ACTIVITIES: ActivityEntry[] = [
  {
    id: 'a1',
    icon: '🐟',
    title: 'Grilled Salmon Quinoa Bowl',
    subtitle: 'Lunch · 540 kcal',
    time: '12:30 PM',
  },
  {
    id: 'a2',
    icon: '🏋️',
    title: 'HIIT Cardio Session',
    subtitle: 'Workout · 45 min',
    time: '08:15 AM',
  },
  {
    id: 'a3',
    icon: '💊',
    title: 'Omega-3 Supplement',
    subtitle: 'Vitamins',
    time: '07:30 AM',
  },
];

export const MACRO_NUTRIENTS: MacroNutrient[] = [
  { name: 'Protein', current: 125, target: 150, unit: 'g', color: '#7a9466' },
  { name: 'Carbs', current: 210, target: 250, unit: 'g', color: '#95ab83' },
  { name: 'Fat', current: 55, target: 70, unit: 'g', color: '#b4c4a8' },
  { name: 'Fiber', current: 22, target: 30, unit: 'g', color: '#d1dbc9' },
];

export const HYDRATION_DATA: HydrationData = {
  current: 2.4,
  target: 3.0,
  unit: 'L',
  bars: [85, 70, 90, 60, 95, 75, 80],
};

export const CALORIE_DATA = {
  consumed: 1840,
  target: 2200,
  remaining: 360,
};

export const USER_PROFILE = {
  name: 'Alex',
  fullName: 'Alex Miller',
  subtitle: 'Wellness Enthusiast',
};
