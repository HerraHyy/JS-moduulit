const form = document.querySelector('#search-form');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  resultsContainer.innerHTML = '';

  const query = document.querySelector('#query').value;
  // const value = input.value;
  const endpointUrl = `https://api.tvmaze.com/search/shows?q=${query}`;
  const response = await fetch(endpointUrl);
  const data = await response.json();

  data.forEach((tvShow) => {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const div = document.createElement('div');

    h2.textContent = tvShow.show.name;
    a.textContent = 'Details';
    a.href = tvShow.show.url;
    a.target = '_blank';
    img.src = tvShow.show.image?.medium;
    img.alt = tvShow.show.name;

    article.appendChild(h2);
    article.appendChild(a);
    article.appendChild(img);
    article.appendChild(div);

    resultsContainer.appendChild(article);
  });
});