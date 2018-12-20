/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return '1';
    }
    return persent(countAndSay(n - 1));
};

/**
 * @param {string} s
 * @return {string}
 */
var persent = function(s) {
    let currentChar = s.charAt(0);
    let say = '';
    let count = 0;
    for (let index = 0; index < s.length; index++) {
        let char = s.charAt(index);
        if (char === currentChar) {
            count++;
        } else {
            say += String(count) + String(currentChar);
            currentChar = char;
            count = 1;
        }
    }
    return say += String(count) + String(currentChar);;
};

// TEST:
console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));
console.log(countAndSay(7));
console.log(countAndSay(8));