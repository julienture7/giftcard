import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routes from './components/Routes.tsx';
import './index.css';

// Apply dark mode and set theme colors immediately to prevent flash of light theme
document.documentElement.classList.add('dark');
document.body.classList.add('js', 'bg-night-700', 'text-day-300');

// Add global CSS variables for consistent animations and transitions
const style = document.createElement('style');
style.textContent = `
  :root {
    --color-primary: #10b981;
    --color-primary-hover: #059669;
    --color-night-700: #1a1b26;
    --color-night-800: #16161e;
    --color-night-900: #13131a;
    --transition-standard: 0.2s ease-in-out;
  }

  /* Global animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Hide scrollbars but keep functionality */
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
