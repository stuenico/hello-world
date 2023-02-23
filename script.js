let myName = "Nicole";
alert("Welcome to my website!" +  myName);

// let <--  lets you change it
// const <-- constant can't be changed
// var <-- bad practice in 102
// (none) <-- bad practice in 102
// variables must have unique names 

// you can create a variable with not value

let myFavFood;
myFavFood = "bread";
console.log(myFavFood);

// Data Types
// String --> "text", "42"
// numbers --> 42, 32, 44
// boolean --> true/false

console.log("Hello World");
let myFavColor = "yellow";
console.log(myFavColor);

// Right click and go to inspect on website - the developer tools
// Select console at the top

myFavColor = "purple";
console.log(myFavColor);

// if we change let to const it will give an error because const cannot be changed

// prompt("What is your name?");
// the pop up showed, but we need to access the information
// can store it as a variable


let userName = prompt("What is your name?");
console.log(userName);
alert("Hello " + userName);

// dynamic components are using javascript to put something on your actual page

// writing to the HTML document

document.write("Hello World");
document.write("Welcome"+ userName);


// if (time = 12){"Happy noon!"}


let coffeeChoice = prompt("Do you like coffee? Yes or No?");
console.log(coffeeChoice);

// if () {} else if (){}
// if (this is true) execute code if  (THIS is true){execute code}else {execute code}

if(coffeeChoice == 'yes'){
    document.write("I like coffee too!");
    let favBrand = prompt ("What is your favorite brand?");
} else if (coffeeChoice =='no'){
    document.write("Do you like cooca?");
} else {
    document.write("I'm not sure what you picked...");
}

// does not have () because it is a catch all for everything else that can happen

