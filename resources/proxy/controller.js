'use strict';
let request = require('request');

let Controller = function() {};

Controller.prototype.unitInit = function(units) {
  let settings = units.require('core.settings').proxy || {};
  this.maxRedirects = settings.maxRedirects;
  this.json = settings.json;
};

Controller.prototype.call = function(data, cb) {
  let opts = {
    url: data.uri,
    method: data.method,
    headers: data.headers,
    json: typeof data.json === 'boolean' ? data.json : this.json,
    maxRedirects: this.maxRedirects
  };

  if (data.body) {
    if (opts.method === 'get') {
      opts.qs = data.body;
    } else {
      opts.body = data.body;
    }
  }

  request(opts, function(error, response, body) {
    if (error) {
      cb(error);
      return;
    }

    let status = response.statusCode;
    if (status >= 200 && status < 300) {
      cb(null, { status: status, body: body });
    } else {
      cb(null, { status: status });
    }
  });
};


module.exports = Controller;
