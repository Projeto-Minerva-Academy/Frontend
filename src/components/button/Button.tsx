import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void; 
  to?: string;          
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, to, className }) => {
  const commonClasses = `relative py-1 px-7  text-white text-base font-bold nded-full overflow-hidden bg-gray-400 rounded-full hover:text-white hover:bg-gray-500 ${className}`;
  
  if (to) {
     return (
      <Link to={to} className={`${commonClasses}`}>
        {children}
      </Link>
    );
  }


  return (
    <button
      onClick={onClick}
      className={`${commonClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;
