DROP DATABASE IF EXISTS company_data;
CREATE DATABASE company_data;

\c company_data;

DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS price_records_monthly;

CREATE TABLE companies (
  id serial,
  name varchar,
  last_closing_price money,
  PRIMARY KEY (id)
); 

CREATE TABLE `price_records_monthly` (
  id serial,
  companyID integer,
  price money,
  price_date date,
  PRIMARY KEY (id),
);

