'use strict';
const mmphandler = require('mmp-errors').handler;
let Api = function() {};

Api.prototype.unitInit = function(units) {
  this.ctrl = units.require('controller');
};

Api.prototype.calls = [ 'call' ];

Api.prototype.callSchema = function() {
  return {
    auth: 'required',
    title: 'Proxy',
    description: 'Http proxy',
    request: {
      type: 'object',
      properties: {
        url: {
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
      required: [ 'url', 'method' ],
      additionalProperties: false
    }
  }
};

Api.prototype.call = function(auth, data, cb) {
  this.ctrl.call(data, mmphandler(cb));
};


module.exports = Api;
