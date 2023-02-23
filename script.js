// function greeting(){
// let userName = prompt("Hello - What is your name? ");
// console.log(userName);
// alert("Hello " + userName);
// }



function addFlowers(){
    let num1 = prompt("How many flowers would you like to see today?");
    let num2 = prompt("Is that enough? How many more would you like to see?");
    let sum = parseInt(num1) + parseInt(num2);
    console.log(sum);
    document.write(sum);
    let img = document.createElement("img");
    img.src = "flower.png";
    return sum;
}
    




// function weather (){
// let weatherChoice = prompt("Would you rather it be sunny, raining or snowing outside?");
// console.log(weatherChoice);
// weatherChoice = weatherChoice.toLowerCase();
// console.log(weatherChoice);

// if( weatherChoice== 'sunny'){
//     document.write("I love the sun as well! Unfortunately, it is rare in Oregon to have sun. ");
//     let favActivity= prompt ("Do you have a favorite place to travel that is sunny? ");
//     document.write(favActivity + "! That sounds amazing!");
// } else if (weatherChoice =='raining'){
//     document.write("I love the rain too! My favorite thing to do is run in the rain. ");
// } else if (weatherChoice =='snowing'){
//     document.write("The snow is my least favorite because I don't like to be cold.");
// }else {
//     document.write("Thanks for sharing!")
// }}

// function flowerChoice(){
// let flowerChoice = prompt("How many flowers would you like to see?");
//     console.log(flowerChoice);
//     weatherChoice = flowerChoice.toLowerCase();
                 
// if( flowerChoice == 5){
//         document.write("I love poppies too! ");
//     }else if (flowerChoice == 'tulips'){
//         document.write("Tulips are my favorite spring flower. ");
//     }else if (flowerChoice == 'wildflowers'){
//         document.write("Wildflowers are so beautiful to see. Thanks for sharing")
//     }else {
//         let flowerChoice = ""
//         document.write("I am sorry I don't know the flower " + flowerChoice + ". Please select from Poppies, Tulips or Wildflowers.")
// }
// }


//anatomy of a function

// function declaration / function definition
// function functionName - do not name functions the same as a variable
// functionName() the place where you put parameters followed by a code block {code or steps it will do}
// pay attention to different colors
// parameters go inside the function

// function addTwoNumbers(){
//     let num1 = 5;
//     let num2 = 10;
//     let sum = num1+num2;
//     console.log(num1+num2);
//     return sum;
//     // return statement must be the last item in the function
// }

// let response = prompt("say something");
// let newNumber = addTwoNumbers();

// addTwoNumbers();
// console.log(num1);

//return statements not required



// function addTwoNumbers(num1, num2){
//         let sum = num1 + num2;
//         console.log(sum);
//         return sum;
// //return statement must be the last item in the function
//  }

//  addTwoNumbers(5,10);
//  addTwoNumbers(10,10);
//  addTwoNumbers(12,8);
//  addTwoNumbers("hello", "world");


//  function addTwoNumbers(potato, banana){
//     let sum = potato + banana;
//     console.log(sum);
//     return sum;
// //return statement must be the last item in the function
// }
//addTwoNumbers();


// function addTwoNumbers(num1, num2){
//     let sum = num1 + num2;
//     console.log(sum);
//     return sum;
// //return statement must be the last item in the function
// }

// addTwoNumbers(prompt("Select a number between 1 & 5"),prompt("Select another number between 1 & 5"));
//addTwoNumbers(10,10);
//addTwoNumbers(12,8);
//addTwoNumbers("hello", "world");


