// functional

var gadget = function(spec) {

    var that = {};

    var mine = { interactions: 0 };

    // notice the function declaration pattern

    // don't assign straight to `that`
    var get_name = function() {
        mine.interactions++;
        return spec.name;
    };
    that.get_name = get_name;

    var set_name = function(name) {
        mine.interactions++;
        spec.name;
    }
    that.set_name = set_name;

    var activate = function() {
        mine.interactions++;
        console.log('the', get_name(), "is turning on");
    }
    that.activate = activate;

    var get_interactions = function() {
        console.log('interactions:', mine.interactions);
    }
    that.get_interactions = get_interactions;

    return that;
};
var widget = gadget({ name: 'gizmo' });


console.log('my name is', widget.get_name());
// even if i destroy `widget.get_name`...
delete widget.get_name;
// this will still work because of the closed reference 
widget.activate();

// because privacy is maintained through closure, i can't just define a new method
// on the object and obliterate the number of interactions
console.log(widget.get_interactions());
widget.foo = function() { console.log('...') }; widget.foo();
console.log(widget.get_interactions());