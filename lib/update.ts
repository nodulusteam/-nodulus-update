/*                 _       _           
                 | |     | |          
  _ __   ___   __| |_   _| |_   _ ___ 
 | '_ \ / _ \ / _` | | | | | | | / __|
 | | | | (_) | (_| | |_| | | |_| \__ \
 |_| |_|\___/ \__,_|\__,_|_|\__,_|___/
 @nodulus open source | ©Roi ben haim  ®2016    
 */
/// <reference path="../typings/main.d.ts" />

var ModuleUtility =require('@nodulus/modules/lib/utility').ModuleUtility;
var modules = new ModuleUtility();
var async = require("async");
export class update {
    constructor() {
    }
    public installUpdates(updates: any) {
        var deferred = require('Q').defer();
        var arr: string[] = [];
        for (var key in updates) {
            if (key.indexOf('@nodulus') === 0)
                arr.push(key);
        }
        async.each(arr, modules.npm_install, () => {
            deferred.resolve(null);
            //callback(null);
        });
        return deferred.promise;
    }
}