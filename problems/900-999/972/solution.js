/*
 * @lc app=leetcode id=972 lang=javascript
 *
 * [972] Equal Rational Numbers
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isRationalEqual = function(s, t) {
  const parse = (str) => {
    let intPart = str;
    let nonRep = '';
    let rep = '';
    if (str.includes('.')) {
      const dot = str.indexOf('.');
      intPart = str.slice(0, dot);
      const frac = str.slice(dot + 1);
      if (frac.includes('(')) {
        const open = frac.indexOf('(');
        nonRep = frac.slice(0, open);
        rep = frac.slice(open + 1, frac.length - 1);
      } else {
        nonRep = frac;
      }
    }
    const B = BigInt;
    const ip = B(intPart || '0');
    const a = nonRep.length;
    const b = rep.length;
    let num;
    let den;
    if (b > 0) {
      den = B(10) ** B(a) * (B(10) ** B(b) - 1n);
      num = B(nonRep || '0') * (B(10) ** B(b) - 1n) + B(rep);
    } else {
      den = B(10) ** B(a);
      num = B(nonRep || '0');
    }
    num += ip * den;
    return [num, den];
  };
  const [p1, q1] = parse(s);
  const [p2, q2] = parse(t);
  return p1 * q2 === p2 * q1;
};
// @lc code=end

// TEST:
console.log(isRationalEqual('0.(52)', '0.5(25)') === true);
console.log(isRationalEqual('0.1666(6)', '0.166(66)') === true);
console.log(isRationalEqual('0.9(9)', '1.') === true);
console.log(isRationalEqual('0.9(9)', '1') === true);
console.log(isRationalEqual('1.0', '1') === true);
console.log(isRationalEqual('1.(9)', '2.') === true);
console.log(isRationalEqual('0.(0)', '0') === true);
console.log(isRationalEqual('2.(5)', '2.5(5)') === true);
