import React, { useState, useRef, useEffect } from 'react';

interface SliderProps {
  id?: string;
  min?: number;
  max: number;
  step?: number;
  value: number[];
  onChange?: (value: number[]) => void;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({
  id,
  min = 0,
  max,
  step = 1,
  value,
  onChange,
  className = '',
}) => {
  const [currentValue, setCurrentValue] = useState(value[0]);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Update internal state when prop changes
  useEffect(() => {
    setCurrentValue(value[0]);
  }, [value]);

  const calculateValue = (clientX: number) => {
    if (!sliderRef.current) return currentValue;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = (clientX - rect.left) / rect.width;
    let newValue = min + percentage * (max - min);
    
    // Apply step
    newValue = Math.round(newValue / step) * step;
    
    // Clamp value
    newValue = Math.max(min, Math.min(max, newValue));
    
    return newValue;
  };

  const handleSliderClick = (e: React.MouseEvent) => {
    const newValue = calculateValue(e.clientX);
    setCurrentValue(newValue);
    onChange?.([newValue]);
  };

  const handleMouseDown = () => {
    const handleMouseMove = (e: MouseEvent) => {
      const newValue = calculateValue(e.clientX);
      setCurrentValue(newValue);
      onChange?.([newValue]);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const percentage = ((currentValue - min) / (max - min)) * 100;

  return (
    <div 
      id={id}
      ref={sliderRef}
      className={`relative h-2 w-full rounded-full bg-night-600 cursor-pointer ${className}`}
      onClick={handleSliderClick}
    >
      <div 
        className="absolute h-full rounded-full bg-green-500"
        style={{ width: `${percentage}%` }}
      ></div>
      <div 
        className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white shadow-md cursor-grab active:cursor-grabbing"
        style={{ left: `calc(${percentage}% - 0.5rem)` }}
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
};