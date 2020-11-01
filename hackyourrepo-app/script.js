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
  secondSection.className = 'rep-info';
  const table = document.createElement('table');
  const thirdSection = document.createElement('section');
  thirdSection.className = 'contributors';
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

  //fetch data from github api
  function fetchData() {
    const apiURL =
      'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
    fetch(apiURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw 'An error has occured.';
        }
      })
      //object to be used for selection menu and the table
      .then((data) => {
        const repoInfo = data.map((info) => {
          return {
            repository: info.name,
            description: info.description,
            forks: info.forks,
            updated: info.updated_at.replace(/[ tz]/gi, ' '),
            URL: info.svn_url,
          };
        });
        addSelectOptions(repoInfo);
        // addRepoInfo(repoInfo);
        // return data;
      });
  }
  fetchData();

  //addding select options
  function addSelectOptions(repoInfo) {
    repoInfo
      .sort((a, b) => a.repository.localeCompare(b.repository))
      .forEach((title) => {
        const selectOptions = document.createElement('option');
        selectMenu.appendChild(selectOptions);
        selectOptions.innerText = title.repository;
      });
      addRepoInfo(repoInfo);
  }
  // creating a table and putting repositories info inside it

  function addRepoInfo(repoInfo) {
    selectMenu.addEventListener('click', (e) => {
      for (const property of repoInfo) {
        console.log(e.target.value);
        console.log(selectMenu.value);
          if (e.target.value === selectMenu.value) {
            table.innerHTML = `
            <tr>
            <th>Repository :</th>
            <td><a href="${property.URL}" target="_blank" >${property.repository}</a></td>
            </tr>
            <tr>
            <th>Description :</th>
            <td>${property.description}</td>
            </tr>
            <tr>
            <th>Forks :</th>
            <td>${property.forks}</td>
            </tr>
            <tr>
            <th>Updated :</th>
            <td>${property.updated}</td>
            </tr>
            `;
          }
      }
    });
  }
} // <--end of main function

main();
