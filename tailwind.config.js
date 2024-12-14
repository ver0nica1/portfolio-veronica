/** @type {import('tailwindcss').Config} */
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
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  		},
  	},

	//Estilos para el contenedor principal de la página en el layout de grid
	container: {
		center: true,
		padding: '15px',			
	},
	//Define el punto de ruptura para el diseño responsivo
	screens:{
		sm: '640px', //para pantallas pequeñas
		md: '768px', //medianas
		lg: '1024px', //grandes
		xl: '1280px' //extra grandes
	},
	fontFamily:{
		primary: "var(--font-jetbrainsMono)",
	},
	
  },
  plugins: [require("tailwindcss-animate")],
};
