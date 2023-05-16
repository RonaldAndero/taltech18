import * as fs from "fs";

let filenames:string[] = fs.readdirSync('kolmapaev');
console.log(filenames);

const filePath = 'kolmapaev/test2.txt';

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const symbolCount = data.length;
    console.log(`The file contains ${symbolCount} symbols.`);
});