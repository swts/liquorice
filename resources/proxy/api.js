'use strict';
const mmphandler = require('mmp-errors').handler;

let Api = function() {};

Api.prototype.unitInit = function(units) {
  this.ctrl = units.require('controller');
};

Api.prototype.calls = [ 'call' ];

Api.prototype.callSchema = function() {
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
    }
  }
};

Api.prototype.call = function(auth, data, cb) {
  this.ctrl.call(data, mmphandler(cb));
};


module.exports = Api;
