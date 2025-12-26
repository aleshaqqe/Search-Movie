import {render} from './render.js';
import {routes} from './routes.js';
import {API} from './api.js';
import { saveBookmark } from './bookmark.js';
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('bookmarks__btn')) {
    saveBookmark(Number(e.target.dataset.movie));
  }
});

//Exemplar
const exemplar = new API();
const app = document.querySelector('#app');

//Validate link
document.addEventListener('click', (e)=>{
  if(e.target.matches('[data-link]')){
    e.preventDefault();
    history.pushState(null, null, e.target.getAttribute('href'));
    render(app,routes);
  }
})


//Search Kino Event


// Back / Forward
window.addEventListener('popstate', () => {
  render(app,routes);
});






//First render
render(app,routes);