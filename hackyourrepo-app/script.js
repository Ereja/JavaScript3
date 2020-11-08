import { createDOMElements } from './util/DOMelements.js';
import { fetchData } from './util/repositoriesFetch.js';
import { addSelectOptions } from './util/populateSelectMenu.js';
import { addRepoInfo } from './util/repositories.js';
import { fetchContributors } from './util/contributors.js';

function main() {
  createDOMElements();
  fetchData('https://api.github.com/orgs/HackYourFuture/repos?per_page=100');
  addSelectOptions();
  addRepoInfo();
  //this is the most terrible solution ever(as soon as there appears a new repository before alumni for example "abc", this needs to be manually changed), but this is the only way I found to display contributors as soon as page loads...
  fetchContributors('alumni');
  select.addEventListener('change', () => {
    fetchContributors(select.value);
    addRepoInfo();
  });
}

window.onload = () => {
  main();
};
