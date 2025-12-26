
import { getBookmark, renderBookmark } from './bookmark.js';
import { bookmark, forma , homePage} from './DOM.js';
import { PopularRender } from './popular.js';
export const routes = {
  "/":()=>{
    return homePage;
  },
  "/search": ()=>forma,

  "/bookmarks":async ()=>{
    const favourites = getBookmark();
    const container = await renderBookmark(favourites);
    return container;
  },
  '/populars': async () =>{
    return await PopularRender();
  }

}





