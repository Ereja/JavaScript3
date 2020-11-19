import { fetchData } from './fetchData.js';

//Using fetch function, to get names of every repo and create options in a dropdown menu

export function addSelectOptions() {
  fetchData(
    'https://api.github.com/orgs/HackYourFuture/repos?per_page=100',
  ).then(repoInfo => {
    repoInfo
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(title => {
        const selectOption = document.createElement('option');
        select.appendChild(selectOption);
        selectOption.innerText = title.name;
      });
  });
}
