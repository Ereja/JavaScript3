'use strict';

//given function
const getAnonName = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName)
      return callback(new Error("You didn't pass in a first name!"));

    const fullName = `${firstName} Doe`;

    return callback(fullName);
  }, 2000);
};
getAnonName('John', console.log);

//function rewritten using promises
function getAnonName2(firstName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject("You didn't pass in a first name!");
      } else {
        resolve(`${firstName} Doe`);
      }
    }, 2000);
  })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
}

getAnonName2('John2 ');
