import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const CustomSelect = ({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  getIcon = null,
  error = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full flex flex-col gap-1.5" ref={dropdownRef}>
      {label && (
        <label className="text-xs font-semibold uppercase tracking-wider text-content-secondary">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full px-3.5 py-2.5 rounded-xl bg-surface-muted/50 border text-left flex items-center justify-between text-sm transition-all cursor-pointer ${
          isOpen
            ? "border-brand ring-2 ring-brand/30 bg-surface-card"
            : "border-borderline hover:border-brand/40"
        } ${!value ? "text-content-muted" : "text-content-primary font-medium"}`}
      >
        <div className="flex items-center gap-2 truncate">
          {getIcon && value && (
            <span className="text-content-muted">{getIcon(value)}</span>
          )}
          <span className="truncate">{value || placeholder}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-content-muted transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180 text-brand" : ""
          }`}
        />
      </button>

      {/* Custom Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1.5 p-1.5 bg-surface-card border border-borderline rounded-xl shadow-xl animate-in fade-in zoom-in-95 duration-150 max-h-56 overflow-y-auto">
          {options.map((option) => {
            const isSelected = value === option;
            return (
              <div
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-brand/10 text-brand font-semibold dark:bg-brand/20"
                    : "text-content-primary hover:bg-surface-muted hover:text-brand"
                }`}
              >
                <div className="flex items-center gap-2.5 truncate">
                  {getIcon && (
                    <span className={isSelected ? "text-brand" : "text-content-muted"}>
                      {getIcon(option)}
                    </span>
                  )}
                  <span className="truncate">{option}</span>
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 text-brand shrink-0 stroke-[2.5]" />
                )}
              </div>
            );
          })}
        </div>
      )}

      {error && <p className="text-rose-500 text-xs font-medium">{error}</p>}
    </div>
  );
};

export default CustomSelect;
