//After fetching data, this function will create a table to store the information about the selected repository
export function addRepoInfo(repoInfo) {
  const repository = repoInfo.find(element => element.name === select.value);
    table.innerHTML = `
            <tr>
            <th>Repository :</th>
            <td>
            <a
            href="${repository.svn_url}"
            target="_blank">
            ${repository.name}
            </a>
            </td>
            </tr>
            <tr>
            <th>Description :</th>
            <td>${(repository.description = null ?? '')}
            </td>
            </tr>
            <tr>
            <th>Forks :</th>
            <td>${repository.forks}</td>
            </tr>
            <tr>
            <th>Updated :</th>
            <td>${repository.updated_at.replace(/[ tz]/gi, ' ')}</td>
            </tr>
            `;
  };
