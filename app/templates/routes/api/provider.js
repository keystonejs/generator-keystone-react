var keystone = require('keystone');

exports = module.exports = function(req, res, next) {
	keystone.list('Provider').model.find().exec(function(err, providers){
		if (err) {
			return res.status(500).send("Error with database query for providers");
		}
		res.json(providers);
	});
}
