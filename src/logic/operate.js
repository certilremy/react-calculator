import Big from 'big.js';

const operate = (fsNum, scNum, operation) => {
  let bigOne;
  let bigTwo;
  if (fsNum == null || scNum == null) {
    bigOne = Big(0);
    bigTwo = Big(0);
  } else {
    bigOne = Big(fsNum);
    bigTwo = Big(scNum);
  }
  switch (operation) {
    case '-':
      return bigOne.minus(bigTwo);
    case '+':
      return bigOne.plus(bigTwo);
    case 'X':
      return bigOne.times(bigTwo);
    case '÷':
      if (parseFloat(scNum) === 0) return 'error';
      if (parseFloat(scNum) === '.') return 0;
      return bigOne.div(scNum);

    default:
      return -1;
  }
};

export default operate;
