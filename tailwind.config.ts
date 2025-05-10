
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: 'hsl(var(--primary))',
				'primary-foreground': 'hsl(var(--primary-foreground))',
				secondary: 'hsl(var(--secondary))',
				'secondary-foreground': 'hsl(var(--secondary-foreground))',
				destructive: 'hsl(var(--destructive))',
				'destructive-foreground': 'hsl(var(--destructive-foreground))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				accent: 'hsl(var(--accent))',
				'accent-foreground': 'hsl(var(--accent-foreground))',
				popover: 'hsl(var(--popover))',
				'popover-foreground': 'hsl(var(--popover-foreground))',
				card: 'hsl(var(--card))',
				'card-foreground': 'hsl(var(--card-foreground))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				love: {
					'soft-pink': '#FFDEE2',
					'soft-peach': '#FDE1D3',
					'soft-purple': '#E5DEFF',
					'soft-blue': '#D3E4FD',
					'soft-yellow': '#FEF7CD',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'bounce-in': {
					'0%': { transform: 'scale(0)', opacity: '0' },
					'60%': { transform: 'scale(1.2)', opacity: '1' },
					'100%': { transform: 'scale(1)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-in': {
					'0%': { transform: 'translateY(50px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'cloud-move': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100vw)' }
				},
				'balloon-pop': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'20%': { transform: 'scale(1.2)', opacity: '1' },
					'30%': { transform: 'scale(0.8)', opacity: '1' },
					'40%': { transform: 'scale(1.1)', opacity: '1' },
					'100%': { transform: 'scale(2)', opacity: '0' }
				},
				'cupid-shoot': {
					'0%': { transform: 'translateX(-100%) translateY(0)' },
					'40%': { transform: 'translateX(calc(50vw - 50px)) translateY(-30px)' },
					'60%': { transform: 'translateX(calc(50vw - 25px)) translateY(0)' },
					'70%': { transform: 'translateX(calc(50vw)) translateY(10px)' },
					'100%': { transform: 'translateX(100vw) translateY(20px)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'bounce-in': 'bounce-in 0.5s ease-out forwards',
				'fade-in': 'fade-in 1s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards',
				'cloud-move': 'cloud-move 8s linear forwards',
				'balloon-pop': 'balloon-pop 0.5s ease-out forwards',
				'cupid-shoot': 'cupid-shoot 3s ease-out forwards',
			},
			fontFamily: {
				'bubblegum': ['Bubblegum Sans', 'cursive'],
				'rounded': ['Varela Round', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
