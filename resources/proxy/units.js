'use strict';
const Api = require('./api');
const Controller = require('./controller');

module.exports = function() {
  return {
    api: new Api(),
    controller: new Controller()
  }
};
