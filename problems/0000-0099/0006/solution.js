/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    let slot = [];
    let groupNums = 2 * (numRows - 1);
    for (var index = 0; index <= s.length; index++) {
        let slotIndex = index % groupNums;
        slotIndex = slotIndex <= (numRows - 1) ? slotIndex : groupNums - slotIndex;
        slot[slotIndex] = slot[slotIndex] ? slot[slotIndex] + s.charAt(index) : s.charAt(index);
    }
    return slot.join('');
};

// TEST:
console.log(convert('PAYPALISHIRING', 3));
console.log(convert('123432123432123432123', 4));
console.log(convert('A', 1));
console.log(convert('1234543212345432123454321234', 5));
console.log(convert('12345654321234565432', 6));