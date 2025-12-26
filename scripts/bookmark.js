import {API} from './api.js';
const storage = 'favourites';

export function getBookmark(){
  return JSON.parse(localStorage.getItem(storage)) || [];
}

export function setBookmark(arr){
  localStorage.setItem(storage, JSON.stringify(arr));

}

export function saveBookmark(id){
 const favourites = getBookmark();
 if(!favourites.includes(id)){
   favourites.push(id);
   setBookmark(favourites);
   console.log(favourites);
 }
}


export async function renderBookmark(favourites){

  const containerForBookmark = document.createElement('div');
  containerForBookmark.classList.add('favourites__content', 'container');

  const api = new API();
  for (const favId of favourites){
    const data = await api.fetchMovieFromId(favId);

    const poster = data.poster_path
      ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
      : 'https://i.pinimg.com/1200x/4d/2d/e9/4d2de94f3266435bf50a1840f4953b14.jpg';


    const item = document.createElement('div');
    item.classList.add('favourites__item');

    item.innerHTML = `
      <img src="${poster}" class="favourites__image" alt="${data.title}"/>
      <h3>${data.title}</h3>
    `;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.type = 'button';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const favourites = getBookmark();
      const index = favourites.indexOf(favId);
      favourites.splice(index, 1);
      setBookmark(favourites);
      item.remove();
    })
    item.appendChild(deleteBtn);

    containerForBookmark.appendChild(item);

  }

return containerForBookmark;
}
