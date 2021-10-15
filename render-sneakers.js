

export function renderSneakers(shoe){
    const sneakerDisplay = document.createElement('div');
    sneakerDisplay.classList.add('sneaker-Display');

    const sneakerHeader = document.createElement('h2');
    sneakerHeader.textContent = shoe.brand;

    const img = document.createElement('img');
    img.src = shoe.img;

    const addButton = document.createElement('button');
    addButton.textContent = 'add to cart';

    sneakerDisplay.append(sneakerHeader, img, addButton);
    return sneakerDisplay;



   






}