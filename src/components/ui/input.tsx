import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    
    // Base classes for input styling
    const baseClasses = "block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-white text-gray-900 placeholder-gray-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200";
    
    // Error or normal styling
    const borderClasses = error 
      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
      : "border-gray-300 focus:border-green-500 focus:ring-green-500";
    
    const finalClasses = `${baseClasses} ${borderClasses} ${className || ''}`;
    
    return (
      <div className="space-y-1">
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={finalClasses}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"; 