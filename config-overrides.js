const path = require("path");

module.exports = {
  webpack(config) {
    const srcDir = path.resolve(__dirname, "src");
    const aliases = {
      apis: path.resolve(srcDir, "apis"),
      store: path.resolve(srcDir, "store"),
      ui: path.resolve(srcDir, "ui"),
      config: path.resolve(srcDir, "config"),
    };

    config.resolve.alias = Object.assign({}, config.resolve.alias, aliases);

    return config;
  },
  jest(config) {
    config.moduleNameMapper = Object.assign({}, config.moduleNameMapper, {
      "^lodash-es$": "lodash",
    });

    return config;
  },
};
