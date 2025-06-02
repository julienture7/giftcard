import React, { createContext, useContext, useState, useEffect } from 'react';

interface RadioGroupContextType {
  value: string;
  onChange: (value: string) => void;
  name: string;
}

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(undefined);

interface RadioGroupProps {
  children: React.ReactNode;
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  children,
  name,
  value: controlledValue,
  defaultValue = '',
  onChange,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(controlledValue || defaultValue);

  useEffect(() => {
    if (controlledValue !== undefined) {
      setInternalValue(controlledValue);
    }
  }, [controlledValue]);

  const handleValueChange = (value: string) => {
    if (controlledValue === undefined) {
      setInternalValue(value);
    }
    onChange?.(value);
  };

  return (
    <RadioGroupContext.Provider
      value={{
        value: internalValue,
        onChange: handleValueChange,
        name,
      }}
    >
      <div className={className}>{children}</div>
    </RadioGroupContext.Provider>
  );
};

interface RadioButtonProps {
  children?: React.ReactNode;
  value: string;
  id?: string;
  className?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  children,
  value,
  id,
  className = '',
}) => {
  const context = useContext(RadioGroupContext);
  
  if (!context) {
    throw new Error('RadioButton must be used within a RadioGroup');
  }
  
  const { name, value: selectedValue, onChange } = context;
  const isChecked = selectedValue === value;
  
  return (
    <label className={`inline-flex items-center ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
        className="sr-only"
      />
      {children}
    </label>
  );
};