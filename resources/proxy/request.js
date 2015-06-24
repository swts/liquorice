"use strict";
let v = require("../validators");

let Request = function () {};

Request.prototype.unitInit = function(units) {};

Request.prototype.get = function() {
	return {
		url: v.url,
		method: v.opt(v.method),
		headers: v.opt(v.any),
		body: v.opt(v.any),
		json: v.opt(v.bool)
	};
};


module.exports = Request;
