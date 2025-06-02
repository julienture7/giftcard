import React from 'react';

export const OnionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" {...props}><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20m0-6a4 4 0 0 0 0-8v2a2 2 0 1 1 0 4zm8-4a8 8 0 0 1-8 8v-2a6 6 0 0 0 0-12V4a8 8 0 0 1 8 8"/></svg>
);

export const I2PIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" fillRule="evenodd" clipRule="evenodd" {...props}><path d="M14.23 4.28a6.37 6.37 0 0 0-5.15 11.63c.41.21.6.7.46 1.14l-1.05 3.14.13.05 1.03-3.1a.95.95 0 0 1 1.1-.63 6.37 6.37 0 0 0 3.48-12.23M8.82 2.66A8.27 8.27 0 1 1 11.2 18.5l-1.09 3.27a.95.95 0 0 1-1.22.59l-1.92-.7a.95.95 0 0 1-.58-1.19l1.1-3.3a8.27 8.27 0 0 1 1.33-14.5Zm5.46 9.21.15.02a3.08 3.08 0 1 0-2.51-4.06 3.08 3.08 0 1 0 .14 2.36c.43.86 1.24 1.5 2.22 1.68m-.48-3.61a1.18 1.18 0 0 1 2.18.88l-.02-.04a1.87 1.87 0 0 0-2.16-.84M9.15 8a1.18 1.18 0 0 0-1.17 1.38 1.86 1.86 0 0 1 2.23-.72C10 8.26 9.6 8 9.15 8"/></svg>
);

export const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);