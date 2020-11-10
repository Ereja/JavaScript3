import { paginationButton } from './paginationButtons.js';

//appends pagination buttons to the page, creates needed amount of buttons(1 button is created per 5)
export function appendPagButton(items, rowsPerPage) {
  paginationNumb.innerHTML = '';
  let pageCount = Math.ceil(items.length / rowsPerPage);
  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationButton(i, items);
    paginationNumb.appendChild(btn);
  }
}
