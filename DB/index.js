const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getMonthPrices = (callback) => {
	connection.query(`SELECT price, DATE_FORMAT(price_date, "%b %e %Y") FROM price_records_monthly p WHERE p.companyID=1 ORDER BY price_date;`, (err, results) => {
		if(err) {
			callback(err, null);
		} else {
			callback(null, results)
		}
	})
}

const getCompanyData = (company, callback) => {
	connection.query(`SELECT * FROM companies WHERE companies.name='${company}'`, (err, results) => {
		if(err){
			callback(err, null);
		} else {
			callback(null, results);
		}
	})
}

module.exports = {
	getMonthPrices,
	getCompanyData
};