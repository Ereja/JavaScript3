'use strict';

function main() {
  //creating all the elements
  const body = document.body;
  const container = document.createElement('div');
  const button = document.createElement('button');
  const select = document.createElement('select');
  const image = document.createElement('img');

  //appending the elements
  body.appendChild(container);
  container.appendChild(button);
  container.appendChild(select);
  button.innerText = 'Get a Pokemon!';

  //api
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  /*
  Since I got stuck for really long time with this API trying to get images, used this article for extra help https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2 . The functions fetchData and fetchPokemon data comes from it. I just changed regular functions to arrow functions and added error handling
  */

  function fetchData() {
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error('You caught an Error!');
        }
      })
      .then((allpokemon) => {
        allpokemon.results.forEach((pokemon) => {
          fetchPokemonData(pokemon);
        });
      })
      .catch((error) => console.log(error));
  }
  fetchData();

  function fetchPokemonData(pokemon) {
    //have no idea why url is wrapped as object :(
    const { url } = pokemon;
    fetch(url)
      .then((response) => response.json())
      .then((pokeData) => {
        addPokemonToDOM(pokeData);
      });
  }

  //adding options to select menu
  function addPokemonToDOM(pokeData) {
    const selectOption = document.createElement('option');
    selectOption.innerText = pokeData.name;
    selectOption.value = pokeData.sprites.front_default;

    //appending options to appear only after button has been clicked
    button.addEventListener('click', function () {
      select.appendChild(selectOption);
    });
  }

  //appending images to the dom, once selection has been made
  select.addEventListener('change', function () {
    body.appendChild(image);
    image.src = select.value;
  });
}

//loading main function when page loads
window.addEventListener('load', main);
