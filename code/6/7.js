// dimensions

String.prototype.repeat = function(length) {
    var that = this;
    for (var i = 0; i < length-1; i++) {
        that += this;
    }
    return that;
}

Array.method('dimensional', function (m, n, initial) {
    console.log('\t'.repeat(m), 'step ', m);
    if (typeof m === "number" && typeof n === "number") {} else { return; }
    
    var arr = [];
    for (var i = 0; i < n; i++) {
        // on the last dimension, just expand the array
        if (m > 2) {
            arr[i] = [].dimensional(m - 1, n, initial);
        } else {
            arr[i] = eval( "[" + ",".repeat(n) + "]" );
            if (initial) {
                for (var j = 0; j < n; j++) {
                    arr[i][j] = initial;
                };
            }
        }
    }
    return arr;
});


var rubiks = [].dimensional(3, 3, '0');

console.log(rubiks);