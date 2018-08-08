DROP DATABASE IF EXISTS company_data;
CREATE DATABASE company_data;

USE company_data;

CREATE TABLE companies (
  id int(9) NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  last_closing_price decimal(10,2) NOT NULL,
  PRIMARY KEY (id)
); 

CREATE TABLE `price_records_monthly` (
  id int(11) NOT NULL AUTO_INCREMENT,
  companyID int(9) NOT NULL,
  price decimal(10,2) NOT NULL,
  price_date datetime(6) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (companyID) REFERENCES companies(id)
);

