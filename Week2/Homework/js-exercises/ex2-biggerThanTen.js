'use strict';
/*
 Write a function called checkDoubleDigits that:
Takes 1 argument: a number
Returns a new Promise
If the number is bigger than 10, resolve with the string: "The number is bigger than 10!"
If the number is smaller than 10, reject with the error: "Error! The number is smaller than 10..."
 */

function checkDoubleDigits(num) {
  return new Promise((resolve, reject) => {
    if (num >= 10) {
      resolve('The number is bigger than 10!');
    } else {
      reject('Error! The number is smaller than 10...');
    }
  })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
}

//test (error is printed last)
checkDoubleDigits(10);
checkDoubleDigits(5);
checkDoubleDigits(100);
