import { fetchData } from './repositoriesFetch.js';

export function fetchContributors(query) {
  fetchData(
    `https://api.github.com/repos/HackYourFuture/${query}/contributors`,
  ).then(contributorsData => {
    //making sure that with each click on select menu, new contributors being generated and not stacked on top of each other
    divForContr.innerHTML = '';
    contributorsData.forEach(contributor => {
      //creating the elements for each contributor
      const div = document.createElement('div');
      const link = document.createElement('a');
      const image = document.createElement('img');
      const text = document.createElement('p');
      const span = document.createElement('span');
      //appending the elements
      div.className = 'contributors-container';
      divForContr.appendChild(div);
      div.appendChild(image);
      div.appendChild(text);
      div.appendChild(span);
      text.appendChild(link);

      image.src = contributor.avatar_url;
      image.alt = contributor.login;
      link.innerText = contributor.login;
      link.href = contributor.html_url;
      span.innerText = contributor.contributions;
    });
  });
}
