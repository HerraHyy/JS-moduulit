async function getChuckNorrisJoke() {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();
  console.log(data.value);
}

getChuckNorrisJoke();