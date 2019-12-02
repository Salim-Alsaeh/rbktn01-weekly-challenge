// PART 1

// *************
// * PROBLEM 1 *
// *************

// Given the following nested functions:
// !!!!!!!!! Don not use the console.log()!!!!!!!!!!!!!!

function daBears() {
    var isFurry = true;

    function papaBear() {
        var porridge = "Too Hot!";
        var chair = "Too Big!";
        var bed = "Too Hard!";
        var feeling = "Angry";

        function mamaBear() {
            var porridge = "Too Cold!";
            var bed = "Too Soft!";

            function babyBear() {
                var porridge = "Just right!";
                var chair = "Just right!";
                var bed = "Just right!";
                var feeling = "Whiny";
                var sleepy = "Very yes";
            }
        }
    }

    function goldilocks() {
        var feeling = "Hungry";
        var isFurry = false;
        var isDinner = true;
    }
}

// Remove entries from the following arrays until only correct answers remain.
// A correct answer will be an array of strings that are function names.

// Which function(s) access the "chair" variable and get "Too Big!"
// (Delete wrong answers, leave correct ones)

var fairyTale1 = ["papaBear", "mamaBear"];

// Which function(s) access the "feeling" variable and get "Hungry"
// (Delete wrong answers, leave correct ones)

var fairyTale2 = ["goldilocks"];

// Which function(s) access the "porridge" variable and get "Too Cold!"
// (Delete wrong answers, leave correct ones)

var fairyTale3 = ["mamaBear"];

// Which function(s) access the "sleepy" variable and get undefined
// (Delete wrong answers, leave correct ones)

var fairyTale4 = ["daBears", "papaBear", "mamaBear", "goldilocks"];

// Which function(s) access the isFurry variable and get true
// (Delete wrong answers, leave correct ones)

var fairyTale5 = ["daBears", "papaBear", "mamaBear", "babyBear"];


// *************
// * PROBLEM 2 *
// *************

// Write a constructor function called Vehicle.  Vehicle should have a property
// called gasRemaining that is equal to 100.

// Next, assign a function called drive to the Vehicle prototype.  When invoked,
// drive should subtract 25 from the gasRemaining property of any Vehicle your constructor
// function creates.

// Create 2 new Vehicles with the constructor function you made: one called "charger",
// the other called "mustang".  Using implicit context, invoke the drive method on
// "charger" once, and invoke it twice on "mustang".

// CODE HERE...

var Vehicle = function() {
    this.gasRemaining = 100;
}

Vehicle.prototype.drive = function() {
    if (this.gasRemaining > 0) {
       this.gasRemaining -= 25;
    }
}

var charger = new Vehicle();
var mustang = new Vehicle();

charger.drive();

mustang.drive();
mustang.drive();



// -----------------------------------------------------------------------------

// *************
// * PROBLEM 3 *
// *************


// For this problem, you will need to add a method to the String prototype named
// "grammarPolice".  When called on a string, "grammarPolice" will return a new string
//  where the first letter of every word is capitalized, while reverting the remainder
// of each word to lowercase.

// For example: "OH HELLO THERE" becomes "Oh Hello There"

// Your method may be passed punctuation, numbers or other non-letter characters
// and should neither modify them nor break when encountering them.


var grammarPolice = function(string) {
    var splittedString = string.split(' ');
    var capitalRegex = var x = /^[A-Z]+$/;
    for (var i = 0; i < splittedString.length; i++) {
        var word = splittedString[i];
        if (capitalRegex.test(word[i])) {
            
        }
    }
    
}



// *************
// * PROBLEM 4 *
// *************

// Write a function called valueType that has two parameters. It accepts two
// arguments. Your function will needto compare the passed-in values 
// and return a string based on that comparison, as follows:

// If the arguments are of the same type and have the same value, return "Exactly the same"

// If the arguments have the same value but are of different types, return "Same value, different types"

// In all other cases, return "Different values"

function valueType(par1, par2) {
    
    if (typeof par1 === typeof par2) {
        if (Array.isArray(par1)&& Array.isArray(par2)) {
            if (compareArrays(par1, par2)) {
                return "Exactly the same";
            }
        }
        if (typeof par1 === "object" && typeof par2 === "object") {
            if (JSON.stringify(par1) === JSON.stringify(par2)) {
                return "Exactly the same";
            }
        }
        return "Exactly the same";
    }
    if (typeof par1 !== typeof par2) {
        if (par1 == par2) {
            return "Same value, different types";
        }
    }
    return "different values"
}

function compareArrays(array1, array2) {

  if (array1.length !== array2.length) {
    result false;
  }
  for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
  }
  return true;
}

// *************
// * PROBLEM 5 *
// *************

// Below is a variable called elephant which has been assigned an
// object with a name.

// Function large currently returns the following:
// 'My name is ' + this.name + ' and I am very heavy!'

// You must use explicit binding.
// In a variable called boundToElephant,
// assign it the value of the large function BOUND to the elephant object.

// When boundToElephant gets called, it should return this exact string:
// 'My name is Horton and I am very heavy!' (The above instructions should make this work.  No code needed for this paragraph)

var elephant = {
    name: 'Horton'
}
function large() {

    return 'My name is ' + this.name + ' and I am very heavy!'
}
  // CODE HERE...

  var boundToElephant = large.bind(elephant);
  boundToElephant();

// *************
// * PROBLEM 6 *
// *************

// Write a function called deathStar.
// deathStar will take in two parameters:
// capacity (Function) and crew (object).
// Use explicit binding to give capacity the context of crew
// and return the bound function.

// CODE HERE...
function deathStar(capacity, crew) {
    return capacity.bind(crew)
}
// *************
// * PROBLEM 7 *
// *************

// Create a function called accountingOffice.
// accountingOffice will take in a parameter:
// assets (Number),
// then return a closure function:
// The closure function will take in a parameter: liabilities (Number)
// The closure function will return the combined value of assets and liabilities.

// CODE HERE...

var accountingOffice = function(assets) {

    return function (liabilities) {
        return assets + liabilities;
    }
}
