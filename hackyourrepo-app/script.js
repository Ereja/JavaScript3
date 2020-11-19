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
  //this is the most terrible solution ever(as soon as there appears a new repository before alumni for example "abc", this needs to be manually changed), but this is the only way I found to display contributors as soon as page loads...
  fetchContributors('alumni', rows, currentPage);

  select.addEventListener('change', () => {
    fetchContributors(select.value, rows, currentPage);
    fetchRepositories();
  });
}

window.onload = main;
