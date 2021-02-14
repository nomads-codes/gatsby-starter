// ─────────────────────────────────────────────────────────────────────────────
// Import
// ─────────────────────────────────────────────────────────────────────────────

const path = require('path');

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

module.exports = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~components': path.resolve(__dirname, '../src/components'),
        '~containers': path.resolve(__dirname, '../src/containers'),
        '~blocks': path.resolve(__dirname, '../src/blocks'),
        '~hooks': path.resolve(__dirname, '../src/hooks'),
        '~theme': path.resolve(__dirname, '../src/theme'),
        '~utils': path.resolve(__dirname, '../src/utils'),
      },
    },
  });
};
