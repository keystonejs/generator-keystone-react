var React = require('react');

var App = React.createClass({
	render: function() {
		return (
			<div>M'app!</div>
		); //'
	}
});

React.render(
	<App />,
	document.getElementById('app')
);
