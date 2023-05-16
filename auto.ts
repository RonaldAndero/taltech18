import * as fs from "fs";

function display(path: string): void {
    console.log(path);
    if (fs.lstatSync(path).isDirectory()) {
        for (let subpath of fs.readdirSync(path)) {
            display(path + "/" + subpath);
        }
    }
}
function findCarInDirectory(path: string, carname: string): void {
    const filenames = fs.readdirSync(path);
    if (filenames.includes(carname)) {
        console.log(`Found ${carname} in ${path}`);
    }
    for (const filename of filenames) {
        const subpath = path + '/' + filename;
        if (fs.lstatSync(subpath).isDirectory()) {
            findCarInDirectory(subpath, carname);
        }
    }
}

display('teekond2');

findCarInDirectory('teekond2', '123ABC.txt');