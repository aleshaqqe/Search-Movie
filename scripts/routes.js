
import { getBookmark, renderBookmark } from './bookmark.js';
import { bookmark, forma , homePage} from './DOM.js';
import { PopularRender } from './popular.js';
import {renderMovieDetails} from "./movieDetails.js";
import {searchDetails} from './searchDetails.js'


export const routes = {
  "/":()=>{
    return homePage;
  },
  "/search": ()=>forma,
  '/search/:id': async ()=>{
    const path = window.location.pathname;
    const movieId = path.split('/').pop();
    return await searchDetails(movieId);
  },

  "/bookmarks":async ()=>{
    const favourites = getBookmark();
    const container = await renderBookmark(favourites);
    return container;
  },
  '/populars': async () =>{
    return await PopularRender();
  },
  '/bookmarks/:id':async () =>{
    const path = window.location.pathname;
    const movieId = path.split('/').pop(); // отримуємо ID з URL
    return await renderMovieDetails(movieId);
  },

}





