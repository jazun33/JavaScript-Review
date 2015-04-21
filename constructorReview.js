//Create a Animal Constructor that has the following parameters.
//species, name, legs, color, food (which is an array of foods they can eat).

  //code here
var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


//Now create a person function that creates an object and returns it
//(not in constructor form) that has the following parameters.
//name, age, height, gender

  //code here
var Person = function(name, age, height, gender) {
  var obj = {};
  obj.name = name;
  obj.age = age;
  obj.height = height;
  obj.gender = gender;
  return obj;
}


//Create a animal array and a person array.

  //code here
var animals = [];
var people = [];

//Create two instances of Animal and push those into your animal array

  //code here
var dog = new Animal('Canis Lupus Familiaris', 'Fido', 4,
  'brown', ['dog food', 'bacon']);
var cat = new Animal('Felis Catus', 'Spanky', 4, 'white', ['cat food', 'fish']);

animals.push(dog);
animals.push(cat);

//Create two instances of person and push those into your person array.

  //code here
var jason = new Person('Jason', 27, '6\'4"', 'male');
var heidi = new Person('Heidi', 31, '5\'4"', 'female');

people.push(jason);
people.push(heidi);

//Now we want every instance of Animal to have a eat method. This method will
//choose a random item in that instances food array,
//then alert "(name) ' ate ' (whichever food was chosen)".

  //code here

Animal.prototype.feed = function() {
  randomNum = Math.floor((Math.random() * this.food.length) + 0);
  alert(this.name + ' ate ' + this.food[randomNum]);
}

animals[0].feed();
//At this point, if we wanted to add something to every istance of person could we?
//Yes or no? and why or why not?

/* --- ANSWER ---
  Yes, we could prototype in new methods or even properties if we needed to
*/

/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    --> A new object called 'this' is created at the top of the function and
        returned at the end of the function

  2) What's a good way to describe the keyword 'this'
    --> 'this' is a temporarily created object which is returned with all
        the properties that have been set via parameters

  3) Can a normal function which creates an object and then returns that object
    use the prototype?
    --> The prototype of that object will be 'Object', or just the regular,
        built-in JavaScript object prototype

  4) What happens if you forget to use 'new' when calling a constructor?
    --> Nothing will be returned by that function. The interpreter will consider
        the 'this' keyword to be nonsense and you'll end up with 'undefined'
        instead of the specific object type you wanted.
*/
