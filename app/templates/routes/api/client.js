var keystone = require('keystone');

exports = module.exports = function(req, res, next) {
	keystone.list('Client').model.find().exec(function(err, clients){
		if (err) {
			return res.status(500).send("Error with database query for clients");
		}
		res.json(clients);
	});
}
