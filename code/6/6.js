// methods on the prototype

// left to right map reducer
Array.method('leftReduce', function (f, value) {
    // if (typeof value === "undefined") { value = "" }
    var i;
    for (i = this.length-1; i >= 0; i--) {
        value = f(this[i], value);
        console.log(value);
    }
    return value;
});


var add = function(a, b) {
    return a + b;
}

var scores = [1,2,3,4,5];
scores.leftReduce(add, 0);


var diffs = function(a, b) {
    // console.log('a:', a, 'b:',b);
    // if (typeof b === "undefined") b = '';
    if (b.indexOf('+') >= 0) {
        return a + b.substring(b.indexOf('+')+1, b.length);
    } else if (b.indexOf('-') >= 0) {
        return a.substring(0, a.indexOf(b.split('-')[1]));
    } else {
        return a + b;
    }
}

var doc = [ '', '+a', '+b', '-b', '+c' ];
console.log(doc.reduce(diffs, ""));

var doc1 = [ '', '+John ', '+tried', '-tried', '+to ', '-to ', '+make ', '-make', '+made ', '+a ', '+differ ' ];
console.log(doc1.reduce(diffs, ""));