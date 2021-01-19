const withLess = require('@zeit/next-less');
module.exports = withLess({
    cssModules: true ,   
    webpack: (config) => {
      config.plugins.map((value) => {
        if (value.options) {
          value.options.ignoreOrder = true;
        }
      });

      return config;
    },
  });