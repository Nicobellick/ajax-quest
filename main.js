// This function loads pokemon data from the Pokemon API
function fetchPokemonJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const pokemonId = 0;
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
    axios.get(url)
      .then(function(response) {
        return response.data[pokemonId]; // response.data instead of response.json() with fetch
      })
      .then(function(simpsons) {
        console.log('data decoded from JSON:', simpsons);
  
        // Build a block of HTML
        const simpsonsHtml = `
          <p><strong>${simpsons.character}</strong></p>
          <img src="${simpsons.image}" />
          <caption>${simpsons.quote}</caption>
        `;
        document.querySelector('#simpson').innerHTML = simpsonsHtml;
      });
  }
  
  fetchPokemonJSON();
  