class Father {
	getGender(){
		return "Male";
	}
	getName(){
		return "Ashok";
	}
}

class Son extends Father{
	getName() {
		return "Deepak";
	}
	getCity(){
		return "Hyderabad";
	}
}

module.exports = Son;