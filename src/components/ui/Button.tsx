import { type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-lg hover:shadow-xl',
  secondary:
    'bg-sage-500 text-white hover:bg-sage-600 shadow-md hover:shadow-lg',
  outline:
    'border-2 border-charcoal-200 text-charcoal-800 hover:bg-charcoal-50 hover:border-charcoal-300',
  ghost:
    'text-charcoal-700 hover:bg-charcoal-50',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-full',
  md: 'px-6 py-3 text-sm rounded-full',
  lg: 'px-8 py-4 text-base rounded-full',
};

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        font-medium transition-all duration-300 ease-out
        cursor-pointer select-none
        active:scale-[0.97]
        ${VARIANT_CLASSES[variant]}
        ${SIZE_CLASSES[size]}
        ${className}
      `}
      {...props}
    >
      {children}
      {icon && <span className="flex items-center">{icon}</span>}
    </button>
  );
}
