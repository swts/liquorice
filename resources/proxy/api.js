'use strict';
const mmphandler = require('mm-errors').handler;

const Api = function() {
  this.calls = [ 'call' ];
};

Api.prototype.__init = function(units) {
  this.ctrl = units.require('controller');
};

Api.prototype.call = function() {
  return {
    auth: {
      provider: 'user',
      required: true
    },
    title: 'Proxy',
    description: 'Http proxy',
    request: {
      type: 'object',
      properties: {
        uri: {
          type: 'string',
          format: 'uri'
        },

        method: {
          type: 'string',
          enum: [ 'get', 'post' ],
          default: 'get'
        },

        headers: { type: 'object' },
        body: { type: 'object' },
        json: { type: 'boolean' }
      },
      required: [ 'uri', 'method' ],
      additionalProperties: false
    },

    call: (auth, data, cb) => {
      const response = mmphandler(cb);
      this.ctrl.call(data)
        .then(res => {
          let status = res.statusCode;
          if (status >= 200 && status < 300) {
            response(null, { status: status, body: res.body });
          } else {
            response(null, { status: status });
          }
        })
        .catch(err => response(null, { status: err.statusCode }))
    }
  }
};

module.exports = Api;
