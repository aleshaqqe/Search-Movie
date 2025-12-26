let options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2QwN2QyOTk2MTJiYjNkYTQ3NTQwNWQ5MWFmMTI2ZSIsIm5iZiI6MTc2NTA0NzY1MC4xOTM5OTk4LCJzdWIiOiI2OTM0N2Q2MjU4OWMzM2JlMGE3MGE5ZmYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eECuWVgdTK8qFK3-k0LiIhOgaGoe75fi8ZzLGsV-tO8'

  }
}


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