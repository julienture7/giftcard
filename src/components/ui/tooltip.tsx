import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  children: React.ReactElement;
  content: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

export const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  position = 'top' 
}) => {
  const [show, setShow] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const calculatePosition = () => {
    if (!childRef.current || !tooltipRef.current) return;

    const childRect = childRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    let x = 0;
    let y = 0;

    switch (position) {
      case 'top':
        x = childRect.left + (childRect.width / 2) - (tooltipRect.width / 2);
        y = childRect.top - tooltipRect.height - 5;
        break;
      case 'right':
        x = childRect.right + 5;
        y = childRect.top + (childRect.height / 2) - (tooltipRect.height / 2);
        break;
      case 'bottom':
        x = childRect.left + (childRect.width / 2) - (tooltipRect.width / 2);
        y = childRect.bottom + 5;
        break;
      case 'left':
        x = childRect.left - tooltipRect.width - 5;
        y = childRect.top + (childRect.height / 2) - (tooltipRect.height / 2);
        break;
    }

    // Adjust for viewport edges
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + tooltipRect.width > window.innerWidth) {
      x = window.innerWidth - tooltipRect.width;
    }
    if (y + tooltipRect.height > window.innerHeight) {
      y = window.innerHeight - tooltipRect.height;
    }

    setCoords({ x, y });
  };

  useEffect(() => {
    if (show) {
      calculatePosition();
    }
  }, [show]);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <>
      <div 
        ref={childRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-flex"
      >
        {children}
      </div>
      {show && (
        <div
          ref={tooltipRef}
          className="fixed z-50 bg-zinc-700 text-white border-zinc-700 px-2 py-1 text-sm rounded shadow-lg pointer-events-none"
          style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`,
          }}
        >
          {content}
        </div>
      )}
    </>
  );
};