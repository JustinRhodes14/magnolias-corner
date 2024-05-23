module.exports = function (api) {
    api.cache(true);
  
    const presets = [];
    const plugins = [
        '@babel/plugin-proposal-export-namespace-from'
    ];
  
    return {
      presets,
      plugins
    };
  }