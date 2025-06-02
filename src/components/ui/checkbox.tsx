import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked: controlledChecked,
  onChange,
  className = '',
}) => {
  const [isChecked, setIsChecked] = useState(controlledChecked || false);

  // Update internal state when prop changes
  useEffect(() => {
    if (controlledChecked !== undefined) {
      setIsChecked(controlledChecked);
    }
  }, [controlledChecked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    
    if (controlledChecked === undefined) {
      setIsChecked(newChecked);
    }
    
    onChange?.(newChecked);
  };

  return (
    <div className="relative flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="sr-only"
      />
      <div
        className={`flex h-4 w-4 items-center justify-center rounded border border-night-500 ${
          isChecked ? 'bg-green-500' : 'bg-transparent'
        } ${className}`}
      >
        {isChecked && <Check className="h-3 w-3 text-black" />}
      </div>
    </div>
  );
};