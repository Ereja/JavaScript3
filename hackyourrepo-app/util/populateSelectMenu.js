import { fetchData } from './fetchData.js';

//Using fetch function, to get names of every repo and create options in a dropdown menu

export function addSelectOptions() {
  return fetchData(
    'https://api.github.com/orgs/HackYourFuture/repos?per_page=100',
  ).then((repoInfo) => {
    repoInfo.sort((a, b) => a.name.localeCompare(b.name));

    // (for loop for clarity)
    for (const title of repoInfo) {
      const selectOption = document.createElement('option');
      select.appendChild(selectOption);
      selectOption.innerText = title.name;
    }
    return repoInfo;
  });
}