//////////////////////////////
//// FUNCTION CONSTRUCTOR ////
//////////////////////////////

// The “this” keyword will refer to the instance of the object, in the future
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

// Directly assign methods to UserCreator’s __proto__ object...
// Which are available on every created instance of the class
UserCreator.prototype.increment = function () {
  this.score++;
};

// Creates new user object: { name: “Harry”, score: 0 }
// With method attached: .__proto__.increment = () => { this.score++ }
const user = new UserCreator("Harry", 0);

// Calls ––> user.__proto__.increment
// this ---> { name: "Harry", score: 0 }
user.increment();

/////////////////////////////////////
// EQUIVALENT WITH CLASS KEYWORD ////
/////////////////////////////////////

class UserCreator {
  // This is the same as the UserCreator function
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  // Instead of writing .prototype to add methods to the __proto__ property...
  // We add them inside of the object here:
  increment() {
    this.score++;
  }
}
