var keystone = require('keystone');

keystone.init({

	'name': '<%= projectKey %>',
	'brand': '<%= projectKey %>',
	
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',
	
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': 'x&4C-Q;.rT(/m3xZ8oANKU8o1o2GGFxoROCm8{2#HK3z.>@G9UPFvSFgkW[0xxWI',
	
});

keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));
keystone.set('nav', {
	'users': 'users'
});

keystone.start();
