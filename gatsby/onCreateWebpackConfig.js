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
        '~utils': path.resolve(__dirname, '../src/utils'),
      },
    },
  });
};
