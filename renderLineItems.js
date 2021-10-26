import { toUSD } from './utils.js';


export function renderLineItem(cartItem, shoes){
    
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = shoes.shoeName;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = shoes.price;

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    const total = cartItem.qty * shoes.price;
    tdTotal.textContent = toUSD(total);

    tr.append(tdName, tdPrice, tdQty, tdTotal);

    return tr;
}

// everytime add to cart is clicked
// shoe and shoe data is added to cart table


