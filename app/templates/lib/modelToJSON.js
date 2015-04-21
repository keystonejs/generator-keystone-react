module.exports = function(list) {
	list.schema.set('toJSON', { transform: function(doc, rtn, options) {
		rtn.id = rtn._id;
		delete rtn._id;
		delete rtn.__v;
		return rtn;
	}});
}
