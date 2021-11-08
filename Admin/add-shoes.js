import { addItem, addProduct, } from '../utils.js';

const form = document.getElementById('product-form');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const newShoe = {

        id: data.get('id'),
        shoeName: data.get('shoeName'),
        img: data.get('img'),
        price: Number(data.get('price')),

    };

    
    addProduct(newShoe);
    alert('New Shoe Added');
    form.reset();


});

console.log(form)

