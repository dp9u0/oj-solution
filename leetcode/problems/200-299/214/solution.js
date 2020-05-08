/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
    let table = getTable(s + "#" + s.split("").reverse().join(""));
    return s.substring(table[table.length - 1]).split("").reverse().join("") + s;
}

/**
 * build lookup table
 * @param {string} s 
 */
function getTable(s) {
    let table = Array.from(s).fill(0);
    let index = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[index] === s[i]) {
            table[i] = table[i - 1] + 1;
            index++;
        } else {
            index = table[i - 1];
            while (index > 0 && s[index] !== s[i]) {
                index = table[index - 1];
            }
            if (s[index] === s[i]) {
                index++;
            }
            table[i] = index;
        }
    }
    return table;
}


// TEST:
console.log(shortestPalindrome('aacecaaa')) // aaacecaaa
console.log(shortestPalindrome('abcd')) // dcbabcd
console.log(shortestPalindrome('abcded')) // dedcbabcded
