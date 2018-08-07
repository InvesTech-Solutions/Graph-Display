const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const faker = require('faker');

const connection = mysql.createConnection(mysqlConfig);

const getMonthPrices = (id, callback) => {
	connection.query(`SELECT price, DATE_FORMAT(price_date, "%b %e %Y") FROM price_records_monthly p WHERE p.companyID='${id}' ORDER BY price_date;`, (err, results) => {
		if(err) {
			callback(err, null);
			console.error(err)
		} else {
			callback(null, results)
		}
	})
}

const getCompanyData = (id, callback) => {
	connection.query(`SELECT * FROM companies WHERE companies.id='${id}'`, (err, results) => {
		if(err){
			callback(err, null);
		} else {
			callback(null, results);
		}
	})
}
const makeMeTheData = () => {
	for(let i = 1; i<= 100; i++) {
		let param = [faker.company.companyName(), faker.finance.amount(100.00,200.00,2), faker.random.number(99), faker.random.number(500)]
		let query = `INSERT INTO companies (name, last_closing_price, analyst_rec, num_users) VALUES (?, ?, ?, ?);`
		connection.query(query, param);
		for(let x=1; x<31; x++){
			connection.query(`INSERT INTO price_records_monthly (id, companyID, price, price_date) VALUES (null, '${i}','${faker.commerce.price(100.00,200.00,2)}','2018-07-${x} 22:28:09.000000');`)
		}
	}
}
setTimeout(makeMeTheData, 15000);

module.exports = {
	getMonthPrices,
	getCompanyData
};