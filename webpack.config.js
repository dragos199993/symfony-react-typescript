var Encore = require('@symfony/webpack-encore');

Encore

  // Build
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())

  // SCSS
  .addStyleEntry('css/app', './assets/scss/app.scss')
  .enableSassLoader()

  // Typescript + React
  .addEntry('app', './assets/js/app.tsx')
  .enableReactPreset()
  .enableTypeScriptLoader();

module.exports = Encore.getWebpackConfig();
