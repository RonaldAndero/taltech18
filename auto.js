"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function display(path) {
    console.log(path);
    if (fs.lstatSync(path).isDirectory()) {
        for (var _i = 0, _a = fs.readdirSync(path); _i < _a.length; _i++) {
            var subpath = _a[_i];
            display(path + "/" + subpath);
        }
    }
}
function findCarInDirectory(path, carname) {
    var filenames = fs.readdirSync(path);
    if (filenames.includes(carname)) {
        console.log("Found ".concat(carname, " in ").concat(path));
    }
    for (var _i = 0, filenames_1 = filenames; _i < filenames_1.length; _i++) {
        var filename = filenames_1[_i];
        var subpath = path + '/' + filename;
        if (fs.lstatSync(subpath).isDirectory()) {
            findCarInDirectory(subpath, carname);
        }
    }
}
display('teekond2');
findCarInDirectory('teekond2', '123ABC.txt');
