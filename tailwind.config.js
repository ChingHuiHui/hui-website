module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        '0': '0',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        'full': '100%',
       }
    }
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'assets/css/**/*.css',
      'components/**/*.vue',
    ],
  },}