// IMPORT MODULES under test here:
import { shoes } from '../Data/shoes.js';

import { findById } from '../utils.js';

// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
   
    const expected = {
        id: '2',
        img: 'assets/sneakers pics/cement-3.png',
        price: 350,
        shoeName: 'Black Cement 3'
       
    };
   
   
    const actual = findById ('2', shoes);
    //Arrange
    // Set up your arguments and expectations
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
