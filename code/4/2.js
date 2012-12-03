/*
	Concept: constructor invocation pattern and object prototype linking
*/

(function() {

	// sample constructor
	var Person = function(name) {
		this.name = name;
	}

	Person.prototype.talk = function() {
		return "Hey, I'm " + this.name;
	}

	var john = new Person("john");
	
	console.log(john.talk());

	assert(john.__proto__ === Person.prototype, "john's prototype is Person's prototype");

})();