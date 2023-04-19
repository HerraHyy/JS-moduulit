const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = document.querySelector('#query').value;

  const endpointUrl = `https://api.tvmaze.com/search/shows?q=${query}`;

  try {
    const response = await fetch(endpointUrl); // Tein tämän jo teht1:ssä...
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});