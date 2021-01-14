/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    let a = first;
    let arr = encoded.map(b => a = b ^ a);
    arr.unshift(first);
    return arr;
};


// TEST:
console.log(decode([1, 2, 3], 1))
console.log(decode([6, 2, 7, 3], 4))