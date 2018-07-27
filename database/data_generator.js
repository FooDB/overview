const faker = require('faker');b
const starters = ['the', 'a'];
const adjectives = ['adroit', 'animistic', 'antic', 'arcadian', 'baleful',
  'bellicose', 'bilious', 'boorish', 'calamitous', 'caustic', 'cerulean', 'concomitant',
  'contumacious', 'corpulent', 'crapulous','didactic', 'dilatory', 'dowdy',
  'efficacious', 'effulgent', 'egregious', 'endemic', 'equanimous','fastidious',
  'feckless', 'fecund', 'friable', 'fulsome', 'garrulous', 'guileless', 'gustatory',
  'histrionic', 'hubristic', 'incendiary', 'insidious', 'insolent', 'intransigent',
  'invidious','jejune', 'jocular', 'judicious', 'lachrymose', 'limpid', 'loquacious',
  'luminous', 'mannered', 'mendacious', 'meretricious', 'minatory', 'munificent',
  'obtuse', 'parsimonious', 'pendulous', 'pernicious', 'pervasive', 'petulant',
  'platitudinous', 'precipitate', 'propitious', 'querulous', 'quiescent', 'rebarbative',
  'recalcitant', 'redolent', 'risible', 'ruminative', 'sagacious', 'salubrious',
  'sartorial', 'sclerotic', 'serpentine', 'spasmodic', 'strident', 'taciturn', 'tenacious',
  'tremulous', 'turbulent', 'turgid', 'ubiquitous', 'uxorious', 'verdant', 'voluble',
  'voracious', 'wheedling', 'withering', 'zealous'];

const nouns = [ 'ninja', 'chair', 'pancake', 'statue', 'unicorn', 'rainbows', 'laser',
'senor', 'bunny', 'captain', 'nibblets', 'cupcake', 'carrot', 'gnomes', 'glitter',
'potato', 'salad', 'toejam', 'curtains', 'beets', 'toilet', 'exorcism', 'stick figures',
'mermaid eggs', 'sea barnacles', 'dragons', 'jellybeans', 'snakes', 'dolls', 'bushes',
'cookies', 'apples', 'ice cream', 'ukulele', 'kazoo', 'banjo', 'opera singer', 'circus',
'trampoline', 'carousel', 'carnival', 'locomotive', 'hot air balloon', 'praying mantis',
'animator', 'artisan', 'artist', 'colorist', 'inker', 'coppersmith', 'director', 'designer',
'flatter', 'stylist', 'leadman', 'limner', 'make-up artist', 'model', 'musician', 'penciller',
'producer', 'scenographer', 'set decorator', 'silversmith', 'teacher', 'auto mechanic',
'beader', 'bobbin boy', 'clerk of the chapel', 'filling station attendant', 'foreman',
'maintenance engineering', 'mechanic', 'miller', 'moldmaker', 'panel beater', 'patternmaker',
'plant operator', 'sawfiler', 'soaper', 'stationary engineer', 'wheelwright', 'woodworkers'];

const cuisine = ['thai', 'french', 'steak', 'italian', 'japanese', 'indian', 'cajun/creole',
'pizza', 'malayasian', 'gastropub', 'american new', 'california', 'vegan', 'vegetarian',
'steakhouse', 'sushi', 'molecular gastronomy'];

const payment = ['Visa', 'Discover', 'Mastercard', 'American Express'];

const randomEl = function(list) {
    const i = Math.floor(Math.random() * list.length);
    return list[i];
}

const getRandomName = function() {
  return randomEl(starters) + ' ' + randomEl(adjectives) + ' ' + randomEl(nouns);
}

const getRandomAddress = function() {
  const street = faker.address.streetAddress();
  const city = faker.address.city();
  const state = faker.address.stateAbbr();
  const zipcode = faker.address.zipCode();

  return street + ' ' + city + ', '+ state +' ' + zipcode;
}

const getRandomCuisines = function() {
  const size = faker.random.number() % 10;
  const cuisines = [];

  for (const i = 0; i < size; i ++) {
    cuisines.push(randomEl(cuisine));
  }

  return cuisines;
}

const randomPayment = function () {
  const size = Math.floor(Math.random() * list.length);
  const result = [];
  for(var i = 0; i < size; i ++) {
    result.push(randomEl(payment));
  }

  return result;
}



const generatePrimaryRecord = function() {
  const primaryRecord = {};
  primaryRecord[name] = getRandomName();
  primaryRecord[description] = faker.lorem.paragraph();
  primaryRecord[phone] = faker.phone.phoneNumber();
  primaryRecord[website] = faker.internet.url();
  primaryRecord[giftcard] = Math.random() >= 0.5;
  primaryRecord[avgrating] = Math.floor(Math.random() * Math.floor(5));
  primaryRecord[numratings] = Math.floor(Math.random() * Math.floor(5000));
  primaryRecord[toptags] = faker.lorem.sentence.split(" ");
  primaryRecord[additionaltags] = faker.lorem.sentence.split(" ");
  primaryRecord[cuisines] = getRandomCuisines();
  primaryRecord[pricerange] = Math.floor(Math.random() * Math.floor(3));
  primaryRecord[paymentoptions] = randomPayment();
  primaryRecord[address] = getRandomAddress();
  primaryRecord[neighborhood] = faker.address.county();
  primaryRecord[crossstreet] = faker.address.streetName();
  primaryRecord[parking] = Math.random() >= 0.5;
  primaryRecord[style] = faker.lorem.words();
  primaryRecord[dresscode] = faker.lorem.sentence();
  primaryRecord[chef] = faker.name.firstName() + ' ' + faker.name.lastName();
  primaryRecord[privateparty] =  Math.random() >= 0.5;
  primaryRecord[ppfacilities] = faker.phone.phoneNumberFormat();
  primaryRecord[ppcontact] = faker.phone.phoneNumberFormat();
  primaryRecord[catering] = Math.random() >= 0.5;
  primaryRecord[coordinates] = [faker.address.longitude(), faker.address.latitude()];
  primaryRecord[hours] = {
    Breakfast: "9AM - 12PM",
    Lunch: "12PM - 3PM",
    Dinner: "5PM - 10PM"
    };

}

module.exports = {
  generatePrimaryRecord
};
