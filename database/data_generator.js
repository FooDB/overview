const db = require('./index.js');
const faker = require('faker');

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
'steakhouse', 'sushi', 'molecular gastronomy', 'mediteranean'];
const payment = ['Visa', 'Discover', 'Mastercard', 'American Express', 'cash', 'check'];
const tags = faker.lorem.sentence().split(' ');
const meals = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Bar'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const times = ['Closed', '9AM - Noon', '9AM - 3PM', 'Noon - 3PM', '5PM - 9PM', '5PM - 2AM'];


const randomEl = (list) => {
  let i = Math.floor(Math.random() * list.length);
    return list[i];
}

const getRandomName = () => {
  return randomEl(starters) + ' ' + randomEl(adjectives) + ' ' + randomEl(nouns);
}

const getRandomAddress = function() {
  const street = faker.address.streetAddress();
  const city = faker.address.city();
  const state = faker.address.stateAbbr();
  const zipcode = faker.address.zipCode();

  return street + ' ' + city + ', '+ state +' ' + zipcode;
}


const generalInfo = () => {
  let info = {
    restaurant_name: getRandomName(),
    description: faker.lorem.sentences(),
    telephone: faker.phone.phoneNumberFormat(),
    website: faker.internet.url(),
    chef: faker.name.findName(),
    avg_rating: Math.floor(Math.random() * 5),
    num_ratings: Math.floor(Math.random() * 10000),
    style: faker.lorem.words(),
    dress_code: faker.lorem.words(),
    catering: faker.lorem.sentences(),
    price_range: faker.lorem.words(),
    private_dining: faker.lorem.sentences(),
    private_url: faker.internet.url(),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    addr: getRandomAddress(),
    cross_street: faker.address.streetAddress(),
    parking: faker.lorem.sentences(),
    public_transport: faker.lorem.sentences()
  };
  
  return info;
}

const insertOverviews = () => {
  for (let i = 0; i < 100; i ++) {
    //General
    let general = generalInfo();

    let generalQuery = `INSERT INTO General (restaurant_name, description, telephone, website, chef,
    avg_rating, num_ratings, style, dress_code, catering, price_range, private_dining,
    private_url, latitude, longitude, addr, cross_street, parking, public_transport) 
    VALUES ('${general.restaurant_name}', '${general.description}', '${general.telephone}', '${general.website}', '${general.chef}',
    '${general.avg_rating}', '${general.num_ratings}', '${general.style}', '${general.dress_code}', '${general.catering}', '${general.price_range}', '${general.private_dining}',
    '${general.private_url}', '${general.latitude}', '${general.longitude}', '${general.addr}', '${general.cross_street}', '${general.parking}', '${general.public_transport}');`;
    
    db.connection.query(generalQuery, (err, result) => {
      if (err) { 
        console.log(err);
      } else {
        console.log(result);
      }
    });
    //Payment Options
    let paymentLen = Math.floor(Math.random * payment.length);
    for (let j = 0; j < paymentLen; j ++) {
      let paymentQuery = `INSERT INTO Payment_Options (opt, rest_id) VALUES ('${randomEl(payment)}',${i});`;

      db.connection.query(paymentQuery, (err, result) => {
        if (err) { 
          console.log(err);
        } else {
          console.log(result);
        }
      });
    }
    //Cuisines
    let cuisineLen = Math.floor(Math.random * cuisine.length);
    for (let k = 0; k < cuisineLen; k ++) {
      let cuisineQuery = `INSERT INTO Cuisines (cuisine, top_cuisine, rest_id) Values('${randomEl(cuisine)}', '${Math.round(Math.random())}', ${i});`;

      db.connection.query(cuisineQuery, (err, result) => {
        if (err) { 
          console.log(err);
        } else {
          console.log(result);
        }
      });
    }
    //Tags
    let tagLen = Math.floor(Math.random * tags.length);
    for(let x = 0; x < tagLen; x ++) {
      let tagQuery = `INSERT INTO Tags (tag, top_tag, rest_id) Values('${randomEl(tags)}', '${Math.round(Math.random())}', ${i});`;

      db.connection.query(tagQuery, (err, result) => {
        if (err) { 
          console.log(err);
        } else {
          console.log(result);
        }
      });
    }

    //Hours
    let hoursLen = Math.floor(Math.random * meals.length);

    for (let y = 0; y < hoursLen; y ++) {
      let hourQuery = `INSERT INTO Hours (meal, day_name, time_range, rest_id) VALUES('${randomEl(meals)}', '${randomEl(days)}', '${randomEl(times)}', ${i});`;
      
      db.connection.query(hourQuery, (err, result) => {
        if (err) { 
          console.log(err);
        } else {
          console.log(result);
        }
      });
    }
  }
}

insertOverviews();
