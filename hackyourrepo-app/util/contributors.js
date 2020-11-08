//not sure why, even though fetchData is populated in main script.js file, I can access it here only after importing. Not sure if this would be considered good practise
import { fetchData } from './repositoriesFetch.js';

//This function uses fetchData in order to create layout for each contributor

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
