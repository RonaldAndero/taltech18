import * as fs from "fs";
function sumDirectoryData(dirname:string):number{
    let filenames:string[] = fs.readdirSync(dirname);
    let sum: number=0;
    for(let filename of filenames){
        let contents:string=fs.readFileSync(dirname+"/"+filename, "utf-8");
        sum+=parseInt(contents);
    }
    return sum;
}

function givendaymax(dirname:string):number {
    let filenames: string[] = fs.readdirSync(dirname);
    let max: number = 0;
    for (let filename of filenames) {
        let value: number = parseInt(fs.readFileSync(dirname + filename, "utf-8"));
        max = value > max ? value : max;
    }
    return max;
}

const both = sumDirectoryData("teekond1/kolmapaev/") + sumDirectoryData("teekond1/neljapaev/");
console.log(sumDirectoryData("teekond1/kolmapaev/"));
console.log(sumDirectoryData("teekond1/neljapaev/"));
console.log(both);

console.log(givendaymax("teekond1/kolmapaev/"));