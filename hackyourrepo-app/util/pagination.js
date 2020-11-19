import { displayContributors } from './displayContributors.js';
import { currentPage, rows } from '../script.js';

//create buttons for pagination
export function paginationButton(page, items) {
  let button = document.createElement('button');
  button.innerText = page;

  if (currentPage === page) {
    button.classList.add('active');
  }
  button.addEventListener('click', () => {
    displayContributors(items, rows, page);
    let current_btn = document.querySelector('.pageButton button.active');
    current_btn.classList.remove('active');
    button.classList.add('active');
  });
  return button;
}

//appends pagination buttons to the page, creates needed amount of buttons(1 button is created per 5)
export function appendPagButton(items, rowsPerPage) {
  paginationNumb.innerHTML = '';
  let pageCount = Math.ceil(items.length / rowsPerPage);
  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationButton(i, items);
    paginationNumb.appendChild(btn);
  }
}
