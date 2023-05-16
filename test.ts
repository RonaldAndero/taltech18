import * as fs from "fs";

let directory="kolmapaev/";
let sum:number=0;
let filenames:string[] = fs.readdirSync(directory);
for(let filename of filenames){
    let contents:string=fs.readFileSync(directory+filename, "utf-8");
    sum+=parseInt(contents);
}
console.log(sum)