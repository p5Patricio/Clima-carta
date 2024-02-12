const btnsearch = document.getElementById('btnBuscar')
const inputcity = document.getElementById('searchCity')

btnsearch.addEventListener('click', () => {
    if (inputcity.value.trim().length > 0) {
        console.log('@@ input value => ', inputcity.value)
        buscarCiudad(inputcity.value)
    }
})

const buscarCiudad = async (ciudad) => {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${ciudad}&language=es`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '755d2ba12dmsh3886fb5f642e827p198e86jsn13fe5c9b8720',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}