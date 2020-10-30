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

  //fetch data from github api
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
      //names of repositories for the select menu
      .then((data) => {
        const repoNames = data.map((name) => name.name);
        addSelectOptions(repoNames);
        return data;
      })

      //object to be used for getting data to populate table with
      .then((data) => {
        const repoInfo = data.map((info) => {
          return {
            Repository: info.name,
            Description: info.description,
            Forks: info.forks,
            Updated: info.updated_at.replace(/[ tz]/gi, ' '),
            URL: info.svn_url,
          };
        });
        console.log(repoInfo);
        // addRepoInfo(repoInfo);
        // return data;
      });
  }
  fetchData();

  //addding select options
  function addSelectOptions(repoNames) {
    repoNames
      .sort((a, b) => a.localeCompare(b))
      .forEach((title) => {
        const selectOptions = document.createElement('option');
        selectMenu.appendChild(selectOptions);
        selectOptions.innerText = title;
      });
  }

  //creating a table and putting repositories info inside it
  // function addRepoInfo(repoInfo) {
  //   //skeleton of the table
  //   const tableRow = document.createElement('tr');
  //   const tableHeader = document.createElement('thead');
  //   const tableData = document.createElement('td');
  //   //appending the elements
  //   table.appendChild(tableRow);
  //   tableRow.appendChild(tableHeader);
  //   tableRow.appendChild(tableData);
  //   for (const values of repoInfo)
  //     if (selectMenu.value === values.Name) {
  //       //adding information to the table
  //       repoInfo.forEach((infoTable) => {
  //         tableHeader.innerText = Object.keys(infoTable);
  //         tableData.innerText = Object.values(infoTable);
  //       });
  //     }
  // }



  // //Loop through array and add it values to the table
  // function updateInfo() {
  //   for (const property of placeholderRepos)
  //     if (selectRepos.value === property.name) {
  //       repoName.innerText = property.name;
  //       repoDescription.innerText = property.description;
  //       repoForks.innerText = property.forks;
  //       repoUpdates.innerText = property.updated;
  //     }
}

main();

// const selectRepos = document.getElementById('repositories');
// const repoName = document.getElementById('repo-name');
// const repoDescription = document.getElementById('repo-description');
// const repoForks = document.getElementById('repo-forks');
// const repoUpdates = document.getElementById('repo-updates');
// //will be needed for later
// const contributors = document.getElementById('contributors')
