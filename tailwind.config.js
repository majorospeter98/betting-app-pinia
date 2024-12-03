
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
        'primary': '#35b8f0',
        'betslip': 'rgb(247, 246, 246)',
        'border' : 'rgba(129, 126, 126, 0.041)'
      },
      boxShadow:{
        '3xl' : 'rgba(0, 0, 0, 0.25) 0px 5px 10px'
      }
    },

  },
  plugins: [],
}

