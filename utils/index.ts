
export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': '8ccb541241msh549025666bffb3ap1d3176jsn25e85314cbfc',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=bmw', {headers: headers});

    const result = await response.json();

    return result;

}