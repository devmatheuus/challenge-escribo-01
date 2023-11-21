const sumDivisibleByThreeOrFive = (number) => {
  if (typeof number !== 'number') return 'Please enter a number';

  let totalSum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      totalSum += i;
    }
  }

  return totalSum;
};

const numberToTest = 11;
console.log(sumDivisibleByThreeOrFive(numberToTest));
