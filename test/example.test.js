// IMPORT MODULES under test here:
import { shoes } from '../Data/shoes.js';

import { findById } from './utils.js';

// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
   
    const expected = {
        id: '2',
        brand: 'Jordans',
        type: 'low top',
        img: 'assets/sneakers pics/cement-3.png'
       
    };
   
   
    const actual = findById ('4', shoes);
    //Arrange
    // Set up your arguments and expectations
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
