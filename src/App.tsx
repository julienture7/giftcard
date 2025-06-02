import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    // Force dark theme
    document.documentElement.classList.add('dark');
    // Add js class to body, mimicking original site
    document.body.classList.add('js', 'bg-night-700', 'text-day-300');
  }, []);

  // App component now serves as a minimal shell
  // The actual page rendering is handled by Routes.tsx
  return <></>;
};

export default App;
