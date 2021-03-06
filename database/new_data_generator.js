const faker = require ('faker');

const starters = ['the', 'a'];
const adjectives = [
  'adroit',
  'animistic',
  'antic',
  'arcadian',
  'baleful',
  'bellicose',
  'bilious',
  'boorish',
  'calamitous',
  'caustic',
  'cerulean',
  'concomitant',
  'contumacious',
  'corpulent',
  'crapulous',
  'didactic',
  'dilatory',
  'dowdy',
  'efficacious',
  'effulgent',
  'egregious',
  'endemic',
  'equanimous',
  'fastidious',
  'feckless',
  'fecund',
  'friable',
  'fulsome',
  'garrulous',
  'guileless',
  'gustatory',
  'histrionic',
  'hubristic',
  'incendiary',
  'insidious',
  'insolent',
  'intransigent',
  'invidious',
  'jejune',
  'jocular',
  'judicious',
  'lachrymose',
  'limpid',
  'loquacious',
  'luminous',
  'mannered',
  'mendacious',
  'meretricious',
  'minatory',
  'munificent',
  'obtuse',
  'parsimonious',
  'pendulous',
  'pernicious',
  'pervasive',
  'petulant',
  'platitudinous',
  'precipitate',
  'propitious',
  'querulous',
  'quiescent',
  'rebarbative',
  'recalcitant',
  'redolent',
  'risible',
  'ruminative',
  'sagacious',
  'salubrious',
  'sartorial',
  'sclerotic',
  'serpentine',
  'spasmodic',
  'strident',
  'taciturn',
  'tenacious',
  'tremulous',
  'turbulent',
  'turgid',
  'ubiquitous',
  'uxorious',
  'verdant',
  'voluble',
  'voracious',
  'wheedling',
  'withering',
  'zealous',
];
const nouns = [
  'ninja',
  'chair',
  'pancake',
  'statue',
  'unicorn',
  'rainbows',
  'laser',
  'senor',
  'bunny',
  'captain',
  'nibblets',
  'cupcake',
  'carrot',
  'gnomes',
  'glitter',
  'potato',
  'salad',
  'toejam',
  'curtains',
  'beets',
  'toilet',
  'exorcism',
  'stick figures',
  'mermaid eggs',
  'sea barnacles',
  'dragons',
  'jellybeans',
  'snakes',
  'dolls',
  'bushes',
  'cookies',
  'apples',
  'ice cream',
  'ukulele',
  'kazoo',
  'banjo',
  'opera singer',
  'circus',
  'trampoline',
  'carousel',
  'carnival',
  'locomotive',
  'hot air balloon',
  'praying mantis',
  'animator',
  'artisan',
  'artist',
  'colorist',
  'inker',
  'coppersmith',
  'director',
  'designer',
  'flatter',
  'stylist',
  'leadman',
  'limner',
  'make-up artist',
  'model',
  'musician',
  'penciller',
  'producer',
  'scenographer',
  'set decorator',
  'silversmith',
  'teacher',
  'auto mechanic',
  'beader',
  'bobbin boy',
  'clerk of the chapel',
  'filling station attendant',
  'foreman',
  'maintenance engineering',
  'mechanic',
  'miller',
  'moldmaker',
  'panel beater',
  'patternmaker',
  'plant operator',
  'sawfiler',
  'soaper',
  'stationary engineer',
  'wheelwright',
  'woodworkers',
];
const cuisine = [
  'thai',
  'french',
  'steak',
  'italian',
  'japanese',
  'indian',
  'cajun creole',
  'pizza',
  'malayasian',
  'gastropub',
  'american new',
  'california',
  'vegan',
  'vegetarian',
  'steakhouse',
  'sushi',
  'molecular gastronomy',
  'mediteranean',
];
const payment = [
  'Visa',
  'Discover',
  'Mastercard',
  'American Express',
  'cash',
  'check',
];
const tags = faker.lorem.sentence ().split (' ');
const meals = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Bar'];
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const times = [
  'Closed',
  '9AM - Noon',
  '9AM - 3PM',
  'Noon - 3PM',
  '5PM - 9PM',
  '5PM - 2AM',
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const randomEl = list => {
  let i = Math.floor (Math.random () * list.length);
  return list[i];
};

const getRandomName = () => {
  return (
    randomEl (starters) + ' ' + randomEl (adjectives) + ' ' + randomEl (nouns)
  );
};

const getRandomPaymentOptions = () => {
  let numPayments = getRandomInt(2, payment.length);
  let str = '';
  for (let i = 0; i < numPayments; i += 1) {
    str += payment[i] + ',';
  }
  str = str.slice(0, str.length - 1);
  return str;
};

const getRandomCuisines = () => {
  let numCuisines = getRandomInt(2, cuisine.length);
  let str = '';
  for (let i = 0; i < numCuisines; i += 1) {
    let current = randomEl(cuisine);
    if (str.indexOf(current) === -1) {
      str += current + ',';
    };
  }
  str = str.slice(0, str.length - 1);
  return str;
}

const getRandomTags = () => {
  let numTags = getRandomInt(3, 6);
  let str = '';
  for (let i = 0; i < numTags; i += 1) {
    let current = randomEl(tags);
    if (str.indexOf(current) === -1) {
      str += current + ',';
    };
  }
  str = str.slice(0, str.length - 1);
  return str;
}

const getRandomHours = () => {
  let numPeriods = getRandomInt(3, 6);
  let str = '';
  for (let i = 0; i < numPeriods; i += 1) {
    let meal = randomEl(meals);
    if (str.indexOf(meal) === -1) {
      str += meal + ': ' + randomEl(days) + ' ' + randomEl(times) + ',';
    };
  }
  str = str.slice(0, str.length - 1);
  return str;
}

let count = 10000000;
const generalInfo = () => {
  count++;
  let info = {
    id: count,
    restaurant_name: getRandomName (),
    description: faker.lorem.sentences().replace(",", " "),
    telephone: faker.phone.phoneNumberFormat (),
    website: faker.internet.url (),
    chef: faker.name.firstName (),
    avg_rating: Math.floor (Math.random () * 5),
    num_ratings: Math.floor (Math.random () * 10000),
    style: faker.lorem.words (),
    dress_code: faker.lorem.words (),
    catering: faker.lorem.sentences().replace(",", " "),
    price_range: faker.lorem.words (),
    private_dining: faker.lorem.sentences().replace(",", " "),
    private_url: faker.internet.url (),
    latitude: faker.address.latitude (),
    longitude: faker.address.longitude (),
    addr: faker.address.streetAddress().replace("'", "\'"),
    neighborhood: faker.address.county (),
    cross_street: faker.address.streetAddress().replace("'", "\'"),
    parking: faker.lorem.sentences().replace(",", " "),
    public_transport: faker.lorem.sentences().replace(",", " "),
    payment_options: getRandomPaymentOptions(),
    cuisines: getRandomCuisines(),
    top_tags: getRandomTags(),
    additional_tags: getRandomTags(),
    hours: getRandomHours(),
  };

  return info;
};

const header = () => {
  const info = generalInfo();
  const keys = Object.keys(info);
  let str = 'id|';

  for (let i = 0; i < keys.length; i += 1) {
    str += keys[i] + '|';
  }

  str = str.slice(0, str.length - 1);
  return str;
}

module.exports = {
  generalInfo,
  header,
};
