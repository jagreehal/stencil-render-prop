exports.config = {
  namespace: 'stencil-render-prop',
  generateDistribution: true,
  generateWWW: true,
  bundles: [
    { components: ['mouse-tracker', 'mouse-state'] },
    { components: ['mouse-cat'] },
    { components: ['mouse-placeholder'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
