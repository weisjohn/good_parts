/*
	Concept: Delete doesn't delete an object; it deletes a reference
*/

(function() {

	var target = { 'value' : 'hello' };
	var foo = { 'a' : target };

	assert(foo.a === target, 'foo.a and target are the same object');
	delete foo.a;
	assert(typeof foo.a === "undefined", 'the reference through foo.a is gone');
	
	assert(target.value === "hello", 'target still exists');

})();