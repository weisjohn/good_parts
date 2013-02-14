// prototypal

// you're too cool for school, so don't deal with classes

if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    }; 
}

var desktop = {
    name : 'foo',
    descripton : 'awesome sample desktop',
    render : function() {
        console.log('working working');
    }
}

var wallpaper = Object.beget(desktop);

console.log(typeof wallpaper.render);