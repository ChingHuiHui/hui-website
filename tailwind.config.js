module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
      },
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7f7f7',
        200: '#e3e3e3',
        300: '#aeaeae',
        400: '#8b8b8b',
        500: '#6d6d6d',
        600: '#2a2a2a',
      },
      primary: {
        light: '#586fb7',
        DEFAULT: '#3a4b7c',
        dark: '#2e3b60',
      },
      secondary: {
        light: '#e6a295',
        DEFAULT: '#ea8675',
        dark: '#ea6148',
      },
    },
    extend: {
      fontFamily: {
        'body': ['Noto Sans TC', 'Sans-serif'],
        'h1': ['Fjalla One', 'Sans-serif']
      },
      minWidth: {
        '0': '0',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        'full': '100%',
       }
    },
  },
}