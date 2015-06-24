"use strict";
let Api = function () {
	this.ctrl = undefined;
};

Api.prototype.resource = "proxy";

Api.prototype.unitInit = function (units) {
	this.ctrl = units.require("controller");
};

Api.prototype.get = function (auth, data, cb) {
	this.ctrl.get(data, cb);
};


module.exports = Api;
