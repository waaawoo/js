// ES5
function getMessage(){
  const year = new Date().getFullYear();

  return "今年は" + year + "年です";
}

console.log(getMessage());

// ES6
function getMessage(){
  const year = new Date().getFullYear();

  return `今年は${year}年です`;
}
console.log(getMessage());

const year = 2018;
const yearMessage = `今年は${year}年です`;

function doubleMessage(number) {
    return `${number}を２倍すると${2 * number}になります`;
  }

  console.log(doubleMessage(5));
