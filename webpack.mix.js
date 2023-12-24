let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/assets/styles/sass/app.scss', 'public/css')
    .copyDirectory('resources/assets/images', 'public/images')
