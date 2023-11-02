const numberInput = document.getElementById('input');
const sendBtn = document.getElementById('button');
const tasksContainer = document.getElementById('container');


const renderizarPokemon = (pokemonData) => {
  const { name, types, height, weight, sprites } = pokemonData;

  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon-card');

  const pokemonImagen = document.createElement('img');
  pokemonImagen.src = sprites.front_shiny;

  const pokemonNombre = document.createElement('h2');
  pokemonNombre.textContent = `Nombre: ${name}`;

  const pokemonTipos = document.createElement('p');
  pokemonTipos.textContent = `Tipo: ${types.map(type => type.type.name).join(', ')}`;

  const pokemonAltura = document.createElement('p');
  pokemonAltura.textContent = `Altura: ${(height / 10)} metros`;

  const pokemonPeso = document.createElement('p');
  pokemonPeso.textContent = `Peso: ${(weight / 10)} kilos`;

  pokemonCard.appendChild(pokemonImagen);
  pokemonCard.appendChild(pokemonNombre);
  pokemonCard.appendChild(pokemonTipos);
  pokemonCard.appendChild(pokemonAltura);
  pokemonCard.appendChild(pokemonPeso);

  tasksContainer.innerHTML = '';
  tasksContainer.appendChild(pokemonCard);
}

const renderizarError = (message) => {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error');
  errorContainer.textContent = message;

  tasksContainer.innerHTML = '';
  tasksContainer.appendChild(errorContainer);
}




const init = () => {
  sendBtn.addEventListener('click', buscarPokemon);
}

init();

