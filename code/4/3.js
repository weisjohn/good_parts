/*
	Concept: apply invocation
*/

(function() {

	var add = function (a, b) { 
		return a + b;
	};

	var array = [3, 4];
	var sum = add.apply(null, array);

	assert(sum === 7, "apply worked");

	var Transformer = function() {
		return;
	};

	Transformer.prototype.swap = function() {
		var tmp = this.foo;
		this.foo = this.bar;
		this.bar = tmp;
	}

	var dummy = {
		'foo' : 'a',
		'bar' : 'b'
	};

	Transformer.prototype.swap.apply(dummy);
	assert(dummy.bar === 'a', "Transformer.prototype.swap worked on a non-Transformer");

})();