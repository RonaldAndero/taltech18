import * as fs from 'fs';

const startdir:string = "teekond1/";

function displayDirectoryData(dirname: string) {
    console.log(dirname);
    let filenames: string[] = fs.readdirSync(startdir + dirname);
    let maxMileage = 0;
    let maxMileageCar = '';
    for (let filename of filenames) {
        let contents: string = fs.readFileSync(startdir + dirname + '/' + filename, 'utf-8');
        let dailyMileage = parseInt(contents);
        if (dailyMileage > 30) {
            console.log('  ' + filename, contents);
            if (dailyMileage > maxMileage) {
                maxMileage = dailyMileage;
                maxMileageCar = filename.slice(0, -4); // remove the file extension ".txt"
            }
        }
    }
    console.log(`  Max mileage car: ${maxMileageCar} (${maxMileage} km)`);
}


let dirnames:string[] = fs.readdirSync(startdir);
for(let dirname of dirnames){
    displayDirectoryData(dirname);
}