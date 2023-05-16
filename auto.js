"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var startdir = "teekond1/";
function displayDirectoryData(dirname) {
    console.log(dirname);
    var filenames = fs.readdirSync(startdir + dirname);
    var maxMileage = 0;
    var maxMileageCar = '';
    for (var _i = 0, filenames_1 = filenames; _i < filenames_1.length; _i++) {
        var filename = filenames_1[_i];
        var contents = fs.readFileSync(startdir + dirname + '/' + filename, 'utf-8');
        var dailyMileage = parseInt(contents);
        if (dailyMileage > 30) {
            console.log('  ' + filename, contents);
            if (dailyMileage > maxMileage) {
                maxMileage = dailyMileage;
                maxMileageCar = filename.slice(0, -4); // remove the file extension ".txt"
            }
        }
    }
    console.log("  Max mileage car: ".concat(maxMileageCar, " (").concat(maxMileage, " km)"));
}
var dirnames = fs.readdirSync(startdir);
for (var _i = 0, dirnames_1 = dirnames; _i < dirnames_1.length; _i++) {
    var dirname = dirnames_1[_i];
    displayDirectoryData(dirname);
}
