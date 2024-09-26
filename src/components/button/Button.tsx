interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-secondary text-white py-2 px-6 rounded-lg shadow-md hover:bg-primary transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
