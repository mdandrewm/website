'use strict';

/* Services */

var McCurryServices = angular.module('McCurryServices', []);

McCurryServices.service('DatabaseService', [
	function()
	{
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host     : 'omnigryphon.com',
			user     : 'andrexh4',
			password : 'Howmuchisth3f!sh'
		});
		return {
			testConnect: function (){		
				connection.connect();

				connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
				  if (err) throw err;

				  console.log('The solution is: ', rows[0].solution);
				});

				connection.end();
			}
		}
	}
]);