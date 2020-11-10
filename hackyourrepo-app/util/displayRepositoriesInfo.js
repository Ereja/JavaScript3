import { fetchData } from './fetchData.js';

//After fetching data, this function will create a table to store the information about the selected repository
export function addRepoInfo() {
  fetchData(
    'https://api.github.com/orgs/HackYourFuture/repos?per_page=100',
  ).then(repoInfo => {
    for (const property of repoInfo) {
      if (property.name === select.value) {
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
            }
            </td>
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
  });
}
