import operate from './operate';

const calculate = (data, btnName) => {
  const bD = data;
  switch (btnName) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      bD.next += btnName;
      break;

    case '+/-':
      bD.total *= -1;
      bD.next *= -1;
      break;

    case 'AC':
      bD.total = '0';
      bD.next = '0';
      bD.operation = null;
      break;

    case '%':
      if (bD.total && parseFloat(bD.total) > 0) {
        bD.total = operate(data.total, 100, '÷');
      }

      if (bD.next && parseFloat(bD.next) > 0) {
        bD.next = operate(data.next, 100, '÷');
      }
      break;

    default:
      bD.total = operate(...data);
      bD.next = '0';
      bD.operation = null;
      break;
  }
  return bD;
};

export default calculate;
