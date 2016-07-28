/*                 _       _
                 | |     | |
  _ __   ___   __| |_   _| |_   _ ___
 | '_ \ / _ \ / _` | | | | | | | / __|
 | | | | (_) | (_| | |_| | | |_| \__ \
 |_| |_|\___/ \__,_|\__,_|_|\__,_|___/
 @nodulus open source | ©Roi ben haim  ®2016
 */
/// <reference path="../typings/main.d.ts" />
"use strict";
var ModuleUtility = require('@nodulus/modules/lib/utility').ModuleUtility;
var modules = new ModuleUtility();
var async = require("async");
var update = (function () {
    function update() {
    }
    update.prototype.installUpdates = function (updates) {
        var deferred = require('Q').defer();
        var arr = [];
        for (var key in updates) {
            if (key.indexOf('@nodulus') === 0)
                arr.push(key);
        }
        async.each(arr, modules.npm_install, function () {
            deferred.resolve(null);
            //callback(null);
        });
        return deferred.promise;
    };
    return update;
}());
exports.update = update;
