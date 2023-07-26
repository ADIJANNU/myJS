//              FUNCTION BASICS

function getMilk(money) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
  
      var numberOfBottles = Math.round(money /1.5);
  
          
    console.log("buy " + numberOfBottles + " bottles of milk");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  
  getMilk(8);


//                   LIFE IN WEEKS LEFT 

function lifeInWeeks(age) {
    

        var yearsRemaining = 90 - age;
        var ageInDays= yearsRemaining*365;
        var ageInWeeks= yearsRemaining*52;
        var ageInMonths= yearsRemaining*12;

        console.log ("You have " + ageInMonths + " months, " + ageInWeeks + " weeks, "  + ageInDays + " days left");


    }

    lifeInWeeks(23)

//                      BMI CALCULATOR 


function bmiCalculator (weight,height) {

    var bmi = weight / (height * height);
    return Math.round(bmi);
}

var bmi = bmiCalculator(65,1.8);
console.log(bmi);

//                       LEAP YEAR CHALLENGE


function checkLeapYear(year) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}


var year = prompt('Enter a year:');
checkLeapYear(year);

//                      FIZZBUZZ 

var output= [];
var count = 1;

function fizzBuzz() {
    
    
while ( count <= 100){

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FIZZBUZZ")
    } else if ( count % 3 === 0) {
        output.push("FIZZ")
    } else if ( count % 5 === 0) {
        output.push("BUZZ")
    } else {
        output.push(count)
    }

    count++
}

console.log(output);
}





