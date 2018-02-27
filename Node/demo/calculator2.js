// private function
var printScreen = function(result) {
	console.log('result is ' + result);
}

module.exports.addition = function(x, y){
	var z = x + y;
	printScreen(z);
	return z;
}

module.exports.subtraction = function(x, y){
	var z = x - y;
	printScreen(z);
	return z;
}