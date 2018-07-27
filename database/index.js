const mongoose = require('mongoose');
const db ='mongodb://localhost:27017/overview';
mongoose.connect(db,{ useNewUrlParser: true });

let Overview = mongoose.Schema({
    name: String,
    description: String,
    phone: String,
    website: String,
    giftcard: Boolean,
    avgrating: Number,
    numratings: Number,
    toptags: [String],
    additionaltags: [String],
    cuisines: [String],
    pricerange: Number,
    paymentoptions:
    address: String,
    neighborhood: String,
    crossstreet:  String,



});

primaryRecord[toptags] = faker.lorem.sentence.split(" ");
primaryRecord[additionaltags] = faker.lorem.sentence.split(" ");
primaryRecord[cuisines] = getRandomCuisines();
primaryRecord[pricerange] = Math.floor(Math.random() * Math.floor(3));
primaryRecord[paymentoptions] = randomPayment();
primaryRecord[address] = getRandomAddress();
primaryRecord[neighborhood] = faker.address.county();
primaryRecord[crossstreet] = faker.address.streetName();
primaryRecord[parking] = Math.random() >= 0.5;
primaryRecord[style] = faker.lorem.sentence.split(" ");
primaryRecord[dresscode] = faker.lorem.sentence.split(" ");
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