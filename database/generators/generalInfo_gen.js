const gen = require('../new_data_generator.js');
const fs = require('fs');

const genData = (start, end, nameArr) => {
  for (let i = start; i <= end; i += 1) {
    let general = gen.generalInfo();
    general.restaurant_name =  nameArr[i - 1];
    let output = `${i}\t`;
  
    for (let prop in general) {
      output += general[prop] + "\t";
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
  const tsvHeader = gen.header();
  console.log(tsvHeader);

  // generate entries
  const nameArr = data.split('\n');
  genData(5000001, 10000000, nameArr);
});