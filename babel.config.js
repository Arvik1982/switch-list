module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@fonts': './resources/fonts',
            '@images': './resources/assets/images',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
