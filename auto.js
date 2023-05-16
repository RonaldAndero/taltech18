"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function sumDirectoryData(dirname) {
    var filenames = fs.readdirSync(dirname);
    var sum = 0;
    for (var _i = 0, filenames_1 = filenames; _i < filenames_1.length; _i++) {
        var filename = filenames_1[_i];
        var contents = fs.readFileSync(dirname + "/" + filename, "utf-8");
        sum += parseInt(contents);
    }
    return sum;
}
function givendaymax(dirname) {
    var filenames = fs.readdirSync(dirname);
    var max = 0;
    for (var _i = 0, filenames_2 = filenames; _i < filenames_2.length; _i++) {
        var filename = filenames_2[_i];
        var value = parseInt(fs.readFileSync(dirname + filename, "utf-8"));
        max = value > max ? value : max;
    }
    return max;
}
var both = sumDirectoryData("teekond1/kolmapaev/") + sumDirectoryData("teekond1/neljapaev/");
console.log(sumDirectoryData("teekond1/kolmapaev/"));
console.log(sumDirectoryData("teekond1/neljapaev/"));
console.log(both);
console.log(givendaymax("teekond1/kolmapaev/"));
