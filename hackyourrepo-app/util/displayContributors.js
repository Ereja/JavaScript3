import { appendPagButton } from './pagination.js';


//displays 5 contributors per page

export function displayContributors(contributorsData, rowsPerPage, page) {
  const divForContr = document.getElementById('divForContr');
  //making sure that with each click on select menu, new contributors being generated and not stacked on top of each other
  divForContr.innerHTML = '';
  page--;
  const start = rowsPerPage * page;
  const end = start + rowsPerPage;
  const paginatedContributors = contributorsData.slice(start, end);

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
  appendPagButton(contributorsData, rowsPerPage);
}
