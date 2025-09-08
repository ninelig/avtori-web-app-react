// src/components/ui/button.jsx
import React from "react";

const baseStyles =
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  default: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
  outline:
    "border border-gray-300 text-gray-100 hover:bg-gray-800 focus:ring-gray-400",
  ghost: "text-gray-100 hover:bg-gray-800 focus:ring-gray-400",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export function CustomButton({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
