import operate from './operate';

const calculate = (NuOb, BtnNAme) => {
  let {
    next, total, actualData, operation,
  } = NuOb;
  switch (BtnNAme) {
    case '+':
    case '-':
    case 'X':
    case '÷':
      if (!total) {
        total = next;
        next = null;
        operation = BtnNAme;
        break;
      } else {
        total = operate(total, next, operation);
        next = null;
        actualData = total.toString();
        operation = BtnNAme;
      }

      break;

    case '=':
      if (operation === null) { break; }

      next = operate(total, next, operation);
      total = null;
      operation = null;
      actualData = next.toString();
      break;

    case '+/-':
      next *= -1;
      actualData = next;
      break;

    case 'AC':
      total = null;
      next = null;
      actualData = '0';
      operation = null;
      break;

    case '%':
      if (!total) {
        ({
          next, total, actualData, operation,
        } = calculate({
          next, total, actualData, operation,
        }, 'AC'));
      } else if (operation === '+' || operation === '-') {
        next = operate(total, next / 100, 'X');
        actualData = next.toString();
      } else if (operation === 'X' || operation === '÷') {
        next = operate(next, 100, '÷');
        actualData = next.toString();
      }
      break;

    default:
      if (next === null) next = '';
      next += BtnNAme;
      actualData = next;
      break;
  }
  return {
    next, total, actualData, operation,
  };
};

export default calculate;
