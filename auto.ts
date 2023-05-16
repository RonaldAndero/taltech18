import * as fs from 'fs';

let directory="kolmapaev/";
let filenames:string[] = fs.readdirSync(directory);
let min:number=parseInt(fs.readFileSync(directory+filenames[0], "utf-8"));
let max:number=parseInt(fs.readFileSync(directory+filenames[0], "utf-8"));
let min_file = '';
let max_file = '';
for(let filename of filenames){
    let value:number=parseInt(fs.readFileSync(directory+filename, "utf-8"));
    min_file = value<min?filename:min_file;
    min=value<min?value:min;
    // find the name of the file with the smallest number

}
for (let filename of filenames) {
    let value:number=parseInt(fs.readFileSync(directory+filename, "utf-8"));
    min = value < min ? value : min;
    // find the name of the file with the smallest number
    max_file = value > max ? filename : max_file;
    max = value > max ? value : max;
}

console.log(min + " " + min_file)
console.log(max + " " + max_file)