import { displayContributors } from './contributors.js';
import { currentPage, rows} from '../script.js';

export function paginationButton(page, items) {
  let button = document.createElement('button');
  button.innerText = page;

  if (currentPage === page) button.classList.add('active');
  button.addEventListener('click', () => {
    // currentPage = page;
    displayContributors(items, rows, currentPage);
    let current_btn = document.querySelector('.pageButton button.active');
    current_btn.classList.remove('active');
    button.classList.add('active');
  });

  return button;
}