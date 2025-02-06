/* eslint-disable react/prop-types */
export function Button({ children, variant = "default", className = "", ...props }) {
    const baseStyles = "px-4 py-2 rounded font-semibold";
    const variants = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      outline: "border border-white text-white hover:bg-white hover:text-black",
    };
    
    return (
      <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  }
  