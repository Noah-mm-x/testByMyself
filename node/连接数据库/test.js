var mysql = require('mysql');
var conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'test',
	port: 3306 
})
conn.connect();

conn.query('insert into demo(name,age) values("王五",12)');
conn.end();