module.export = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-preset-env")({ stage: 1 }),
    require("postcss-clean"),
  ],
};
