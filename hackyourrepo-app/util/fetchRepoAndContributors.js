import { fetchData } from './fetchData.js';
import { displayContributors } from './displayContributors.js';
import { addRepoInfo } from './displayRepositoriesInfo.js';

//fetches data of contributors and sends response for display Contributors
export function fetchContributors(query, rowsPerPage, page) {
  fetchData(
    `https://api.github.com/repos/HackYourFuture/${query}/contributors`,
  ).then(contributorsData =>
    displayContributors(contributorsData, rowsPerPage, page),
  );
}

export function fetchRepositories() {
  fetchData(
    'https://api.github.com/orgs/HackYourFuture/repos?per_page=100',
  ).then(repoInfo => addRepoInfo(repoInfo));
}
