'use strict';
const got = require('got');

const Controller = function() {};

Controller.prototype.__init = function(units) {
  const settings = units.require('core.settings').proxy || {};
  this.followRedirect = settings.followRedirect;
  this.json = settings.json;
};

Controller.prototype.call = function(data) {
  let opts = {
    method: data.method,
    headers: data.headers,
    json: typeof data.json === 'boolean' ? data.json : this.json,
    followRedirect: this.followRedirect
  };

  if (data.body) {
    if (opts.method === 'get') {
      opts.query = data.body;
    } else {
      opts.body = data.body;
    }
  }

  return got(data.uri, opts);
};


module.exports = Controller;
