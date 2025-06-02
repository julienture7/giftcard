import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  id,
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const selectRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // Update internal state when prop changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: SelectOption) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    onChange?.(option.value);
  };

  const selectedLabel = options.find(option => option.value === selectedValue)?.label || placeholder;

  return (
    <div id={id} ref={selectRef} className="relative">
      <div
        className={`flex items-center justify-between rounded-md border p-2 cursor-pointer ${className}`}
        onClick={handleToggle}
      >
        <span>{selectedLabel}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md border bg-night-900 border-night-600 shadow-lg">
          {options.map(option => (
            <div
              key={option.value}
              className={`p-2 hover:bg-night-800 cursor-pointer ${
                option.value === selectedValue ? 'bg-night-700 font-medium' : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};