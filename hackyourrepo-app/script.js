'use strict';

function main() {
  //recreating the HTML elements HEADER

  const body = document.body;
  const header = document.createElement('header');
  const firstSection = document.createElement('section');
  const title = document.createElement('h1');
  const selectMenu = document.createElement('select');

  //appending elements to the HEADER section
  body.appendChild(header);
  header.appendChild(firstSection);
  firstSection.appendChild(title);
  firstSection.appendChild(selectMenu);

  //adding the title
  title.innerText = 'HYF Repositories';

  //recreating the MAIN area
  const main = document.createElement('main');
  const secondSection = document.createElement('section');
  const table = document.createElement('table');
  const thirdSection = document.createElement('section');
  const contributorsTitle = document.createElement('p');

  //appending elements to the MAIN section
  body.appendChild(main);
  main.appendChild(secondSection);
  secondSection.appendChild(table);
  main.appendChild(thirdSection);
  thirdSection.appendChild(contributorsTitle);

  //adding classes and text
  secondSection.className = 'rep-info';
  thirdSection.className = 'contributors';
  contributorsTitle.innerText = 'Contributors';

  //appending elements to the FOOTER section
  const footer = document.createElement('footer');
  const footerInfo = document.createElement('p');

  //appending elements to the FOOTER
  body.appendChild(footer);
  footer.appendChild(footerInfo);
  footerInfo.innerText = 'HYF Repositories';

  //SOMETHING WILL BE HAPPENING FROM HERE ONE

  function fetchData() {
    const apiURL =
      'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
    fetch(apiURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw 'Need to put in an error';
        }
      })
      .then((data) => {
        const repoNames = data.map((name) => name.name);
        addSelectOptions(repoNames);
        console.log(repoNames); //will need to send this to a function
        return data;
      });
  }
  fetchData();

  function addSelectOptions(repoNames) {
    repoNames.forEach((title) => {
      const selectOptions = document.createElement('option');
      selectMenu.appendChild(selectOptions);
      selectOptions.innerText = title;
    });
  }

  //Loop through array and add it values to the table
  // function updateInfo() {
  //   for (const property of placeholderRepos)
  //     if (selectMenu.value === property.name) {
  //       repoName.innerText = property.name;
  //       repoDescription.innerText = property.description;
  //       repoForks.innerText = property.forks;
  //       repoUpdates.innerText = property.updated;
  //     }
  // }

  // updateInfo();
  // selectRepos.addEventListener('change', updateInfo);
}

main();

// const selectRepos = document.getElementById('repositories');
// const repoName = document.getElementById('repo-name');
// const repoDescription = document.getElementById('repo-description');
// const repoForks = document.getElementById('repo-forks');
// const repoUpdates = document.getElementById('repo-updates');
// //will be needed for later
// const contributors = document.getElementById('contributors');

//Sort alphabetically:
// function sortAlphabetically(array) {
//   array.sort((a, b) => {
//     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
//     if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
//     return 0;
//   });
//   return array;
// }
// sortAlphabetically(placeholderRepos);
