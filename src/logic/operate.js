import BigJs from 'big.js';

const operate = (nOne, nTwo, operation) => {
  const FirstBigJs = BigJs(nOne);
  const BigJsTwo = BigJs(nTwo);
  switch (operation) {
    case '-':
      return FirstBigJs.minus(BigJsTwo);
    case '+':
      return FirstBigJs.plus(BigJsTwo);
    case 'X':
      return FirstBigJs.times(BigJsTwo);
    case '÷':
      if (parseFloat(nTwo) === 0) return 'error';
      if (parseFloat(nTwo) === '.') return 0;
      return FirstBigJs.div(nTwo);

    default:
      return -1;
  }
};

export default operate;
