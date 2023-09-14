module.exports = {
  purge: [],
  plugins: {
    'postcss-preset-env': {
      stage: 1,
      autoprefixer: {
        flexbox: 'no-2009',
      },
    },
    'tailwindcss': {}, // Tailwind CSS se koristi
    'postcss-nesting': {}, // Postcss-nesting se koristi nakon Tailwind CSS
  },
  future: {
    // ...
  },
};
