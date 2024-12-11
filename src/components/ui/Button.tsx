import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
}

export default function Button({ 
  variant = 'primary', 
  children, 
  icon: Icon,
  onClick 
}: ButtonProps) {
  const baseStyles = "flex items-center px-8 py-2 rounded transition-opacity";
  const variants = {
    primary: "bg-white text-black hover:bg-opacity-80",
    secondary: "bg-gray-500 bg-opacity-70 text-white hover:bg-opacity-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {Icon && <Icon className="w-6 h-6 mr-2" />}
      {children}
    </button>
  );
}