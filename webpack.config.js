var path = require('path');

module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/js/',
        path: path.resolve(__dirname, 'js'),
        devtoolModuleFilenameTemplate: '[resourcePath]',
        devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]',
    },
    devtool: false,
    mode: 'development'
};