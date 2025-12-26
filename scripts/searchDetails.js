import {API} from './api.js';

export async function searchDetails(id){
  console.log('renderMovieDetails called with ID:', id); // DEBUG


  const container = document.createElement('div');
  container.classList.add('movieDetails-content','container');
  const api = new API();
  const data = await api.fetchMovieFromId(id);
  const poster = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : 'https://i.pinimg.com/1200x/4d/2d/e9/4d2de94f3266435bf50a1840f4953b14.jpg';

  const backdrop = data.backdrop_path
    ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
    : '';

  container.innerHTML = `
    <div class="movie-detail__backdrop" style="background-image: url('${backdrop}')"></div>
    
    <div class="movie-detail__content">
      <a href="/search" class="movie-detail__back" data-link>← Назад до пошуку</a>
      
      <div class="movie-detail__wrapper">
        <div class="movie-detail__poster">
          <img src="${poster}" alt="${data.title}">
        </div>
        
        <div class="movie-detail__info">
          <h1 class="movie-detail__title">${data.title}</h1>
          
          <div class="movie-detail__meta">
            <span class="movie-detail__rating">⭐ ${data.vote_average?.toFixed(1) || 'N/A'}</span>
            <span class="movie-detail__year">${data.release_date?.split('-')[0] || 'N/A'}</span>
            <span class="movie-detail__runtime">${data.runtime ? data.runtime + ' хв' : ''}</span>
          </div>
          
          <div class="movie-detail__genres">
            ${data.genres?.map(g => `<span class="genre-tag">${g.name}</span>`).join('') || ''}
          </div>
          
          <div class="movie-detail__overview">
            <h3>Опис:</h3>
            <p>${data.overview || 'Опис недоступний'}</p>
          </div>
          
          ${data.tagline ? `<p class="movie-detail__tagline">"${data.tagline}"</p>` : ''}
        </div>
      </div>
    </div>
  `;

  return container;

}