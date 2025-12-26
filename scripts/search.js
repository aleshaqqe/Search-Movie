
import {renderCards} from './renderCards.js';
let currentPage = 1;
export async function search(exam,container,input){

  let query=input.value;
  const data = await exam.fetchMovies(`${query}`,currentPage);
  renderCards(data.results,container);
  input.value='';
}
