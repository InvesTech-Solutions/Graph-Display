const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser')
var db = require('../DB/')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.use((req, res, next) => {
  console.log(`serving request ${req.method} at ${req.url}`);
  next();
});

app.get('/prices/:id/', (req, res) => {
	 db.getMonthPrices(req.params.id, (err, results) => {
	 	if(err) {
	 		res.status(404).send(err);
	 	} else {
	 		res.status(200).send(results);
	 	}
	 })
})

app.get('/companies/?id', (req, res) => {
	db.getCompanyData(req.query.id, (err, results) => {
		if(err) {
			res.status(404).send(err);
		} else {
			res.status(200).send(results);
		}
	})
	
})

app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

