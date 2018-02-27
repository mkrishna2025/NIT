var Person = function(){
	var name = '';
	return {
		getName: () => name,
		setName: function(value) {
			name = value;
		}
	}
}
module.exports = Person;