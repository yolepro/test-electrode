module.exports = {
  cache: {
    cacheId: 'LargeReact',
    runtimeCaching: [{
      handler: 'fastest',
      urlPattern: '\/$'
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: '#FFFFFF',
    title: 'LargeReact',
    short_name: 'PWA',
    theme_color: '#FFFFFF'
  }
};
