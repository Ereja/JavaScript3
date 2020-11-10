import { fetchData } from './repositoriesFetch.js';
import { appendPagButton } from './appendPaginationButton.js';


export function fetchContributors(query, rowsPerPage, page) {
  console.log(query);
  fetchData(`https://api.github.com/repos/HackYourFuture/${query}/contributors`)
    .then(contributorsData =>
      displayContributors(contributorsData, rowsPerPage, page),
    )
    .catch(error => console.error(error));
}

export function displayContributors(contributorsData, rowsPerPage, page) {
  const divForContr = document.getElementById('divForContr');
  //making sure that with each click on select menu, new contributors being generated and not stacked on top of each other
  divForContr.innerHTML = '';
  page--;

  let start = rowsPerPage * page;
  let end = start + rowsPerPage;
  let paginatedContributors = contributorsData.slice(start, end);

  paginatedContributors.forEach(contributor => {
    divForContr.innerHTML += `
      <div class="contributors-container">
      <img src="${contributor.avatar_url}" alt="${contributor.login}">
      <p>
      <a href="${contributor.html_url}" target = _blank>${contributor.login}</a>
      </p>
      <span>${contributor.contributions}</span>
      </div>
      `;
  });
  console.log(contributorsData);
  appendPagButton(contributorsData, rowsPerPage);
}
