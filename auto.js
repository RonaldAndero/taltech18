"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function minDayData(dirname) {
    var values = fs.readdirSync(dirname).map(function (filename) {
        return parseInt(fs.readFileSync(dirname + "/" + filename, "utf-8"));
    });
    return Math.min.apply(Math, values);
}
function maxDayData(dirname) {
    var values = fs.readdirSync(dirname).map(function (filename) {
        return parseInt(fs.readFileSync(dirname + "/" + filename, "utf-8"));
    });
    return Math.max.apply(Math, values);
}
function minDaysData(startdir) {
    var daynames = fs.readdirSync(startdir);
    var values = daynames.map(function (dayname) { return minDayData(startdir + dayname); });
    return Math.min.apply(Math, values);
}
function maxDaysData(startdir) {
    var daynames = fs.readdirSync(startdir);
    var values = daynames.map(function (dayname) { return maxDayData(startdir + dayname); });
    return Math.max.apply(Math, values);
}
console.log(minDayData("teekond1/kolmapaev/"));
console.log(maxDayData("teekond1/kolmapaev/"));
console.log(minDaysData("teekond1/"));
console.log(maxDaysData("teekond1/"));
