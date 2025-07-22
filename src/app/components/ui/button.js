import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'default' | 'icon';
  children: React.ReactNode;
}

const baseStyles =
  'rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

const variants = {
  primary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400',
  outline:
    'border border-green-600 text-green-600 bg-transparent hover:bg-green-50 focus:ring-green-500',
  ghost:
    'bg-transparent text-inherit hover:bg-gray-100 focus:ring-gray-300',
};

const sizes = {
  default: 'px-4 py-2',
  icon: 'p-2 w-10 h-10 flex items-center justify-center',
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
