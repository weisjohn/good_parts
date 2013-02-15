// confusion

// when the property names are small sequential integers, you should use an array. 


console.log('typeof []', typeof []);

console.log('[] instanceof Array ', [] instanceof Array);

console.log('[].constructor === Array ', [].constructor === Array);


var is_array = function (value) {
    return value &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        typeof value.splice === 'function' &&
        !(value.propertyIsEnumerable('length'));
};

// I REALLY don't understand why he didn't use the instanceof operator?  Am I missing something?