// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { findById, calculateOrderTotal, addItem, getCart } from '../utils.js';
import { shoes } from '../shoes.js';

const test = QUnit.test;



test('findById should find the id of the sneakers', (expect) => {
    const expected = {
        id: '1',
        brand: 'Nike Dunks',
        type: 'low top',
        img: 'assets/sneakers pics/nike-dunks-low.png',

    };
    const actual = findById('1', shoes);
    expect.deepEqual(actual, expected);
});


test('addItem should add an item to cart', (expect) => {
    localStorage.removeItem('CART');
    const expected = [{ id: '1', qty: 1 }];
    addItem('1');
    const cart = getCart();
    expect.deepEqual(cart, expected);
});

test('getCart should return the value of the cart ', (expect) => {
    const cart1 = [
        { id: '1', qty: 2 },
        { id: '2', qty: 1 }
    ];
    localStorage.setItem('CART', JSON.stringify(cart1));
    const cart = getCart();
    expect.deepEqual(cart, cart1);
});
