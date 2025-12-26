import {options} from './options.js';


export class API {

  async fetchMovies(query='',page = 1){
    const encodedQuery = encodeURIComponent(query);
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&include_adult=false&language=uk-UA&page=${page}`, options)
      .then(res => res.json());
  }
  async fetchTrailer(movieId){
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=uk-UA`, options)
      .then(res => res.json())
      .then(data => {
        const trailer = data.results.find(video=>video.type==='Trailer' && video.site==='YouTube');
        return trailer ? trailer.key : 'Trailer not found';
      });
  }
  async fetchMovieFromId(movieId){
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}`,options).then(res=>res.json());
  }
  async fetchMoviePopular(){
    const url = `https://api.themoviedb.org/3/movie/popular`;
    return fetch(url,options)
      .then(res => res.json());
  }




};