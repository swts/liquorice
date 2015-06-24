"use strict";
let UnitSet = require("units").UnitSet;

let proxy = require("./resources/proxy/units");

module.exports = function () {
	let units = new UnitSet();
	units.addSet("proxy", proxy());
	return units;
};
