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
  fetchContributors('QA-Training');
}

window.onload = () => {
  main();
};
