import React from 'react';
import { Github } from 'lucide-react';
import { OnionIcon, I2PIcon } from './icons/NetworkIcons';

const Footer: React.FC = () => (
  <footer className="flex items-center justify-center gap-6 p-4 mt-auto">
    <a 
      href="https://codeberg.org/pluja/kycnotme" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-day-500 flex items-center gap-1 text-sm transition-colors hover:text-gray-200 hover:underline"
    >
      <Github className="h-4 w-4" /> Code
    </a>
    <a 
      href="#" 
      className="text-day-500 flex items-center gap-1 text-sm transition-colors hover:text-gray-200 hover:underline"
    >
      <OnionIcon className="h-4 w-4" /> Tor
    </a>
    <a 
      href="#" 
      className="text-day-500 flex items-center gap-1 text-sm transition-colors hover:text-gray-200 hover:underline"
    >
      <I2PIcon className="h-4 w-4" /> I2P
    </a>
    <a 
      href="/docs/api" 
      className="text-day-500 flex items-center gap-1 text-sm transition-colors hover:text-gray-200 hover:underline"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6h6V2H9z"/>
        <path d="M4 11v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9"/>
        <path d="M10 12v5h4v-5h-4z"/>
      </svg> API
    </a>
    <a 
      href="/about" 
      className="text-day-500 flex items-center gap-1 text-sm transition-colors hover:text-gray-200 hover:underline"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
      </svg> About
    </a>
  </footer>
);

export default Footer;