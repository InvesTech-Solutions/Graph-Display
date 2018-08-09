const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser')
var db = require('../DB/')
const PORT = process.env.PORT || 3001;

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

//price_records_monthly table routes

app.get('/prices/:id/', (req, res) => {
	 db.getMonthPrices(req.params.id, (err, results) => {
	 	if(err) {
	 		res.status(404).send(err);
	 	} else {
	 		res.status(200).send(results);
	 	}
	 })
})

app.post('/prices', (req, res) => {

})

app.put('/prices/:id', (req, res) => {

})

app.delete('/prices/:id', (req, res) => {
  
})

//companies table routes

app.get('/companies/:id', (req, res) => {
	db.getCompanyData(req.params.id, (err, results) => {
		if(err) {
			res.status(404).send(err);
		} else {
			res.status(200).send(results);
		}
	})
})

app.post('/companies', (req, res) => {
  db.addCompanyData(req.body.name, req.body.closingPrice, (err, results) => {
    if(err) {
      res.status(404).send(err);
    } else {
      res.status(200).send('company added');
    }
  })
})

app.put('/companies/:id', (req, res) => {
  db.updateCompanyName(req.params.id, req.body.closingPrice, (err, results) => {
    if(err) {
      res.status(404).send(err);
    } else {
      res.status(200).send('company updated');
    }
  })
})

app.delete('/companies/:id', (req, res) => {

})

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

