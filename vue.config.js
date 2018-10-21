let tailwindcss = require('tailwindcss');

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss('./tailwind.js'),
          require('autoprefixer'),
        ],
      },
    },
  },
};
