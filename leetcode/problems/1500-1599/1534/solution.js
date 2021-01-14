/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
    let count = 0;
    let length = arr.length;
    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            if (Math.abs(arr[i] - arr[j]) > a) {
                continue;
            }
            for (let k = j + 1; k < length; k++) {
                if (Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c) {
                    count++;
                }
            }
        }
    }
    return count;
};


// TEST:
let arr = [3, 0, 1, 1, 9, 7], a = 7, b = 2, c = 3
console.log(countGoodTriplets(arr, a, b, c))
arr = [1, 1, 2, 2, 3], a = 0, b = 0, c = 1
console.log(countGoodTriplets(arr, a, b, c))