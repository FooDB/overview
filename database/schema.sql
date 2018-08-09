DROP DATABASE IF EXISTS overviews;
CREATE DATABASE overviews;
USE overviews;

CREATE TABLE General (
    id int NOT NULL AUTO_INCREMENT,
    restaurant_name VARCHAR(1000) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    telephone VARCHAR(1000) NOT NULL,
    website VARCHAR(1000) NOT NULL,
    chef VARCHAR(1000) NOT NULL,
    avg_rating int NOT NULL,
    num_ratings int NOT NULL,
    style VARCHAR(1000) NOT NULL, 
    dress_code VARCHAR(1000) NOT NULL,
    catering VARCHAR(1000) NOT NULL,
    price_range VARCHAR(1000) NOT NULL,
    private_dining VARCHAR(1000) NOT NULL,
    private_url VARCHAR(1000) NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11,8) NOT NULL,
    addr VARCHAR(1000) NOT NULL,
    neighborhood VARCHAR(1000) NOT NULL,
    cross_street VARCHAR(1000) NOT NULL,
    parking VARCHAR(1000) NOT NULL,
    public_transport VARCHAR(1000) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Payment_Options (
    id int NOT NULL AUTO_INCREMENT,
    opt VARCHAR(1000) NOT NULL,
    rest_id int NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Cuisines (
    id int NOT NULL AUTO_INCREMENT,
    cuisine VARCHAR(1000) NOT NULL,
    top_cuisine boolean NOT NULL DEFAULT 0,
    rest_id int NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Tags (
    id int NOT NULL AUTO_INCREMENT,
    tag VARCHAR(1000) NOT NULL,
    top_tag boolean NOT NULL DEFAULT 0,
    rest_id int NOT NULL,
    PRIMARY KEY (id)
);


CREATE TABLE Hours (
    id int NOT NULL AUTO_INCREMENT,
    meal VARCHAR(1000) NOT NULL,
    day_name VARCHAR(1000) NOT NULL,
    time_range VARCHAR(1000) NOT NULL,
    rest_id int NOT NULL,
    PRIMARY KEY (id)
);




