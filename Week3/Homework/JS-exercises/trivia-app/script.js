const body = document.body;
const title = document.createElement('h1');
const description = document.createElement('p');

//title and short description
title.innerText = 'Trivia Game!';
description.innerText =
  'Try your best to figure out the answers. If you are really stuck, click on a question to reveal the answer.';
description.className = 'description';
body.appendChild(title);
body.appendChild(description);
//the main container
const container = document.createElement('div');
body.appendChild(container);
container.className = 'container';

//async/await for quiz API
async function getQuiz() {
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=5');
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
    return 'An error has occured';
  }
}

//helper function for decoding html codes
function decodeHtml(html) {
  let txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

//section with questions and answers
function appendToDOM() {
  getQuiz().then(data => {
    const results = data.results;
    results.forEach(result => {
      //button which will contain the question
      const button = document.createElement('button');
      button.className = 'accordion';
      button.innerText = decodeHtml(result.question);
      container.appendChild(button);

      //div that will contain the answer
      const answerContainer = document.createElement('div');
      const answer = document.createElement('p');
      answerContainer.className = 'display-answers';
      container.appendChild(answerContainer);
      answerContainer.appendChild(answer);
      answer.innerText = decodeHtml(result.correct_answer);

      button.addEventListener('click', () => {
        if (answerContainer.style.display === 'block') {
          answerContainer.style.display = 'none';
        } else {
          answerContainer.style.display = 'block';
        }
      });
    });
  });
}

window.onload = appendToDOM;
