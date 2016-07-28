"use strict";
var fs = require("fs-extra");
var path = require('path');
var check = (function () {
    function check() {
    }
    check.prototype.checkUpdates = function () {
        var ncu = require('npm-check-updates');
        return ncu.run({
            // Always specify the path to the package file 
            packageFile: 'package.json',
            // Any command-line option can be specified here. 
            // These are set by default:             
            greatest: true,
            silent: false,
            jsonUpgraded: true
        });
    };
    return check;
}());
exports.check = check;
