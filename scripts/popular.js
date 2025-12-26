import {API} from './api.js';
import {render} from './render.js';
import {routes} from "./routes.js";
export async function PopularRender(){
  const root = document.createElement('div');
  root.classList.add('container', 'populars-content');
  const list = document.createElement('div');
  list.classList.add('popular_movies-content');
  const api = new API();
  const data = await api.fetchMoviePopular();
  const btn = document.createElement('a');
  btn.setAttribute('href', '/');
  btn.classList.add('popular-back','back');
  btn.textContent='Back to home';

  data.results.forEach(item=>{
    const poster = item.poster_path
      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
      : `https://i.pinimg.com/1200x/4d/2d/e9/4d2de94f3266435bf50a1840f4953b14.jpg`;


    const card = document.createElement('div');
    card.classList.add('popular_movie-card');
    card.innerHTML=`
    <h1 class="populars__title">${item.title}</h1>
    <img src="${poster}" class="populars__poster"/>
  
    `
    list.appendChild(card);

    card.addEventListener('click',(event)=>{
      event.stopPropagation();
      history.pushState(null,null,'/populars/'+item.id);
      const app =document.querySelector('#app');
      render(app, routes);

    })

  });

  root.appendChild(list);
  root.appendChild(btn);
  return root;
}