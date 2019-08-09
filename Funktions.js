//Include needed jsons
var config = require('./config');
var changelog = require('./changelog');

//Include simple modules
var fs = require("fs");
const util = require('util');
const mysql = require('mysql'); 
const hash = require('hash-int');

module.exports = {
	getDateTime: function getDateTime(date) {

		var hour = date.getHours();
		hour = (hour < 10 ? "0" : "") + hour;

		var min  = date.getMinutes();
		min = (min < 10 ? "0" : "") + min;

		var sec  = date.getSeconds();
		sec = (sec < 10 ? "0" : "") + sec;

		var year = date.getFullYear();

		var month = date.getMonth() + 1;
		month = (month < 10 ? "0" : "") + month;

		var day  = date.getDate();
		day = (day < 10 ? "0" : "") + day;

		return day + "." + month + "." + year + " " + hour + ":" + min + ":" + sec;

	},
	log: function log(info) {
		
		console.log(getDateTimelog(new Date()) + " " + info)
	},
	
	getRandomInt: function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
}
};

function getDateTimelog(date) {

		var hour = date.getHours();
		hour = (hour < 10 ? "0" : "") + hour;

		var min  = date.getMinutes();
		min = (min < 10 ? "0" : "") + min;

		var sec  = date.getSeconds();
		sec = (sec < 10 ? "0" : "") + sec;

		var year = date.getFullYear();

		var month = date.getMonth() + 1;
		month = (month < 10 ? "0" : "") + month;

		var day  = date.getDate();
		day = (day < 10 ? "0" : "") + day;

		return "[" + day + "." + month + "." + year + "] [" + hour + ":" + min + ":" + sec + "]";

}