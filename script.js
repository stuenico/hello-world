function greeting() {
    let userName = prompt("Hello - What is your name? ");
    console.log(userName);
    alert("Hello " + userName);
}
greeting();
    

function imageRepeat() {
    let userGuess = prompt("Pick a number between 1 & 5.");
    for (let i = 0; i < userGuess; i++) {
        document.write('<img class="from-js" src="flower.png" />');
    }
}
imageRepeat();


// function favColor() {
//     let userGuess = prompt("What is your favorite color?");
//     if (userGuess == "yellow" || userGuess == "YELLOW") {
//         console.log("That is correct!");
//     } else {
//         console.log("That is wrong.");
//     }
// }
// favColor();



function weather() {
    let weatherChoice = prompt("Would you rather it be sunny, raining or snowing outside?");
    console.log(weatherChoice);
    weatherChoice = weatherChoice.toLowerCase();
    console.log(weatherChoice);

    if (weatherChoice == 'sunny') {
        document.write("I love the sun as well! Unfortunately, it is rare in Oregon to have sun. ");
        let favActivity = prompt("Do you have a favorite place to travel that is sunny? ");
        document.write(favActivity + "! That sounds amazing!");
    } else if (weatherChoice == 'raining') {
        document.write("I love the rain too! My favorite thing to do is run in the rain. ");
    } else if (weatherChoice == 'snowing') {
        document.write("The snow is my least favorite because I don't like to be cold. ");
    } else {
        document.write("Thanks for sharing!")
    }
}


function flowerChoice() {
    let flowerChoice = prompt("What is your favorite flower? Please choose from poppies, tulips or wildflowers.");
    console.log(flowerChoice);
    weatherChoice = flowerChoice.toLowerCase();

    if (flowerChoice == 5) {
        document.write("I love poppies too! ");
    } else if (flowerChoice == 'tulips') {
        document.write("Tulips are my favorite spring flower. ");
    } else if (flowerChoice == 'wildflowers') {
        document.write("Wildflowers are so beautiful to see. Thanks for sharing")
    } else {
        let flowerChoice = ""
        document.write("I am sorry I don't know the flower " + flowerChoice + ". Please select from Poppies, Tulips or Wildflowers.")
    }
}





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


