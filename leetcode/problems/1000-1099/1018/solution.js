/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
    let n = 0;
    return A.map(v => {
        n = ((n << 1) + v) % 10;
        return n % 5 === 0;
    })
};


// TEST:
console.log(prefixesDivBy5([0, 1, 1]))
console.log(prefixesDivBy5([1, 1, 1]))
console.log(prefixesDivBy5([0, 1, 1, 1, 1, 1]))
console.log(prefixesDivBy5([1, 1, 1, 0, 1]))
console.log(prefixesDivBy5([1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1]))