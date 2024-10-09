/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  beer: 1.75,
  chips: 1.05,
  wine: 5.0,
  chocolate: 1.0,
  water: 0.99,
};

function calculateTotalPrice(cartItems) {
  const totalAmount = Object.values(cartItems).reduce((acc, price) => acc + price, 0);
return `Total: €${totalAmount.toFixed(2)}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
// Test 1: The calculateTotalPrice function should take one parameter.
  const parameterCount = calculateTotalPrice.length;
  if (parameterCount === 1) {
    console.log('Great! The function calculateTotalPrice correctly accepts 1 parameter.');
  } else {
    console.log(`Error: The function calculateTotalPrice accepts ${parameterCount} parameters instead of 1.`);
  }
}

function test2() {
// Test 2: The function should return the correct total for cartForParty.
  const expectedTotal = 'Total: €9.79';
  const actualResult = calculateTotalPrice(cartForParty);
  if (actualResult === expectedTotal) {
    console.log('Done! The function calculateTotalPrice returned the correct total.');
  } else {
    console.log(`Error: Expected "${expectedTotal}" and received "${actualResult} are not matching".`);
  }
}

function test() {
  test1();
  test2();
}

test();
