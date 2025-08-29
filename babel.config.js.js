module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Uncomment if you’re using react-native-reanimated
      // 'react-native-reanimated/plugin',
    ],
  };
};
