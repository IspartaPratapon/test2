const express = require('express');
var app = express();
const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'jeanjean',
	database: 'cmsc128_test',
	multipleStatements: true
});

mysqlConnection.connect((err)=>{
	if(!err)
		console.log('DB connection succeeded.');
	else
		console.log('DB connection failed \n Error: ' + JSON.stringify(err, undefined, 2));
});

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  res.setHeader('Cache-Control', 'no-cache');
  next();
});

const bodyParser = require('body-parser');

app.get('/', (req, res) => {
	console.log('connected!');
 	res.send({message: 'APi is working'});
});

app.get('/get-team-members', (req, res)=>{
	mysqlConnection.query('SELECT * FROM user', (err, results)=>{
		if(!err){
			console.log(results);
			return res.json({
				listOfMembers: results				
			});
		}
		else{
			console.log("error!");
			res.send(err);
		}
	});
});

app.listen(3001, ()=> console.log('Express server running at port number 3001'));
