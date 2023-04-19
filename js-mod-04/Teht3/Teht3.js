const form = document.querySelector('#search-form');
const resultsTable = document.querySelector('#results tbody');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Clear search results
  resultsTable.innerHTML = '';

  const input = document.querySelector('#query');
  const value = input.value;
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value}`);
  const data = await response.json();

  // HTML elements
  data.forEach((tvShow) => {
    const tr = document.createElement('tr');
    const img = document.createElement('img');
    const nameCell = document.createElement('td');
    const summaryCell = document.createElement('td');
    const detailsCell = document.createElement('td');
    const a = document.createElement('a');

    img.src = tvShow.show.image?.medium;
    img.alt = tvShow.show.name;
    nameCell.textContent = tvShow.show.name;
    a.textContent = 'Details';
    a.href = tvShow.show.url;
    a.target = '_blank';
    detailsCell.appendChild(a);

    tr.appendChild(img); // Yritin piilottaa näitä näkyvistä ennen hakua mutta en onnistunut
    tr.appendChild(nameCell);
    tr.appendChild(summaryCell);
    tr.appendChild(detailsCell);

    resultsTable.appendChild(tr);
  });
});