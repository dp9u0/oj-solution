/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
    var as = a.split(regex);
    var bs = b.split(regex);
    let a1 = Number(as[0]);
    let a2 = Number(as[1]);
    let b1 = Number(bs[0]);
    let b2 = Number(bs[1]);
    let r1 = a1 * b1 - a2 * b2;
    let r2 = a1 * b2 + a2 * b1;
    return `${r1}+${r2}i`;
};
const regex = /\+|i/;

// TEST:
console.log(complexNumberMultiply('1+2i', '1+2i'));
console.log(complexNumberMultiply('1+1i', '1+1i'));
console.log(complexNumberMultiply('1+-1i', '1+-1i'));