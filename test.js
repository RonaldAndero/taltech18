"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var directory = "kolmapaev/";
var sum = 0;
var filenames = fs.readdirSync(directory);
for (var _i = 0, filenames_1 = filenames; _i < filenames_1.length; _i++) {
    var filename = filenames_1[_i];
    var contents = fs.readFileSync(directory + filename, "utf-8");
    sum += parseInt(contents);
}
console.log(sum);
