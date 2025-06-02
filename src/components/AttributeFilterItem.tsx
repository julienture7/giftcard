import React, { useId } from 'react';
import { Check, X } from 'lucide-react';
import { RadioGroup } from './ui/radio-group';

interface AttributeItemProps {
  id: string;
  name: string;
  count: number;
  icon: React.ReactNode;
  iconColor: string;
  value: string;
  onChange: (value: string) => void;
}

const AttributeFilterItem: React.FC<AttributeItemProps> = ({ 
  id, 
  name, 
  count, 
  icon, 
  iconColor, 
  value, 
  onChange 
}) => {
  const baseId = useId();
  const radioName = `attr-${id}`;

  const IconForState = ({ state }: { state: "yes" | "no" | "empty" }) => {
    if (state === "yes") return <Check className={`mr-2 size-3 shrink-0 opacity-100 ${iconColor}`} />;
    if (state === "no") return <X className={`mr-2 size-3 shrink-0 opacity-100 ${iconColor}`} />;
    return <>{icon}</>; // Default icon for 'empty\' state
  };

  return (
    <fieldset className="relative flex max-w-full min-w-0 items-center text-sm text-white cursor-pointer py-1">
      <legend className="sr-only">{name} ({count})</legend>
      
      <RadioGroup 
        name={radioName} 
        value={value} 
        onChange={onChange}
        className="flex items-center"
      >
        {/* Custom styled radio buttons */}
        <div className="flex items-center">
          <label
            htmlFor={`${baseId}-yes`}
            className={`border-night-500 bg-night-600 relative flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-l-sm border border-r-0 
                        ${value === 'yes' ? 'bg-green-600' : 'hover:bg-night-500'} 
                        transition-colors`}
          >
            <input 
              type="radio" 
              id={`${baseId}-yes`} 
              name={radioName} 
              value="yes" 
              checked={value === 'yes'}
              onChange={() => onChange('yes')}
              className="sr-only" 
            />
            <Check className={`size-3 ${value === 'yes' ? 'text-white' : 'text-gray-400'}`} />
          </label>

          <div className="bg-night-400 border-night-500 h-4 w-px border-y"></div>

          <label
            htmlFor={`${baseId}-no`}
            className={`border-night-500 bg-night-600 relative flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-r-sm border border-l-0 
                        ${value === 'no' ? 'bg-red-600' : 'hover:bg-night-500'} 
                        transition-colors`}
          >
            <input 
              type="radio" 
              id={`${baseId}-no`} 
              name={radioName} 
              value="no" 
              checked={value === 'no'}
              onChange={() => onChange('no')}
              className="sr-only" 
            />
            <X className={`size-3 ${value === 'no' ? 'text-white' : 'text-gray-400'}`} />
          </label>
          
          {/* Invisible radio for 'empty' state to make the label clickable */}
          <input
            type="radio"
            id={`${baseId}-empty`}
            name={radioName}
            value=""
            checked={value === ''}
            onChange={() => onChange('')}
            className="sr-only"
          />
        </div>

        <label 
          htmlFor={`${baseId}-empty`} 
          className={`ml-2 flex min-w-0 cursor-pointer items-center ${value !== '' ? 'font-bold' : 'font-normal'}`}
        >
          <IconForState state={value as "yes" | "no" | "empty"} />
          <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">{name}</span>
          <span className="text-day-500 ml-2 font-normal">{count}</span>
        </label>
      </RadioGroup>
    </fieldset>
  );
};

export default AttributeFilterItem;