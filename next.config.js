module.exports = {
  rewrites() {
    return [
      {
        source: '/public/:slug*',
        destination: '/static/:slug*', // Matched parameters can be used in the destination
      },
    ];
  },
};
