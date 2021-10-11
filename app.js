// import functions and grab DOM elements
import { shoes } from './shoes.js';
import { renderSneakers } from './render-sneakers.js';

// initialize global state

const sneakerList = document.getElementById('sneaker-list');

// set event listeners 
for (let shoe of shoes){
  const sneakerCard = renderSneakers(shoe);
  sneakerList.append(sneakerCard)
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
