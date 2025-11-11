import peliculas from './peliculas.js'

const urlBase = 'https://image.tmdb.org/t/p/w500';
const action = document.getElementById('genero-28');
const thriller = document.getElementById('genero-53');
const adventure = document.getElementById('genero-12');

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

// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇

// const accion = document.getElementById('genero-28');
// const newThriller = document.getElementById('genero-53');
// const aventura = document.getElementById('genero-12');

/*
El filter tiene 3 argumentos: elemento, indice y el propio array.La mayoría de las veces solo se usará el elemento, y a veces el índice también, pero pocas veces el array.
const pelisAventura = peliculas.filter(elemento, indice, arr)
*/

// En lugar de con un for, el método filter es mucho más sencillo y limpio. Y todo lo que incluye el for, ya lo tiene el filter. Pero el filter solo funciona con arrays.
//const pelisAventuraFiltradas = peliculas.filter(peli => peli.genre_ids.includes(12));
// const pelisThriller = peliculas.filter(peli => peli.genre_ids.includes(53));
// const pelisAccion = peliculas.filter(peli => peli.genre_ids.includes(28));

// const pelisAventura = pelisAventuraFiltradas.map(peli => {
//   const template = `
//   <div class="card">
//     <img src="${urlBase}${peli.poster_path}" alt="${peli.title}" />
//     <h3>${peli.title}</h3>
//   </div>
//   `
//   return template;
// }).join("")

// aventura.innerHTML = pelisAventura;

// function pelisGenero(genero) {
//   const pelisFiltradas = peliculas.filter(peli => peli.genre_ids.includes(genero));
//   const mostrarPelis = pelisFiltradas.map(peli => {
//     const template = `
//     <div class="card">
//       <img src="${urlBase}${peli.poster_path}" alt="${peli.title}" />
//       <h3>${peli.title}</h3>
//     </div>
//     `
//     return template;
//   }).join("")
//   return mostrarPelis;
// }

// accion.innerHTML = pelisGenero(28);
// newThriller.innerHTML = pelisGenero(53);
// aventura.innerHTML = pelisGenero(12);