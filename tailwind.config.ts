import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  keyframes: {
			'pulse-glow': {
				'0%, 100%': { boxShadow: '0 0 20px 0px rgba(255, 255, 255, 0.3)' },
				'50%': { boxShadow: '0 0 20px 8px rgba(255, 255, 255, 0.4)' }
			}, 
			'light-pulse-glow': {
  				'0%, 100%': { boxShadow: '0 0 20px 0px rgba(77, 77, 245, 0.6)' },
  				'50%': { boxShadow: '0 0 20px 8px rgba(77, 77, 245, 0.9)' }
			},
		},
		animation: { 
			'pulse-glow': 'pulse-glow 3s infinite', 
			'light-pulse-glow': 'light-pulse-glow 3s infinite', 
			'card-pulse-glow': 'pulse-glow 3s infinite', 
			'light-card-pulse-glow': 'light-pulse-glow 3s infinite', 
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
