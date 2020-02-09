module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      '@babel/env',
      [
        '@babel/preset-react',
        {
          development: process.env.BABEL_ENV !== 'build',
        },
      ],
      '@babel/preset-typescript',
    ],
    ignore: ['node_modules'],
  };
};
