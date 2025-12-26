import {API} from './api.js';
import {search} from './search.js';
import { getBookmark, setBookmark, saveBookmark, renderBookmark } from './bookmark.js';
const exemp = new API();
const container = document.querySelector('.container')
let favourites = [];

//Home page
export const homePage=document.createElement('div');
homePage.classList.add('homepage','container');
homePage.innerHTML=`
<section style="color:white" class="homepage-content">
<h1 class="homepage__title">🎬 Твій особистий кінотеатр</h1>
<div class="cmd">
    <div class="terminal_toolbar">
        <div class="butt">
            <button class="btn btn-color"></button>
            <button class="btn"></button>
            <button class="btn"></button>
        </div>
        <p class="user">aleshaqqe@admin: ~</p>
        <div class="add_tab">
            +
        </div>
    </div>
    <div class="terminal_body">
        <div class="terminal_promt">
            <span class="terminal_user">aleshaqqe@admin:</span>
            <span class="terminal_location">~</span>
            <span class="terminal_bling">$</span>
            <span class="terminal_cursor"></span>
        </div>
    </div>
</div>
<h2 class="homepage__subtitle">
Цей сайт — твій гід у світі кіно. Тут ти можеш:<br><br>
  
  🔍 <strong>Шукати фільми</strong> — знайди будь-яке кіно за назвою<br>
  ⭐ <strong>Зберігати улюблене</strong> — створи свою колекцію must-watch<br>
  🔥 <strong>Дивитись популярне</strong> — що trending прямо зараз<br>
  🎯 <strong>Знаходити нове</strong> — відкривай для себе цікаві фільми<br><br>
  
  <em style="opacity: 0.7;">Створено з ❤️ для справжніх любителів кіно</em>
</h2>
</section>
`




//Search Kino
  export const forma = document.createElement('div');
  forma.classList.add('form', 'container');
  forma.innerHTML = `
      <form action="#" method="POST">
      <input type="text" class="search__input">
      <button type="button" class="search__btn">Search</button>
  </form> 
  
  <div class="results"></div>
  
  `;
  forma.querySelector('.search__btn').addEventListener('click', (e) => {
    e.preventDefault();

    const input = forma.querySelector('.search__input');
    const container = forma.querySelector('.results');
    container.innerHTML=``;
    search(exemp, container, input);

  });

//Bookmark
export const bookmark = document.createElement('div');
bookmark.classList.add('favourites__content');



















//Popular Films
const b = new API();
async function popular(){
  const data = await b.fetchMoviePopular();
  const container = document.createElement('div');
  container.classList.add('popular__films');

}
