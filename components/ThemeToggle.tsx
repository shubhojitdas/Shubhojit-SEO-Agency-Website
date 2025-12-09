import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-muted hover:text-contrast hover:bg-contrast/10 transition-colors duration-200 focus:outline-none"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-white" />
      ) : (
        <Moon size={20} className="text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;