/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {

  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }
  let first = num1.split('').reverse();
  let second = num2.split('').reverse();
  let results = [];
  for (let i = 0; i < second.length; i++) {
    const multiplicand = second[i];
    results[i] = [];
    let inc = 0;
    let j;
    for (j = 0; j < first.length; j++) {
      const multiplier = first[j];
      let product = multiplier * multiplicand + inc;
      if (product > 9) {
        inc = Math.floor(product / 10);
        product = product % 10;
      } else {
        inc = 0;
      }
      results[i][j] = product;
    }
    if (inc > 0) {
      results[i][j] = inc;
    }
  }
  // console.log(results);
  let result = [];
  for (let i = 0; i < results.length; i++) {
    const line = results[i];
    for (let index = i; index > 0; index--) {
      line.unshift(0);
    }
    // console.log(line);
    let inc = 0;
    let j;
    for (j = 0; j < line.length; j++) {
      const bit = line[j];
      let add = bit + (result[j] || 0) + inc;
      if (add > 9) {
        inc = Math.floor(add / 10);
        add = add % 10;
      } else {
        inc = 0;
      }
      result[j] = add;
    }
    if (inc > 0) {
      result[j] = inc;
    }
    // console.log(result);
  }
  let str = ''
  for (let index = result.length - 1; index >= 0; index--) {
    str += result[index] + '';
  }
  return str;
};

//TEST:

let num1, num2;
num1 = "9", num2 = "9"
console.log(multiply(num1, num2));

num1 = "123", num2 = "456"
console.log(multiply(num1, num2));

num1 = "123", num2 = "0"
console.log(multiply(num1, num2));