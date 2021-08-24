// constantes
const apiKey = 'fd594becdcc048399f9dcd9e638e8b91'
const URL = 'https://api.themoviedb.org/3/search'
const URL_COMPLEMENT = `movie?api_key=${apiKey}&query=`



/*
export const getData = (ruta) => {
     return fetch(`${URL}/${ruta}${URL_COMPLEMENT}`)
        .then(response => response.json())
        .then(data => {
            if (data.status_code && !data.success) {
                throw new Error(`OH NO ERROR ${data.status_message}`)
            }
            return data
        })
        .catch(err => console.warn('err', err))
}
*/

export const getMovies = async (valor)=>{
    const response = await fetch(`${URL}/${URL_COMPLEMENT}${valor}`);
    const data = await response.json();
    return data;
}

