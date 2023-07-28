                    //  ARRAYS IN JAVASCRIPT

 var friends = ['Aditya','Benaka','Bhuvi','Santosh','Deepak']
console.log(friends)
console.log(friends[2]);
console.log(friends.length);

//         FOR , FOR IN , FOR OF LOOP


// For loop
for(let i = 0 ; i < friends.length; i++) {
    console.log(friends[i]);
}

// FOR IN
// Displays element index of an array

for(let elements in friends) {
    console.log(elements);
}

// FOR OF
// Displays element contents of an array

for(let elements of friends) {
    console.log(elements);
}

//          FOR EACH LOOP

var rcb = ['Virat','Faf','Maxi','Siraj','Rajat','Dk']

rcb.forEach(function(element,index,array){
        console.log(element + " index of: " + index + " " + array);
})

//  FOR EACH USING FAT ARROW METHOD

rcb.forEach((element,index,array) => {
    console.log(element + " index of: " + index + " " + array)
})


var friends = ['Aditya','Ben','Bhuvi','Santosh','Deepak','Ben','Hitesh','HiBen']


//                                                  TRAVERSAL OF AN ARRAY 

     Array.indexOf() 

console.log(friends.indexOf('Ben'));

     Array.lastIndexOf() 

console.log(friends.lastIndexOf('Ben'));

     Array.includes()

console.log(friends.includes('Deepak'));


//                                                  SEARCHING & FILTER 

    //  Array.find() -> It returns only one element if satisfied 


var prices = [200,300,350,400,500,550,600];


console.log( prices.find( (currentVal) => currentVal < 400 ));

     Array.findIndex()

console.log( prices.findIndex( (currentVal) => currentVal < 400 ));

     Array.filter()

const newPrice = prices.filter((elem,index) => { 
    return elem < 400;
}  )
console.log(newPrice);

//                                                  SORT AND COMPARE


var months = ['Jan','Feb','March','June','Nov','Dec']

     Array.Sort()

console.log(months.sort());


//                                                   CRUD IN ARRAYS




var farm = ['sheep','goat','chicks','ducks']

     Array.push()

farm.push('cow','buffalo')
console.log(farm);

     Array.unshift()

farm.unshift('cow','buffalo')
console.log(farm);


//      Array.pop()

console.log(farm);
console.log(farm.pop());
console.log(farm);

//      Array.shift()

console.log(farm);
console.log(farm.shift());
console.log(farm);

//                            SPLICE METHOD

const months = ['Jan','Feb','march','April','May','June','July']

// Adding August 
const newMonthss = (months.splice(7,0,"Aug"));
console.log(months);


// replacing March to march
const newMonths = months.splice(2,2,"March");
console.log(months);


//      Array.map() 


const array1 = [1,23,45,6,78];
let newArr = array1.map((currElem) => {
        return currElem < 9
})
console.log(newArr);


let newArrrr = array1.map((currElem,index,array ) => {
        return `Index no = ${currElem} and the value is ${index} belong to ${array} `
})
console.log(newArrr);


// Find the square root of each element in an array 

let arr= [25,36,49,64,81];

let arrSqr = arr.map((currElem) =>   Math.sqrt(currElem) )
console.log(arrSqr);

//  Multiply each element by 2 and return only those elements which are greater than 10

// Chaining method used here

let arra = [2,3,4,6,8];

let arr2 = arr.map((currElem) => currElem * 2).filter((currElem) => currElem > 10).reduce((accumulator,currElem) =>  accumulator += currElem )
console.log(arr2);

        //  Array.Reduce()

let arrr = [2,6,8];

let newArrr = arr.reduce((accumulator,currElem) =>  accumulator += currElem )
console.log(newArr);

