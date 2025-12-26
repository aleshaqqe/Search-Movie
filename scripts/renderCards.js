import {saveBookmark} from "./bookmark.js";


export function renderCards(movies, container){
  movies.forEach(movie => {
    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : 'https://i.pinimg.com/1200x/4d/2d/e9/4d2de94f3266435bf50a1840f4953b14.jpg';

    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
      <h3 class="card__title">${movie.title}</h3>
      <img style="max-width:300px; height:auto;" src="${poster}" alt="Poster not found">
    `;

    //Button for save in bookmarks
    const btn = document.createElement('button');
    btn.classList.add('bookmarks__btn');
    btn.dataset.movie_id = movie.id;
    btn.textContent='Зберегти';

    btn.addEventListener('click', (event)=>{
      event.stopPropagation();
      saveBookmark(movie.id);
      btn.textContent='✓ Збережено';
      btn.style.opacity=0.6;
      btn.disabled=true;

    })
    card.appendChild(btn);
    container.appendChild(card);
  });
}
