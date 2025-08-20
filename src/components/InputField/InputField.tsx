import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

const variantClasses = {
  filled: "bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500",
  outlined: "border border-gray-400 focus:ring-2 focus:ring-blue-500",
  ghost: "bg-transparent border-b border-gray-400 focus:border-blue-500",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
}) => {
  const [internalValue, setInternalValue] = useState(value ?? "");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setInternalValue("");
    onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="relative flex items-center">
        <input
          value={internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          type={type === "password" && !showPassword ? "password" : "text"}
          className={`w-full rounded-md ${sizeClasses[size]} ${variantClasses[variant]} 
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            ${invalid ? "border-red-500 focus:ring-red-500" : ""}`}
          aria-invalid={invalid}
          aria-describedby={helperText || errorMessage ? `${label}-desc` : undefined}
        />
        {clearable && internalValue && (
          <button
            type="button"
            className="absolute right-8 text-gray-500"
            onClick={handleClear}
            aria-label="Clear input"
          >
            ✕
          </button>
        )}
        {type === "password" && (
          <button
            type="button"
            className="absolute right-2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Toggle password visibility"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        )}
      </div>
      {helperText && !invalid && (
        <span id={`${label}-desc`} className="text-xs text-gray-500">
          {helperText}
        </span>
      )}
      {invalid && errorMessage && (
        <span id={`${label}-desc`} className="text-xs text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  );
};
