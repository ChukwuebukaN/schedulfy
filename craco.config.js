/* eslint-disable global-require */
/* eslint-disable prettier/prettier */
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
