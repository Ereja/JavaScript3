'use strict';

//In this exercise you'll practice refactoring Promise syntax into async/await + try/catch syntax. Rewrite exercise A & B using async/await + try/catch syntax.

// Exercise A
function getData(url) {
  fetch(url)
    .then(response => response.json)
    .then(json => console.log(json))
    .catch(error => console.log(error));
}

getData('https://randomfox.ca/floof/');

//            COMPLETED EXERCISE1:

async function getData2(url) {
  try {
    const response = await fetch(url);
    const data = console.log(await response.json());
    return data;
  } catch (error) {
    console.log(error);
  }
}
getData2('https://randomfox.ca/floof/');

//now sure if we had to blindly follow given code and return json as "native code" or add brackets, to make it properly functioning?

// Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

const makeAllCaps = array => {
  return new Promise((resolve, reject) => {
    let capsArray = array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        reject('Error: Not all items in the array are strings!');
      }
    });
    resolve(capsArray);
  });
};

makeAllCaps(arrayOfWords)
  .then(result => console.log(result))
  .catch(error => console.log(error));

//            COMPLETED EXERCISE2:

async function capitalise(array) {
  try {
    const result = await makeAllCaps(array);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

capitalise(arrayOfWords);

//left the given functions to have as a visual reference for myself
