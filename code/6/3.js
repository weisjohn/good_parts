// delete

var objs = [{}, {}, {}];


console.log(objs);
console.log('var objs = [{}, {}, {}];');

// delete the center object
console.log('about to delete objs[1]');
delete objs[1];
console.log('after delete objs[1], typeof objs[1] is', typeof objs[1]);

console.log(objs);

