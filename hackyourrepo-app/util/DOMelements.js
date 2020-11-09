//This function creates the base layout of webpage. For extra readability removed all createElements/appendChild and changed it to use template literals instead, as this provides extra readability plus code like this is much shorter

export function createDOMElements() {
  const body = document.body;
  body.id = 'body';
  body.innerHTML = `
  <header>
  <section>
  <h1>HYF Repositories</h1>
  <select id="select"></select>
  </section>
  </header>


  <main>
  <section id="repositoriesInfo" class="rep-info">
  <h2>Repositories Information:</h2>
  <table id="table">
  </table>
  </section>

  <section class="contributors">
  <h2>Contributors:</h2>
  <div id="divForContr">
  </div>
  <div id="paginationNumb" class="pageButton"></div>
  </section>
  </main>


  <footer>
  <p>HYF Repositories 2020</p>
  </footer>
  `;
}
