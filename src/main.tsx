import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routes from './components/Routes.tsx';
import './index.css';

// Apply dark mode and set theme colors immediately to prevent flash of light theme
document.documentElement.classList.add('dark');
document.body.classList.add('js', 'bg-night-700', 'text-day-300');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
