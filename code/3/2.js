/*
	Concept: An object's prototype is definable
*/

(function() {

	var stooge = {
		'name' : 'Larry'
	}

	if (typeof Object.beget !== 'function') {
     	Object.beget = function (o) {
			var F = function () {};
			F.prototype = o;
			return new F();
		}; 
	}
	var another_stooge = Object.beget(stooge);
	
	stooge.profession = 'actor';
	assert(another_stooge.profession == 'actor', "another_stooge.profession is actor" );

})();