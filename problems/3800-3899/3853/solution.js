/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var mergeCharacters = function(s, k) {
    const arr = s.split('');

    while (true) {
        let found = false;

        for (let i = 0; i < arr.length && !found; i++) {
            for (let j = i + 1; j <= Math.min(i + k, arr.length - 1) && !found; j++) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, 1);
                    found = true;
                }
            }
        }

        if (!found) break;
    }

    return arr.join('');
};

// TEST:
console.log(mergeCharacters("abca", 3)); // Expected: "abc"
console.log(mergeCharacters("aabca", 2)); // Expected: "abca"
console.log(mergeCharacters("yybyzybz", 2)); // Expected: "ybzybz"
console.log(mergeCharacters("aaaa", 1)); // Expected: "a"
console.log(mergeCharacters("abc", 1)); // Expected: "abc"
