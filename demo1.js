                    // DATE AND TIME IN JS


let currDate = new Date();

console.log(currDate);
console.log(new Date());
console.log(new Date().toLocaleString());
console.log(new Date().toString());

console.log(Date.now()); // Milliseconds from Jan1,1970 to current time

var dat = new Date(2023 , 6 , 26 , 2 , 27 ,30 ,0)
console.log(dat.toLocaleString());

//     DATE GET METHODS

const current = new Date();

console.log(current.toLocaleString());
console.log(current.getFullYear());
console.log(current.getMonth());
console.log(current.getDay());
console.log(current.getDate());

//      DATE SET METHODS
// returns voutput in form of milliseconds

console.log(current.setFullYear(2023, 6 , 26)); 
console.log(current.setMonth(6));
console.log(current.setDate(23));

//      TIME GET METHODS

const curTime = new Date();

console.log(curTime.getHours());
console.log(curTime.getMinutes());
console.log(curTime.getTime());
console.log(curTime.getSeconds());

//      TIME SET METHODS

console.log(curTime.setHours(5));
console.log(curTime.setMinutes(23));
console.log(curTime.setSeconds(30));

console.log(new Date().toLocaleTimeString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleString()); 


                        // MATH OBJECT

 console.log(Math.sqrt(81)); 
 
 console.log(Math.pow(2,2));         

 console.log(Math.round(9.156));        

 console.log(Math.floor(9.456));

 console.log(Math.ceil(9.556));

 console.log(Math.round(Math.random()*10));

 console.log(Math.trunc(9.80));

 console.log(Math.abs(-6));

 console.log(Math.max(99,678,36));

 console.log(Math.min(-67,4,51,0));
                    

