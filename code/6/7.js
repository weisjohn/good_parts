// dimensions

String.prototype.repeat = function(length) {
    var that = this;
    for (var i = 0; i < length-1; i++) {
        that += this;
    }
    return that;
}

Array.method('dimensional', function (m, n, initial, me) {
    if (typeof m === "number" && typeof n === "number") {} else { return; }
    
    var arr = []
    // if (initial) { arr[0] = initial; }  
    for (var i = 0; i < n; i++) {
        // on the last dimension, just expand the array
        if (m > 2) {
            arr[i] = Array.prototype.dimensional(m - 1, n, initial);
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


var rubiks = [].dimensional(3, 3, 'red');

console.log(rubiks);