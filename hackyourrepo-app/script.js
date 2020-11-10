import { createDOMElements } from './util/DOMelements.js';
import { addSelectOptions } from './util/populateSelectMenu.js';
import { addRepoInfo } from './util/displayRepositoriesInfo.js';
import { fetchContributors } from './util/fetchContributors.js';

//Variables for pagination
//page we are on
export let currentPage = 1;
//number of items to be displayed per page
export let rows = 5;

function main() {
  createDOMElements();
  addSelectOptions();
  addRepoInfo();
  //this is the most terrible solution ever(as soon as there appears a new repository before alumni for example "abc", this needs to be manually changed), but this is the only way I found to display contributors as soon as page loads...
  fetchContributors('alumni', rows, currentPage);

  select.addEventListener('change', () => {
    fetchContributors(select.value, rows, currentPage);
    addRepoInfo();
  });
}

window.onload = () => {
  main();
};
