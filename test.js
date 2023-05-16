"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var filenames = fs.readdirSync('kolmapaev');
console.log(filenames);
var filePath = 'kolmapaev/test2.txt';
fs.readFile(filePath, 'utf-8', function (err, data) {
    if (err) {
        console.error(err);
        return;
    }
    var symbolCount = data.length;
    console.log("The file contains ".concat(symbolCount, " symbols."));
});
