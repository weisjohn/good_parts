/*
	Concept: Recursive enumeration over an object's keys - a sample of how to implement something like the console.dir function.
*/

(function() {

	function enumerate(obj) {
		var name, step = (arguments.length == 2) ? arguments[1] : 0;
		for (name in obj) {
			if (!!obj.hasOwnProperty(name)) {
				if (typeof obj[name] === "object") {
					console.log(Array(step + 1).join("\t") + name, ":");
					enumerate(obj[name], ++step);
					step--;
				} else {
					console.log(Array(step + 1).join("\t") + name, ":", obj[name]);	
				}
			}
		}

	}

	enumerate({
		'a' : 'b',
		'funx' : function() {
			return this;
		},
		'foo' : {
			'complex' : 'objects',
			'can' : {
				'get' : 'deep'
			}
		},
		'recurse' : 'recurse'
	});

})();