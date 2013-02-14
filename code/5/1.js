// pseudo-classical inheritance

var Animal = function() {

}
Animal.prototype.die = function() {
    this.dead = true;
}

var Dog = function(name) {
    this.name = name;
    this.saying = 'ruff';
};

// prototypes are assignable

Dog.prototype = new Animal();

var kc = new Dog();

console.log('kc instanceof Dog:', kc instanceof Dog);
console.log('kc instanceof Animal:', kc instanceof Animal);