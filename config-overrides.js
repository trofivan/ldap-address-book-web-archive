const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // change importing css to less
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  );
  // modify less variables
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      //'@body-background': '#aaa'
    }
  })(config, env);

  return config;
};
