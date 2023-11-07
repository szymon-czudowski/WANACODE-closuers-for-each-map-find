//Task 1 - write the getDividedByFunction

function getDivideByFunction(divider) {
 return function(number) {
     return number / divider
   }
}

const divideByFive = getDivideByFunction(5);
console.log(divideByFive(10)); // 2
console.log(divideByFive(50)); // 10

const divideByTwo = getDivideByFunction(2);
console.log(divideByTwo(8)); // 4
console.log(divideByTwo(50)); // 25

//Task 2 - write the getDeltaFunction

function getDeltaFunction(initialFactors) {
    return function(functionFactors) {
        const a = functionFactors.a || initialFactors.a;
        if( a === 0 || a === undefined ) {
            return NaN;
        }
        const b = functionFactors.b ?? initialFactors.b;
        const c = functionFactors.c === 0 ? functionFactors.c : (functionFactors.c || initialFactors.c);

        if (b === undefined || c === undefined) {
            return NaN;
        }
        const result = (b*b - 4 * a * c);
        return result;
    }
}

const getDelta = getDeltaFunction({ a: 1, b: 2, c: 3 });
console.log(getDelta()); // -8
console.log(getDelta({ b: 12 })); // 132
console.log(getDelta({ a: 4, b: 10 })); // 52
console.log(getDelta({ a: 4, b: 0 })); // -48

console.log(getDeltaFunction({ a: 1, c: 3 })()); // NaN
const anotherDeltaFunction = getDeltaFunction({ a: 1, c: 3 });
console.log(anotherDeltaFunction({ b: 15 }));// 213

//Task 3 - write isStringInArray  using the find function

function isStringInArray(arr, searchString) {
        return arr.find(item => item === searchString) !== undefined;
}

isStringInArray(['Orange', 'Apple'], 'Apple');
isStringInArray(['Onion', 'Cabbage'], 'Potato');

//Task 4 - write the forEach  function from scratch using a for  loop

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}

const vegetables = ['Carrot', 'Cabbage', 'Onion'];

function printVegetable(vegetable, index) {
    console.log(vegetable, index);
}

forEach(vegetables, printVegetable);

const fruits = ['Apple', 'Orange', 'Watermelon'];
forEach(fruits, function(fruit, index) {
    console.log(fruit, index);
});

//Task 5 - create the executeAfterFiveSeconds function that calls the provided function after five seconds

function executeAfterFiveSeconds(callback) {
    setTimeout(callback, 5000);
}
function sayHello() {
    console.log('Hello!');
}
executeAfterFiveSeconds(sayHello);

//Task 6 - create the getRandomIntegerGenerator  function.
// It should return a function that returns a random integer between two provided numbers.

function getRandomIntegerGenerator(min, max) {
    return function () {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
}

const getRandomDigit = getRandomIntegerGenerator(0, 9);
console.log(getRandomDigit());

const getRandomNumber = getRandomIntegerGenerator(-10, 10);
console.log(getRandomNumber());

//Task 7 - create the findObjectProperty that returns the name of a property from an object
// it works similarly to the find built into JavaScript, but works with an object instead of an array
// if there is no matching property name, return null

function findObjectProperty(obj, condition) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && condition(obj[key])) {
            return key;
        }
    }
    return null;
}

const redApple = {
    color: 'red',
    weightInGrams: 150
};

const propertyName = findObjectProperty(redApple, function(propertyValue) {
    return propertyValue === 'red';
});

console.log(propertyName); // color

const john = {
    name: 'John',
    bestFriend: {
        name: 'Adam'
    }
};

const adamPropertyName = findObjectProperty(john, function(propertyValue) {
    return propertyValue && propertyValue.name === 'Adam';
});

console.log(adamPropertyName); // bestFriend

// Task 8 -create the getRandomCharacterGenerator function.
// It should return a function that returns a random character from the provided string.

function getRandomCharacterGenerator(characters) {
    return function () {
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters.charAt(randomIndex);
    };
}

const getRandomDigit = getRandomCharacterGenerator('0123456789');
console.log(getRandomDigit()); // Returns a random digit

const getRandomABC = getRandomCharacterGenerator('abcABC');
console.log(getRandomABC()); // Returns a random character from 'abcABC'

// Task 9 - create the getPrefixedStringGenerator function.
// It should return a function that returns a string with the added prefix.

function getPrefixedStringGenerator(prefix) {
    return function (str) {
        return prefix + str;
    };
}

const prefixStringWithMister = getPrefixedStringGenerator('Mr.');
console.log(prefixStringWithMister(' John')); // Mr. John
console.log(prefixStringWithMister(' Adam')); // Mr. Adam

const prefixStringWithMiss = getPrefixedStringGenerator('Ms.');
console.log(prefixStringWithMiss(' Kate')); // Ms. Kate
console.log(prefixStringWithMiss(' Julie')); // Ms. Julie

const prefixStringWithNegative = getPrefixedStringGenerator('un');
console.log(prefixStringWithNegative('happy')); // unhappy
console.log(prefixStringWithNegative('productive')); // unproductive
console.log(prefixStringWithNegative('fair')); // unfair


// CODEWARS TASKS
// https://www.codewars.com/kata/5715eaedb436cf5606000381
// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.
// SOLVE USING forEach function
function positiveSum(arr) {
    let sum = 0;
    arr.forEach(function(num) {
        if (num > 0) {
            sum += num;
        }
    });
    return sum;
}

// https://www.codewars.com/kata/54edbc7200b811e956000556
//
//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
//For example,
//
//    [true,  true,  true,  false,
//        true,  true,  true,  true ,
//        true,  false, true,  false,
//        true,  false, false, true ,
//        true,  true,  true,  true ,
//        false, false, true,  true]
//The correct answer would be 17.
//
//Hint: Don't forget to check for bad values like null/undefined
// solve using the filter function
function countSheeps(sheep) {
    const sheepCount = sheep.filter((isSheep) => isSheep === true).length;
    return sheepCount;
}

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c
// Can you find the needle in the haystack?
//
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
// "found the needle at position " plus the index it found the needle, so:
//
// Example(Input --> Output)
//
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"
// solve using the findIndex  function
function findNeedle(haystack) {
    const wantedString = (element) => element === "needle";
    return `found the needle at position ${haystack.findIndex(wantedString)}`;
}

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e
// Given an array of integers, return a new array with each value doubled.
//
// For example:
//
// [1, 2, 3] --> [2, 4, 6]
// solve using the map  function
function maps(x){
    return x.map(function(item) {
        return item * 2;
    })
}

// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
// solve using the map  function
function invert(array) {
    return array.map(n => n * (-1));
}

// https://www.codewars.com/kata/563e320cee5dddcf77000158
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
// Return the average of the given array rounded down to its nearest integer.
//
// The array will never be empty.
// solve using the forEach  function
function getAverage(marks){
    let marksSum = 0;
    marks.forEach(function (mark) {
        marksSum += mark;
    });

    return Math.floor(marksSum / marks.length);
}