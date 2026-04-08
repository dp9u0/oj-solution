/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var maximumXor = function(s, t) {
    const n = s.length;
    let count0 = 0;
    let count1 = 0;

    for (const ch of t) {
        if (ch === '0') count0++;
        else count1++;
    }

    const result = [];

    for (let i = 0; i < n; i++) {
        if (s[i] === '0') {
            // Want t[i]='1' to get XOR=1
            if (count1 > 0) {
                result.push('1');
                count1--;
            } else {
                result.push('0');
                count0--;
            }
        } else {
            // Want t[i]='0' to get XOR=1
            if (count0 > 0) {
                result.push('1');
                count0--;
            } else {
                result.push('0');
                count1--;
            }
        }
    }

    return result.join('');
};

// TEST:
console.log(maximumXor("101", "011")); // Expected: "110"
console.log(maximumXor("0110", "1110")); // Expected: "1101"
console.log(maximumXor("0101", "1001")); // Expected: "1111"
console.log(maximumXor("00", "11")); // Expected: "11"
console.log(maximumXor("11", "00")); // Expected: "11"
