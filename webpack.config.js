const path = require('path');
module.exports = {
  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream'),
      "util": require.resolve("util/"),
    },
    alias: {
      '@': path.resolve('resources/js'),
    },
  },
};