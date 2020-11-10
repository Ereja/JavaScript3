import { fetchData } from './fetchData.js';
import { displayContributors } from './displayContributors.js';

//fetches data of contributors and sends response for display Contributors
export function fetchContributors(query, rowsPerPage, page) {
  fetchData(`https://api.github.com/repos/HackYourFuture/${query}/contributors`)
    .then(contributorsData =>
      displayContributors(contributorsData, rowsPerPage, page),
    )
}


