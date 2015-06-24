"use strict";
var valid = require("sweets-valid");
var v = valid.validators;

module.exports = {
	str: v.str,
	url: v.url,
	opt: v.opt,
	any: v.any,
	method: v.or("get", "put", "post", "delete")
};
