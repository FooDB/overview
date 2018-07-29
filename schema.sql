DROP DATABASE IF EXISTS Overview;

CREATE DATABASE Overview;

USE Overview;

-- ---
-- Table 'general'
-- 
-- ---

DROP TABLE IF EXISTS `general`;
		
CREATE TABLE `general` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `description` VARCHAR NULL DEFAULT NULL,
  `phone` VARCHAR NULL DEFAULT NULL,
  `website` VARCHAR NULL DEFAULT NULL,
  `chef` VARCHAR NULL DEFAULT NULL,
  `avg_rating` INTEGER NULL DEFAULT NULL,
  `num_ratings` INTEGER NULL DEFAULT NULL,
  `style` VARCHAR NULL DEFAULT NULL,
  `dress_code` VARCHAR NULL DEFAULT NULL,
  `catering` VARCHAR NULL DEFAULT NULL,
  `range` VARCHAR NULL DEFAULT NULL,
  `private_dining` VARCHAR NULL DEFAULT NULL,
  `private_url` VARCHAR NULL DEFAULT NULL,
  `latitude` DECIMAL(10,8) NOT NULL,
  `longitude` INTEGER(11,8) NOT NULL,
  `address` VARCHAR NULL DEFAULT NULL,
  `neighborhood` VARCHAR NULL DEFAULT NULL,
  `cross_street` VARCHAR NULL DEFAULT NULL,
  `parking` VARCHAR NULL DEFAULT NULL,
  `public_transport` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'payment_options'
-- 
-- ---

DROP TABLE IF EXISTS `payment_options`;
		
CREATE TABLE `payment_options` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `type` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'cuisines'
-- 
-- ---

DROP TABLE IF EXISTS `cuisines`;
		
CREATE TABLE `cuisines` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `cuisine` VARCHAR NULL DEFAULT NULL,
  `top` BINARY NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'tags'
-- 
-- ---

DROP TABLE IF EXISTS `tags`;
		
CREATE TABLE `tags` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `tag` VARCHAR NULL DEFAULT NULL,
  `top` BINARY NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
KEY ()
);

-- ---
-- Table 'hours'
-- 
-- ---

DROP TABLE IF EXISTS `hours`;
		
CREATE TABLE `hours` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `meal` VARCHAR NULL DEFAULT NULL,
  `day` VARCHAR NULL DEFAULT NULL,
  `time` VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `payment_options` ADD FOREIGN KEY (id) REFERENCES `general` (`id`);
ALTER TABLE `cuisines` ADD FOREIGN KEY (id) REFERENCES `general` (`id`);
ALTER TABLE `tags` ADD FOREIGN KEY (id) REFERENCES `general` (`id`);
ALTER TABLE `hours` ADD FOREIGN KEY (id) REFERENCES `general` (`id`);
