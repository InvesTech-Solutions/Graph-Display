const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser')
var db = require('../DB/')


app.use((req, res, next) => {
  console.log(`serving request ${req.method} at ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/prices/:company/:timeframe', (req, res) => {
	 console.log(req.params)
	 db.getMonthPrices((err, results) => {
	 	res.status(200).send(results)
	 })
})

app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

