import React from 'react';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  type = 'button',
  className = '',
}) => {
  const base =
    'inline-flex items-center justify-center px-8 py-2 rounded-full font-medium text-sm transition-colors duration-200';

  const variants = {
    primary: 'border border-primary bg-primary text-white hover:bg-transparent hover:text-primary transition duration-500',
    outline: 'border border-primary text-primary hover:bg-primary hover:text-white transition duration-500',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${disabled ? disabledStyles : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
