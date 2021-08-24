"use strict";

//import {getMovies} from './apiRequest.js'
import {getMovies} from './modules/apiRequest.js';

const ventana= document.getElementById('input');
ventana.addEventListener('keyup', async function(e){
      
  try{
    const data = await getMovies(e.target.value);
    limpiar();
    if (data.status_code && !data.success){
      throw new Error(`OH NO ERROR try catch ${data.status_message}`)
    }
    data.results.map(movie => movieCard(movie)); 
  }
  //getMovies(e.target.value) 
  catch (error){    
    console.warn(error)
  }

})


function limpiar(){
  root.innerHTML=''
}


const root = document.getElementById('moviesSection');

const movieCard = ({ title, overview, poster_path, release_date }) => {
  const row = document.createElement('div');
  row.innerHTML = `
  <div class="card mt-4" style="width: 18rem;">
    <img class="card-img-top moviePoster" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="movie_poster">
  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${overview}</p>
    <p class="card-text"><small class="text-muted">${release_date}</small></p>
  </div>
</div>
  `;
  root.appendChild(row);
};

