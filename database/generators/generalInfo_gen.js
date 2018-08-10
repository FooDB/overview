const faker = require ('faker');

const generalInfo = () => {
  let info = {
    restaurant_name: 'Restaurant',
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
    addr: '944 Market Street',
    neighborhood: faker.address.county (),
    cross_street: '945 Market Street',
    parking: faker.lorem.sentences().replace(",", " "),
    public_transport: faker.lorem.sentences().replace(",", " "),
  };

  return info;
};

for (let i = 0; i < 1; i += 1) {
  let general = generalInfo();
  let output = "";

  for (let prop in general) {
    output += general[prop] + ", ";
  }
  output = output.slice(0, output.length-2);

  console.log(output);
}
