/** @type {import('tailwindcss').Config} */
export default {
	content: ['index.html', 'src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'my-red': 'hsl(0, 100%, 74%)',
				'my-green': 'hsl(154, 59%, 51%)',
				'my-blue': 'hsl(248, 32%, 49%)',
				'dark-blue': 'hsl(249, 10%, 26%)',
				'grayish-blue': 'hsl(246, 25%, 77%)'
      },
      backgroundImage: {
        desktop: 'url(/assets/images/bg-intro-desktop.png)',
        mobile: 'url(/assets/images/bg-intro-mobile.png)'
			},
			boxShadow: {
				grayishBlue: '0 8px 0 0 #3e3c493f',
				grayishBlueInset: 'inset 0 -4px 0 0 #3e3c493f',
			}
		}
	},
	plugins: []
}

