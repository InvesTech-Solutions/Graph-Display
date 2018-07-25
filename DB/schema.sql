DROP DATABASE IF EXISTS company_data;
CREATE DATABASE company_data;

USE company_data;

CREATE TABLE companies (
	id INT(11) NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_closing_price INT NOT NULL,

	PRIMARY KEY (id),
)


CREATE TABLE price_records_monthly (
	id INT(11) NOT NULL AUTO_INCREMENT,
	company_id INT(11) NOT NULL,
	price INT(500) NOT NULL,
	date DATE NOT NULL,
	PRIMARY KEY (id)
)
