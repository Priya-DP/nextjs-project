const Button = ({ children, onClick, variant, className }) => {
    const baseStyle = "px-4 py-2 rounded-md text-lg font-medium focus:outline-none";
    const variantStyle = variant === "outline" ? "border-2 border-gray-300" : "bg-blue-500 text-white";
    return (
      <button
        className={`${baseStyle} ${variantStyle} ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export { Button };
  