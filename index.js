function hasTargetSum(array, target) {
  // Write your algorithm here
  for(var b =0; b < array.length; b++)
  {
    const info = target - array[b];
    for (let x = b+1; x < array.length; x++)
    {
      if(array[x] === info) return true;
    }

  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  time: O(n^2)
  space: O(n)
*/

/* 
  Add your pseudocode here
  if we have ([3, 8, 12, 4, 11, 7], 10)) we expect that the value being returned is 10
  after specific two numbers have been added after our code has looked into each number in 
  our array
*/

/*
  Add written explanation of your solution here
  what is expected is first we need to have a function called hasTargetSum
  in this function it should execute the following
  1)check if their are numbers that add to the target
  2)add them and if the value is == to the target then
  it should return true else false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
