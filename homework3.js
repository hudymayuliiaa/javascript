
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkProbabilityTheory(count) {
  let evenNumber = 0;
 let oddNumber = 0;

  let i = 0;
  while (i < count) {

    let number = getRandom(100, 1000);


    if (number % 2 === 0) {
      evenNumber++;
    } else {
      oddNumber++;
    }

    i++; 
  }
  
let evenPercentage = ((evenNumber/ count) * 100).toFixed(0);
let oddPercentage = ((oddNumber/ count) * 100).toFixed(0);

  console.log(count);
  console.log(evenNumber)
  console.log(oddNumber);
  console.log(evenPercentage);
  console.log(oddPercentage);
}
checkProbabilityTheory(1000);