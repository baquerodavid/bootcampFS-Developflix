import peliculas from './peliculas.js'

const urlBase = 'https://image.tmdb.org/t/p/w500';
const action = document.getElementById('genero-28');
const thriller = document.getElementById('genero-53');
const adventure = document.getElementById('genero-12');

//Crear una función con dos parámetros: genero (const action, thriller, adventure) y el genre_ids (28, 53, 12).
// Meter el for de abajo en la función sustituyendo los dos parámetros.

function films(genre, genreId) {
  for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].genre_ids.includes(genreId)) {
      const divFilm = document.createElement('div');
      const image = document.createElement('img');
      const headingTitle = document.createElement('h4');
      
      divFilm.className = 'film';
      headingTitle.textContent = peliculas[i].original_title;
      image.src = urlBase + peliculas[i].poster_path;
      genre.appendChild(divFilm);
      divFilm.appendChild(image)
      divFilm.appendChild(headingTitle);
  
      //console.log(peliculas[i].original_title);
    }
  }
}

films(action, 28);
films(thriller, 53);
films(adventure, 12);