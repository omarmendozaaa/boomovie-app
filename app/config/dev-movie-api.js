const appConfig = require('./dev.js');

const movieapiConfig = Object.assign({}, appConfig, {
  app_properties : {
    mock: false,
    host: 'https://api.themoviedb.org/3',
    api_key: 'b0db98acdce096d79c99134516b89287'
  }
});

module.exports = movieapiConfig;
