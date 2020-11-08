import { fetchData } from './repositoriesFetch.js';

export function fetchContributors(query) {
  fetchData(
    `https://api.github.com/repos/HackYourFuture/${query}/contributors`,
  ).then(contributorsData => {
    //making sure that with each click on select menu, new contributors being generated and not stacked on top of each other
    divForContr.innerHTML = '';
    contributorsData.forEach(contributor => {
      divForContr.innerHTML += `
      <div class="contributors-container">
      <img src="${contributor.avatar_url}" alt="${contributor.login}">
      <p>
      <a href="${contributor.html_url}" target_blank>${contributor.login}</a>
      </p>
      <span>${contributor.contributions}</span>
      </div>
      `;
    });
  });
}
