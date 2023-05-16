"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var directory = "kolmapaev/";
var filenames = fs.readdirSync(directory);
var min = parseInt(fs.readFileSync(directory + filenames[0], "utf-8"));
var max = parseInt(fs.readFileSync(directory + filenames[0], "utf-8"));
var min_file = '';
var max_file = '';
for (var _i = 0, filenames_1 = filenames; _i < filenames_1.length; _i++) {
    var filename = filenames_1[_i];
    var value = parseInt(fs.readFileSync(directory + filename, "utf-8"));
    min_file = value < min ? filename : min_file;
    min = value < min ? value : min;
    // find the name of the file with the smallest number
}
for (var _a = 0, filenames_2 = filenames; _a < filenames_2.length; _a++) {
    var filename = filenames_2[_a];
    var value = parseInt(fs.readFileSync(directory + filename, "utf-8"));
    min = value < min ? value : min;
    // find the name of the file with the smallest number
    max_file = value > max ? filename : max_file;
    max = value > max ? value : max;
}
console.log(min + " " + min_file);
console.log(max + " " + max_file);
