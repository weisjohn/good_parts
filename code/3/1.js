/*
	Concept: Guarding against throwing a TypeError exception on access an undefined value on an object chain
*/

(function() {

	var obj = {
		a : {
			foo : 'bar',
		}
	}

	console.log("obj.a.foo:", obj.a.foo);

	try {
		console.log("obj.b.foo:", obj.b.foo);		
	} catch(e) {
		console.error(e);
		console.log("e is a TypeError:", e instanceof TypeError);
	}
	console.log("obj.b.foo:", obj.b && obj.b.foo);

})();