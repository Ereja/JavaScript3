export function fetchData(url) {
  return fetch(url)
  .then(response => {
    if(response.ok) {
      return response.json();
    } else {
      throw new Error('Network request failed');
    }
  })
  .catch(error => {
    body.innerHTML = error;
  })
}

