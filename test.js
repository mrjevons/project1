var cron = require('node-cron');

cron.schedule('0 * * * *', function() {
	console.log("Hello World");
});