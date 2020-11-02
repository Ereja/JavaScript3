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
  const divForContr = document.createElement('div');
  const contributorsTitle = document.createElement('p');

  //appending elements to the MAIN section
  body.appendChild(main);
  main.appendChild(secondSection);
  secondSection.appendChild(table);
  main.appendChild(thirdSection);
  thirdSection.appendChild(contributorsTitle);
  thirdSection.appendChild(divForContr);

  //adding classes and text
  secondSection.className = 'rep-info';
  thirdSection.className = 'contributors';
  contributorsTitle.innerHTML = 'Contributors';

  //appending elements to the FOOTER section
  const footer = document.createElement('footer');
  const footerInfo = document.createElement('p');

  //appending elements to the FOOTER
  body.appendChild(footer);
  footer.appendChild(footerInfo);
  footerInfo.innerText = 'HYF Repositories';

  //fetch data from github api
  function fetchRepoInfo() {
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
      .then((repoInfo) => {
        addSelectOptions(repoInfo);
      })
      .catch((error) => {
        contributorsTitle.innerText = '';
        const errorDiv = document.createElement('div');
        secondSection.appendChild(errorDiv);
        errorDiv.innerHTML = error;
      });
  }
  fetchRepoInfo();

  //addding select options
  function addSelectOptions(repoInfo) {
    repoInfo
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach((title) => {
        const selectOptions = document.createElement('option');
        selectMenu.appendChild(selectOptions);
        selectOptions.innerText = title.name;
      });
    addRepoInfo(repoInfo);
  }

  // creating a table and putting repositories info inside it
  //I would love to make it that once page loads, we already have filled table with info from first repo(alumni) but everytime I try to call the function, I get errors
  function addRepoInfo(repoInfo) {
    selectMenu.addEventListener('click', () => {
      for (const property of repoInfo) {
        if (property.name === selectMenu.value) {
          table.innerHTML = `
            <tr>
            <th>Repository :</th>
            <td><a href="${property.svn_url}" target="_blank" >${
            property.name
          }</a></td>
            </tr>
            <tr>
            <th>Description :</th>
            <td>${
              property.description === null
                ? (property.description = '')
                : property.description
            }</td>
            </tr>
            <tr>
            <th>Forks :</th>
            <td>${property.forks}</td>
            </tr>
            <tr>
            <th>Updated :</th>
            <td>${property.updated_at.replace(/[ tz]/gi, ' ')}</td>
            </tr>
            `;
        }
      }
      const option = selectMenu.value;
      fetch(
        `https://api.github.com/repos/HackYourFuture/${option}/contributors`,
      )
        .then((response) => {
          return response.json();
        })
        .then((contributorsData) => {
          //making sure that with each click on select menu, new contributors being generated and not stacked on top of each other
          divForContr.innerHTML = '';
          contributorsData.forEach((contributor) => {
            console.log(contributor);
            //creating the elements for each contributor
            const div = document.createElement('div');
            const link = document.createElement('a');
            const image = document.createElement('img');
            const text = document.createElement('p');
            const span = document.createElement('span');
            //appending the elements
            div.className = 'contributors-container';
            divForContr.appendChild(div);
            div.appendChild(image);
            div.appendChild(text);
            div.appendChild(span);
            text.appendChild(link);

            image.src = contributor.avatar_url;
            image.alt = contributor.login;
            link.innerText = contributor.login;
            link.href = contributor.html_url;
            span.innerText = contributor.contributions;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
} // <--end of main function

window.addEventListener('load', main);
