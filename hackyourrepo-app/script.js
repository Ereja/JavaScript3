import { createDOMElements } from './util/DOMelements.js';
import { addSelectOptions } from './util/populateSelectMenu.js';
import {
  fetchContributors,
  fetchRepositories,
} from './util/fetchRepoAndContributors.js';

//Variables for pagination
//page we are on
export const currentPage = 1;
//number of items to be displayed per page
export const rows = 5;

function main() {
  createDOMElements();
  addSelectOptions();
  fetchRepositories();
  addSelectOptions().then((repoInfo) => {
    fetchContributors(repoInfo[0].name, rows, currentPage);
  });

  select.addEventListener('change', () => {
    fetchContributors(select.value, rows, currentPage);
    fetchRepositories();
  });
}

window.onload = main;
