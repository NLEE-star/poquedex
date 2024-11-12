async function getData() {
    const url = "https://pokeapi.co/api/v2/pokemon";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);

        const listContainer = document.getElementById(`lista`);


        json.results.forEach(async (pokemon) => {
            const currenPokemon = await fetch(pokemon.url);
            const currenPokemonJson = await currenPokemon.json()

            console.log(currenPokemonJson)
            
            const element = `
            <li>
            <p>${currenPokemonJson.id}<p/>
            <img src="${currenPokemonJson.sprites.other.home.front_default}" />
                <h2>${currenPokemonJson.name.toUpperCase()}</h2>
            </li>
            `
            listContainer.innerHTML += element
        });

    } catch (error) {
        console.error(error.message);
    }
}
getData()