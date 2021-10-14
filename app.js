
// import functions and grab DOM elements
import { shoes } from './Data/shoes.js';
import { renderSneakers } from './render-sneakers.js';
import { addItem } from './utils.js';
//import { findById } from  './'
// initialize global state



const sneakerList = document.getElementById('sneaker-list');

// set event listeners 
for (let shoe of shoes){
    const sneakerCard = renderSneakers(shoe);
    sneakerList.append(sneakerCard);
}




const addButtons = document.querySelectorAll('.buy-Button');
for (let addButton of addButtons){
    addButton.addEventListener('click', ()=>{
        addItem(addButton.id);


    });
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
