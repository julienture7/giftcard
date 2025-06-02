/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Custom theme colors
        night: {
          400: 'hsl(220 13% 40%)', // Lighter mid-dark
          500: 'hsl(220 13% 30%)', // Mid-dark
          600: 'hsl(220 13% 20%)', // Darker
          700: 'hsl(220 13% 12%)', // Main dark background (bg-night-700)
          800: 'hsl(220 15% 10%)', // Card backgrounds (bg-night-800)
          900: 'hsl(220 17% 7%)',  // Header (bg-night-900)
        },
        day: {
          100: 'hsl(210 40% 98%)', // Very light text
          200: 'hsl(210 40% 90%)',
          300: 'hsl(210 20% 75%)', // Main light text (text-day-300)
          400: 'hsl(210 15% 65%)', // Secondary light text
          500: 'hsl(210 10% 50%)', // Placeholder/icon text
          600: 'hsl(210 10% 40%)',
        },
        score: {
          1: 'hsl(0 72% 51%)',   // red-600
          2: 'hsl(25 95% 53%)',  // orange-600
          3: 'hsl(43 96% 56%)',  // yellow-500 (amber-500)
          4: 'hsl(80 60% 45%)',  // lime-500
          5: 'hsl(142 71% 45%)', // green-500
        },
        'verified-badge': '#40e6c2',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "0.25rem",
      },
      // Screen sizes for responsive design
      screens: {
        '2xs': '320px',
        'xs': '480px',
      },
    },
  },
  plugins: [],
};