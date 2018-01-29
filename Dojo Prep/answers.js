/*
Suzanne Salerno
Chapter 0 - Foundations
page 16
*/

//Setting and Swapping
/*
function swap() {
    var myNumber = 42;
    var myName = "Suzanne";
    
    var temp = myNumber;
    myNumber = myName;
    myName = temp;
    console.log(myNumber, myName);
}
swap();
*/

//Print -52 to 1066
/*
for (var i=(-52); i<=1066; i++) {
    console.log(i)
}
*/

//Don't Worry, Be Happy
/*
function beCheerful() {
    var i=1;
    while (i<99) {
        console.log("good morning!"); 
        i+=1;
    }
}
beCheerful();
*/


//Multiples of Three - but Not All
/*
for (i = 0; i > (-301); i--) {
    if (i === (-3) || i === (-6)) {
        continue;
    }
    if (i%3 === 0) {
        console.log(i);
    }
}
*/

//Printing Integers with WHILE
/*
var i = 2000;
while (i <= 5280) {
    console.log(i);
    i++;
}
*/

//You Say It's Your Birthday
/*
function yourBirthday(i,j) {
    if ((i === 2 && j === 8) || (i === 8 && j === 2)) {
        console.log("How did you know?");
    }
    else {
        console.log("Just another day...");
    }
}

yourBirthday(8,2); 
yourBirthday(2,8);
yourBirthday(18,21);
yourBirthday(7,24);
yourBirthday(0,0);
*/

//Leap Year
/*
function leapYear(year) {
    if (((year%4 === 0) && (year%100 !== 0)) || (year%400 === 0)) {
        console.log(year, " is a leap year!")
    }
}
    
leapYear(1500);
leapYear(1664);
leapYear(1990);
leapYear(2016);
*/

//Print and Count
/*
var counter = 0;
for (var i = 512; i <= 4096; i++) {
    if (i%5 === 0) {
        console.log(i);
        counter++;
    }
}
console.log(counter);
*/

//Multiples of Six
/*
var i = 0;
while (i<=60000) {
    if (i%6 === 0) {
        console.log(i);
        i = i + 6;
    }
}
*/

//Counting, the Dojo Way

for (var i = 1; i <= 100; i++) {
    if (i%5 === 0) {
        console.log("Coding");
    }
    if ((i%5 === 0) && (i%10 === 0)) {
        console.log(" Dojo");
    }
    else
        console.log(i);
}


//What do you Know?
/*
function whatYouKnow() {
    var incoming = "only so much."
    console.log(incoming);
}
whatYouKnow();
*/


//Whoa, That Sucker's Huge
/*
var sum = 0;
for (var i = (-300000); i <=300000; i++) {
    if (i%2 !== 0) {
        sum += i;
    }
}
console.log(sum);
*/

//Countdown by Fours
/*
var i = 2016;
while (i > 0) {
    console.log(i);
    i = i - 4;
}
*/

//Flexible Countdown
/*
function flexible(lowNum, highNum, mult) {
    for (var i = highNum; i >= lowNum; i-=mult) {
        console.log(i);
    } 
}
flexible(2,9,3);
flexible(21,81,3);
*/

//The Final Countdown
/*
function finalCount(param1, param2, param3, param4) {
    while (param2 <= param3) {
    if ((param2 % param1 === 0) && (param2 !== param4)) {
        console.log(param2);
        param2++;
    }
    else {
        param2++; 
    }
    }
}
finalCount(3,5,17,9);
*/


/*
Suzanne Salerno
Chapter 1 - Fundamentals
page 20
*/

//Countdown
/*
function countDown(num) {
    var arr = [];
    while (num >= 0) {
        arr.push(num);
        num--;
    }
    return arr; 
}
var arrReturn = countDown(5);
console.log(arrReturn.length);
console.log(arrReturn);

var arrReturn2 = countDown(122);
console.log(arrReturn2.length);
console.log(arrReturn2);
*/

//Print and Return
/*
var arr = [2,10];
function printReturn () {
    console.log(arr[0]);
    return (arr[1]);
}
printReturn();
*/


//First Plus Length
/*
var arr1 = [1,12,34];
var arr2 = ['jeez',5,10,15];
var arr3 = [true,7,11,13,17];
var arr4 = [false,7,11,13,17];
var sum1 = arr1[0] + arr1.length;
var sum2 = arr2[0] + arr2.length;
var sum3 = arr3[0] + arr3.length;
var sum4 = arr4[0] + arr4.length;
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
*/

//Values Greater than Second
/*
var arr = [1,3,5,7,9,13];
var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[1] < arr[i]) {
            counter += 1;
            console.log(arr[i]);
        } 
    }
*/

//Values Greater than Second, Generalized
/*
var arr2 = [];
function greaterThan(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[1] < arr[i]) {
            arr2.push(arr[i]);
        }
    }    
    console.log(arr2.length);
    console.log(arr2);
}
*/
//greaterThan([0,1,2,3,4,5]);
//greaterThan([4,2,6,9]);
//greaterThan([2]);

//This Length, That Value
/*
function lengthValue(num1, num2) {
    var arr = [];
    if (num1 === num2) {
        console.log("Jinx!");
    }
    while (num1 >= 0) {
        arr.push(num2);
        num1--;
    }
    console.log(arr.length);
    console.log(arr);
}
lengthValue(10,5)
*/

//Fit the First Value
/*
function fitFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big!")
    }
    else if (arr[0] < arr.length) {
        console.log("Too small!")
    }
    else {
        console.log("Just right!")
    }
}
fitFirstValue([2,1]);
fitFirstValue([0,3]);
fitFirstValue([5,4,3,2]);
*/

//Fahrenheit to Celsius
/*
function fahrenheitToCelcius(fDegrees) {
    cDegrees = (fDegrees - 32) * 5 / 9;
    console.log(cDegrees + " degrees Celsius");
}
fahrenheitToCelcius(100);
*/

//Celsius to Farenheit
/*
function celsiusToFarenheit(cDegrees) {
    fDegrees = cDegrees * 9 / 5 + 32;
    console.log(fDegrees + " degrees Farenheit")
}
celsiusToFarenheit(37.78)
*/


//Optional F = C
/*
function celsiusEqualFarenheit(cDegrees) {
    var isMatched = false;
    for (cDegrees = 200; cDegrees >= 0; cDegrees--) {
        fDegrees = cDegrees * 9 / 5 + 32;

        if (fDegrees === cDegrees) {
            isMatched = true;
            console.log("They match at " + fDegrees + " Farenheit and " + cDegrees + " Celsius");
            break;
        }
    }
    if (!isMatched) {
        console.log('no match');
    }
}

celsiusEqualFarenheit();
*/

/*
Suzanne Salerno
Chapter 1 - Fundamentals
page 22
*/

//Biggie Size
/*
function makeItBig(arr) {
    console.log("this thing working?");
    console.log('arr length:', arr.length);
    for (var i = 0; i < arr.length; i++) {
        console.log('arr [' + i + ']:', arr[i]);
        if (arr[i] > (-1)) {
            arr[i] = "big";      
        }
    }
    return arr;         //console.log(arr);
}
makeItBig([-1,3,5,-5]);
*/

//Print Low, Return High
/*
function printLowHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (low > arr[i]) {
            low = arr[i];
        }
        if (high < arr[i]) {
            high = arr[i];
        }
    }
    console.log("lowest value is " + low);
    //console.log("highest value is " + high);
    return high;
}
printLowHigh([3,10,200,43]);
*/

//Print One, Return Another
/*
function printSecondToLast(arr) {
    console.log("Second to last element is " + arr[arr.length - 2])
    for (var i=0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return (arr[i]);
            break;
        }
    }
}
printSecondToLast([0,2,5,8,21,7]);
*/

//Double Vision
/*
function doubleIt(arr) {
    var arr2 = [];
    //console.log("working??");
    //console.log("arr length: ", arr.length);
    //console.log(arr2);
    for (var i = 0; i < arr.length; i++) {
        arr2.push(arr[i] * 2);  
    }
    console.log("This is the doubled array " + arr2);
    console.log("This is the original array " + arr);
}
doubleIt([1,2,3]);
*/

//Count Positives
/*
function countPositives(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            counter++ ;
        }
    }
    arr.pop();
    arr.push(counter);
    return arr;
    //console.log(arr); 
}
countPositives([-1,1,1,1]);
*/

//Evens and Odds
/*
function allInARow(arr) {
    console.log('allInARow');
    for (var i = 0; i < arr.length; i++) {
        (arr[i] && arr[i+1] && arr[i+2]);
        if ((arr[i]%2 !== 0) && (arr[i+1]%2 !== 0) && (arr[i+2]%2 !== 0)) {
            console.log("That's odd!");
        }
        else if ((arr[i]%2 === 0) && (arr[i+1]%2 === 0) && (arr[i+2]%2 === 0)) {
            console.log("Even more so!");
        } 
    } 
}
allInARow([1,3,5,4,2]);
allInARow([2,3,4,6,8]);
allInARow([0,2,3]);
*/


//Increment the Seconds
/*
function increment(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (i%2 !== 0) {
            arr[i] = arr[i] + 1;
        }
    }
    console.log(arr);
}
increment([9,8,7,6,5]);
*/

//Previous Lengths
/*
function stringLength(arr) {
    var tempStr = " ";
    for (var i = 0; i < arr.length; i++) {
        if (i === 0){
            tempStr = arr[i];
        }
        var previousTempStr = tempStr;
        tempStr = arr[i+1];
        if (arr[i+1]) { // checks make sure next element exist
            arr[i+1] = previousTempStr.length;
        }
        //console.log('current: arr [' + i + ']:', arr[i]);
    }
    console.log(arr);
}
stringLength(["count", "one", "four", "five"]);
//expected output ["count", 5,3,4]
*/

//Add Seven to Most
/*
function addSeven(arr) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr.push(arr[i]+7);
    }
    newArr.shift();
    console.log(arr);
    console.log(newArr);
}
addSeven([0,1,2,3,4]);
*/


//Reverse Array
/*
function reverseArr(arr) {
    var arr2 = [];
    arr2 = [arr[4], arr[3], arr[2], arr[1], arr[0]];
    console.log(arr2);
}
reverseArr([3,1,6,4,2]);
*/


//Outlook: Negative
/*
function turnNegative(arr) {
    var newArr = [];
    console.log(arr, newArr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          newArr.push(-arr[i]);  
        }
        else {
            newArr.push(arr[i]);
          }  
    }
    console.log(newArr);
}
turnNegative([1, -3, 5]);
*/


//Always Hungry
/*
function hungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        //console.log('arr [' + i + ']:', arr[i]);
        if (arr[i] === "food") {
            console.log("yummy");
        }     
    } 
    if ((arr[0] !== "food") && (arr[1] !== "food") && (arr[2] !== "food")) {
        console.log("I'm hungry");
    }             
}
hungry(["food", "yeti", "food"]);
hungry(["yeti","book","dark"]);
*/


//Swap Toward the Center
/*
function swapToCenter(arr) {
    console.log(arr);
    var tempLast = arr[arr.length - 1];
    arr[arr.length - 1] = arr[0];
    arr[0] = tempLast;
    var tempThird = arr[arr.length - 3];
    arr[arr.length - 3] = arr[2];
    arr[2] = tempThird;
    console.log(arr);
}
swapToCenter([1,2,3,4,5,6]);
*/


//Scale the Array
/*
function scaleArray(arr, num) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr = arr[i] * num;
        console.log(newArr);
    }
}
scaleArray([2,4,6,8], 5);
*/