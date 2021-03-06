const gen = require('../new_data_generator.js');
const fs = require('fs');

const genData = (start, end, nameArr) => {
  for (let i = start; i <= end; i += 1) {
    let general = gen.generalInfo();
    general.restaurant_name =  nameArr[i - 1];
    let output = `${i}|`;
  
    for (let prop in general) {
      output += general[prop] + "|";
    }
    output = output.slice(0, output.length - 1);
    console.log(output);
  }
} 

fs.readFile(__dirname+ '/../names.csv', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }

  // header for tsv
  // const tsvHeader = gen.header();
  // console.log(tsvHeader);

  // generate entries
  const nameArr = data.split('\n');
  genData(7000001, 8000000, nameArr);
});