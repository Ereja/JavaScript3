import { fetchContributors } from './contributors.js';
import { currentPage, rows} from '../script.js';

export function paginationButton(page, items) {
  let button = document.createElement('button');
  button.innerText = page;

  //can`t directly use currentPage value, as get error about assigning new value to const
  let pageNumber = currentPage;
  if (pageNumber === page) button.classList.add('active');

  button.addEventListener('click', () => {
    pageNumber = page;
    fetchContributors(items, rows, currentPage);
    let current_btn = document.querySelector('.pageButton button.active');
    current_btn.classList.remove('active');
    button.classList.add('active');
  });

  return button;
}