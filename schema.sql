DROP DATABASE IF EXISTS overviews;
CREATE DATABASE overviews;
USE overviews;

CREATE TABLE General (
    id int NOT NULL AUTO_INCREMENT,
    restaurant_name VARCHAR(50) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    telephone VARCHAR(100) NOT NULL,
    website VARCHAR(100) NOT NULL,
    chef VARCHAR(100) NOT NULL,
    avg_rating int NOT NULL,
    num_ratings int NOT NULL,
    style VARCHAR(25) NOT NULL, 
    dress_code VARCHAR(25) NOT NULL,
    catering VARCHAR(200) NOT NULL,
    price_range VARCHAR(25) NOT NULL,
    private_dining VARCHAR(25) NOT NULL,
    private_url VARCHAR(25) NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11,8) NOT NULL,
    addr VARCHAR(25) NOT NULL,
    cross_street VARCHAR(25) NOT NULL,
    parking VARCHAR(100) NOT NULL,
    public_transport VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Payment_Options (
    id int NOT NULL AUTO_INCREMENT,
    opt VARCHAR(100) NOT NULL,
    rest_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (rest_id) REFERENCES General(id)
);

CREATE TABLE Cuisines (
    id int NOT NULL AUTO_INCREMENT,
    cuisine VARCHAR(100) NOT NULL,
    top_cuisine boolean NOT NULL DEFAULT 0,
    rest_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (rest_id) REFERENCES General(id)
);

CREATE TABLE Tags (
    id int NOT NULL AUTO_INCREMENT,
    tag VARCHAR(100) NOT NULL,
    top_tag boolean NOT NULL DEFAULT 0,
    rest_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (rest_id) REFERENCES General(id)
);


CREATE TABLE Hours (
    id int NOT NULL AUTO_INCREMENT,
    meal VARCHAR(100) NOT NULL,
    day_name VARCHAR(100) NOT NULL,
    time_range VARCHAR(200) NOT NULL,
    rest_id int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (rest_id) REFERENCES General(id)
);




