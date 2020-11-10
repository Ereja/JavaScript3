//This function is used to fetch data and catch errors that may occur in the way
export async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Network request failed.');
    }
  } catch (error) {
    body.innerHTML = error;
  }
}
