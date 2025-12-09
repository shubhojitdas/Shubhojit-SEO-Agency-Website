import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '', 
  type = 'button',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";
  
  const variants = {
    // Primary: High contrast against background
    primary: "bg-contrast text-primary hover:bg-contrast/90 shadow-[0_0_15px_rgba(var(--text-contrast),0.3)] hover:shadow-[0_0_25px_rgba(var(--text-contrast),0.5)] border border-transparent font-bold",
    
    // Secondary: Subtler background
    secondary: "bg-secondary text-contrast hover:bg-border border border-border",
    
    // Outline: Border only
    outline: "border border-contrast/30 text-contrast bg-transparent hover:border-contrast hover:bg-contrast/10",
    
    // Explicit White (Useful for dark sections specifically, might need adjustment if light mode uses this on white bg)
    // In strict theme mode, 'white' should usually mean 'contrast' if on primary bg, or 'primary' if on contrast bg.
    // For now, let's map it to Surface/Contrast logic.
    white: "bg-surface text-contrast hover:bg-secondary border border-transparent shadow-lg font-bold"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;