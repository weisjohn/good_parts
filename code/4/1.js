/*
	Concept: method invocation
*/

(function() {

	var myObject = {
	    value: 0,
	    increment: function (inc) {
			this.value += typeof inc === 'number' ? inc : 1;
		} 
	};

	assert(myObject.value === 0, "myObject.value === 0");
	myObject.increment();
	assert(myObject.value === 1, "myObject.increment() incremented the value to 1");
	myObject.increment(4);
	assert(myObject.value === 5, "myObject.increment(4) incremented the value to 5");

	myObject.increment();

})();