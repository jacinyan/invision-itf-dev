module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'entry',
        corejs: {
          version: '3',
          proposals: true,
        },
      },
    ],
  ],
  exclude: [/\bcore-js\b/, /\bwebpack\/buildin\b/, /@babel\/runtime-corejs3/],
}
