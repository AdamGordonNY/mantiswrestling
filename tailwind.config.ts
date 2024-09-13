import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		container: {
  			center: 'true',
  			padding: {
  				DEFAULT: '1rem',
  				sm: '2rem',
  				lg: '4rem',
  				xl: '5rem',
  				'2xl': '6rem'
  			},
  			screens: {
  				mq450: {
  					max: '450px'
  				},
  				lg: '1024px',
  				xl: '1280px',
  				'2xl': '1536px'
  			}
  		},
  		fontFamily: {
  			bebas: ["Bebas Neue", "babas"],
  			oswald: ["Oswald", "oswald"]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			nyanza: {
  				'100': '#16461d',
  				'200': '#2b8c3a',
  				'300': '#4cc85e',
  				'400': '#92dd9d',
  				'500': '#d8f3dc',
  				'600': '#e0f5e3',
  				'700': '#e8f8ea',
  				'800': '#effaf1',
  				'900': '#f7fdf8',
  				DEFAULT: '#d8f3dc'
  			},
  			celadon: {
  				'100': '#173c24',
  				'200': '#2d7847',
  				'300': '#44b46b',
  				'400': '#7dce99',
  				'500': '#b7e4c7',
  				'600': '#c7ead3',
  				'700': '#d5efde',
  				'800': '#e3f4e9',
  				'900': '#f1faf4',
  				DEFAULT: '#b7e4c7'
  			},
  			celadondark: {
  				'100': '#153423',
  				'200': '#296845',
  				'300': '#3e9b68',
  				'400': '#61c08c',
  				'500': '#95d5b2',
  				'600': '#aaddc1',
  				'700': '#c0e6d1',
  				'800': '#d5eee0',
  				'900': '#eaf7f0',
  				DEFAULT: '#95d5b2'
  			},
  			mint: {
  				'100': '#122d20',
  				'200': '#255a3f',
  				'300': '#37875f',
  				'400': '#49b47e',
  				'500': '#74c69d',
  				'600': '#91d2b1',
  				'700': '#acddc5',
  				'800': '#c8e9d8',
  				'900': '#e3f4ec',
  				DEFAULT: '#74c69d'
  			},
  			mintdark: {
  				'100': '#10251b',
  				'200': '#1f4b36',
  				'300': '#2f7052',
  				'400': '#3f966d',
  				'500': '#52b788',
  				'600': '#75c5a0',
  				'700': '#97d4b8',
  				'800': '#bae2cf',
  				'900': '#dcf1e7',
  				DEFAULT: '#52b788'
  			},
  			sea_green: {
  				'100': '#0d1d16',
  				'200': '#1a3a2b',
  				'300': '#265741',
  				'400': '#337457',
  				'500': '#40916c',
  				'600': '#58b68b',
  				'700': '#82c8a8',
  				'800': '#abdac5',
  				'900': '#d5ede2',
  				DEFAULT: '#40916c'
  			},
  			dartmouth_green: {
  				'100': '#091510',
  				'200': '#122b20',
  				'300': '#1c4030',
  				'400': '#255640',
  				'500': '#2d6a4f',
  				'600': '#439d75',
  				'700': '#69bf98',
  				'800': '#9bd4ba',
  				'900': '#cdeadd',
  				DEFAULT: '#2d6a4f'
  			},
  			brunswick_green: {
  				'100': '#050d0a',
  				'200': '#0a1a14',
  				'300': '#10271e',
  				'400': '#153527',
  				'500': '#1b4332',
  				'600': '#327d5e',
  				'700': '#4cb78b',
  				'800': '#87cfb1',
  				'900': '#c3e7d8',
  				DEFAULT: '#1b4332'
  			},
  			dark_green: {
  				'100': '#020604',
  				'200': '#030b08',
  				'300': '#05110d',
  				'400': '#061611',
  				'500': '#081c15',
  				'600': '#1d664c',
  				'700': '#32b084',
  				'800': '#6bd5b0',
  				'900': '#b5ead8',
  				DEFAULT: '#081c15'
  			},
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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
