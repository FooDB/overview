const siege = require('siege');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

let holder = siege().concurrent(25).on(3001);
let randNum;
for (let i = 0; i < 50000; i++) {
  randNum = getRandomIntInclusive(1, 10000000);
  holder = holder.for(1).times.get(`/restaurant/${randNum}/`);
};

holder.attack();

