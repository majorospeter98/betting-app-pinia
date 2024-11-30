
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'linear-bg': 'linear-gradient(179.87deg, #DCEEFF 0.12%, rgba(220, 240, 255, 0) 102.65%)',
      },
      screens:{
      'max-md': { max: '850px' }, 
      },
      colors:{
        'primary': '#35b8f0'
      }
    },

  },
  plugins: [],
}

