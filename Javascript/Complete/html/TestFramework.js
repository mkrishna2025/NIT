var Framework = {
	version: 1.0,
	getElement: function(id){
		return document.getElementById(id);
	},
	createLabel: function(options){
		var element = document.createElement("Label");
		element.innerHTML = options.text;
		return element;
	},
	createTextBox: function(options){
		var element = document.createElement("input");
		element.setAttribute('type', 'text');
		return element;
	},
	createButton: function(options){
		var element = document.createElement("input");
		element.setAttribute('type', 'submit');
		element.setAttribute('value', options.text);
		return element;
	}
};