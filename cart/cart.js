import { shoes } from '../Data/shoes.js';
import { calculateOrderTotal, findById, toUSD } from '../utils.js';
import { getCart } from '../utils.js';
import { renderLineItem } from '../renderLineItems.js';



const cart = getCart();

const tbody = document.getElementById('tableBody');
for (let cartItem of cart){
    const shoeData = findById(cartItem.id, shoes);

    const tr = renderLineItem(cartItem, shoeData);
    tbody.appendChild(tr);
    console.log(tr);
}

const orderTotal = calculateOrderTotal(cart, shoes);
const tdOrdertotal = document.getElementById('total');
tdOrdertotal.textContent = toUSD(orderTotal);

const orderButton = document.getElementById('completeButton');
orderButton.addEventListener('click', ()=>{
    localStorage.removeItem('CART');
    window.location.replace('..');
});