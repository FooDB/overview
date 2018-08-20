const siege = require('siege');

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

let holder = siege().concurrent(30).on(3001);
let randNum;
for (let i = 0; i < 40000; i++) {
  // randNum = (i % 2 === 0 ? getRandomIntInclusive(9000201, 9000250) : getRandomIntInclusive(9000001, 10000000)); // target last 10% in database
  // randNum = getRandomIntInclusive(9000001, 10000000);
  randNum = getRandomIntInclusive(9510001, 9520000);
  holder = holder.for(1).times.get(`/restaurant/${randNum}/general`);
};

holder.attack();

