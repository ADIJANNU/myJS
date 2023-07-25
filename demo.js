//              First letter Capitalization 

var name = prompt("Enter your Name");

var firstChar = name.slice(0,1);

var firstCharUpperCase = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length);

restOfName = restOfName.toLowerCase();

var capitalName = firstCharUpperCase + restOfName ;

restOfName = restOfName.toLowerCase();

alert("Hello, " + capitalName);



//               Dog age to Human age Calculator


var dogAge = prompt("Enter your dog's age: ");

humanAge = (dogAge - 2 ) * 4 + 21 ;
console.log("Your Pal is " + humanAge + " in human age");


var myName = "AdithyaJannu"
var myAge = 22
console.log(typeof(myName + " " + myAge))

console.log(3**3)

var a = 5
var b = 10
a = a + b
b = a - b
a = a - b

console.log(a)
console.log(b)

// function leapYear(year) {
     
    if( (year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0) ){
        console.log("Leap Year")
    }
    else {
        console.log("Not a Leap Year")
    }


// leapYear(2020)

//                                              SWITCH STATEMENT 

var area = "triangle"
var PI = 3.142 , l = 5 , b = 4 , r =3 

switch(area) {
    case 'circle':
        console.log("Area of Circle is: " + PI*r**r)
        break

    case 'rectangle':
        console.log("Area of Rectangle is: " + (l*b))
        break

    case 'triangle' :
        console.log("Area of Triangle is: " + (l*b) / 2)
        break
    
    default :
        console.log("Invalid !!!");

}

//                      MULTIPLICATION TABLE USING FOR LOOP


for(var x = 1 ; x <= 10 ; x++ ) {

    var num = 12;
    console.log( num + "*" + x + "=" + num * x );

}

//                  FAT ARROW FUNCTION 


const sum = () => ` Sum of a + b : ${(a = 5) + (b = 10) }`
console.log(sum());

            