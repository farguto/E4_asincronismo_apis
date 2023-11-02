const buscarPokemon = async () => {
    const inputNumero = parseInt(numberInput.value);
  
    if (isNaN(inputNumero)) {
      renderizarError('Por favor ingresa un número válido.');
      return;
    }
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputNumero}`);
      if (response.ok) {
        const data = await response.json();
        renderizarPokemon(data);
      } else {
        renderizarError('No se encontró un Pokémon con ese número.');
      }
    } catch (error) {
      renderizarError('Ocurrió un error al buscar el Pokémon. Intenta nuevamente');
    }
  }