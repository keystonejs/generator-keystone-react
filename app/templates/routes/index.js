var babelify = require('babelify');
var browserify = require('browserify-middleware');
var keystone = require('keystone');
	
var importRoutes = keystone.importer(__dirname);
var routes = {
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	app.use('/js', browserify('./client/scripts', {
		transform: [babelify]
	}));

	// API
	app.get('/api/clients', routes.api.client);
	app.get('/api/providers', routes.api.provider);

	// Views
	app.use(function(req, res) {
		res.render('index');
	});

};
