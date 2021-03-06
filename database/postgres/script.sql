CREATE TABLE general (
  id serial primary key,
  restaurant_name varchar,
  description varchar,
  telephone varchar,
  website varchar,
  chef varchar,
  avg_rating varchar,
  num_ratings varchar,
  style varchar,
  dress_code varchar,
  catering varchar,
  price_range varchar,
  private_dining varchar,
  private_url varchar,
  latitude varchar,
  longitude varchar,
  addr varchar,
  neighborhood varchar,
  cross_street varchar,
  parking varchar,
  public_transport varchar,
  payment_options varchar,
  cuisines varchar,
  top_tags varchar,
  additional_tags varchar,
  hours varchar
);

COPY general (id, restaurant_name, description, telephone, website, chef, avg_rating, num_ratings, style, dress_code,catering, price_range, private_dining, private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport, payment_options, cuisines, top_tags, additional_tags, hours) FROM '/Users/Brian/Documents/SDC/overview/database/dataStore/general1.tsv' (DELIMITER '|');
COPY general (id, restaurant_name, description, telephone, website, chef, avg_rating, num_ratings, style, dress_code,catering, price_range, private_dining, private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport, payment_options, cuisines, top_tags, additional_tags, hours) FROM '/Users/Brian/Documents/SDC/overview/database/dataStore/general2.tsv' (DELIMITER '|');
COPY general (id, restaurant_name, description, telephone, website, chef, avg_rating, num_ratings, style, dress_code,catering, price_range, private_dining, private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport, payment_options, cuisines, top_tags, additional_tags, hours) FROM '/Users/Brian/Documents/SDC/overview/database/dataStore/general3.tsv' (DELIMITER '|');
COPY general (id, restaurant_name, description, telephone, website, chef, avg_rating, num_ratings, style, dress_code,catering, price_range, private_dining, private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport, payment_options, cuisines, top_tags, additional_tags, hours) FROM '/Users/Brian/Documents/SDC/overview/database/dataStore/general4.tsv' (DELIMITER '|');
COPY general (id, restaurant_name, description, telephone, website, chef, avg_rating, num_ratings, style, dress_code,catering, price_range, private_dining, private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport, payment_options, cuisines, top_tags, additional_tags, hours) FROM '/Users/Brian/Documents/SDC/overview/database/dataStore/general5.tsv' (DELIMITER '|');
COPY general (id, restaurant_name, description, telephone, website, chef, avg_rating, num_ratings, style, dress_code,catering, price_range, private_dining, private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport, payment_options, cuisines, top_tags, additional_tags, hours) FROM '/Users/Brian/Documents/SDC/overview/database/dataStore/general6.tsv' (DELIMITER '|');
COPY general (id, restaurant_name, description, telephone, website, chef, avg_rating, num_ratings, style, dress_code,catering, price_range, private_dining, private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport, payment_options, cuisines, top_tags, additional_tags, hours) FROM '/Users/Brian/Documents/SDC/overview/database/dataStore/general7.tsv' (DELIMITER '|');
COPY general (id, restaurant_name, description, telephone, website, chef, avg_rating, num_ratings, style, dress_code,catering, price_range, private_dining, private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport, payment_options, cuisines, top_tags, additional_tags, hours) FROM '/Users/Brian/Documents/SDC/overview/database/dataStore/general8.tsv' (DELIMITER '|');
COPY general (id, restaurant_name, description, telephone, website, chef, avg_rating, num_ratings, style, dress_code,catering, price_range, private_dining, private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport, payment_options, cuisines, top_tags, additional_tags, hours) FROM '/Users/Brian/Documents/SDC/overview/database/dataStore/general9.tsv' (DELIMITER '|');
COPY general (id, restaurant_name, description, telephone, website, chef, avg_rating, num_ratings, style, dress_code,catering, price_range, private_dining, private_url, latitude, longitude, addr, neighborhood, cross_street, parking, public_transport, payment_options, cuisines, top_tags, additional_tags, hours) FROM '/Users/Brian/Documents/SDC/overview/database/dataStore/general10.tsv' (DELIMITER '|');

