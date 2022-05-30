//var path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx', '.ts', '.js', '.json', '.svg', '.jpg'],
        alias: {
          // '@components': './components',
          // '@assets': './assets',
          // '@config': './config',
          // '@constants': './constants',
          // '@context': './context',
          // '@helpers': './helpers',
          // '@navigations': './navigations',
          // '@screens': './screens',
          // '@utils': './utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
