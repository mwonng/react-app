const path = require("path");
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

// Export a function. Accept the base config as the only param.
module.exports = (baseConfig, env) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  const defaultConfig = genDefaultConfig(baseConfig, env);
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });
  defaultConfig.resolve.extensions.push(".scss", ".sass");
  // Return the altered config
  return defaultConfig;
};