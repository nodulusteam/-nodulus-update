
/*                 _       _           
                 | |     | |          
  _ __   ___   __| |_   _| |_   _ ___ 
 | '_ \ / _ \ / _` | | | | | | | / __|
 | | | | (_) | (_| | |_| | | |_| \__ \
 |_| |_|\___/ \__,_|\__,_|_|\__,_|___/
 @nodulus open source | ©Roi ben haim  ®2016    
 */
/// <reference path="../typings/main.d.ts" />
import {update} from "./update";
var fs = require("fs-extra");
var path = require('path');

export class check {
    constructor() {
    }
    public checkUpdates() {
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
    }
}