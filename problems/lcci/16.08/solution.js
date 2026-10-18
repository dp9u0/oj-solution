/*
 * @lc app=leetcode.cn id=面试题 16.08 lang=javascript
 *
 * [面试题 16.08] 整数的英语表示
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return 'Zero';
    const below20 = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const units = ['', 'Thousand', 'Million', 'Billion'];
    // 三位数段内转换（百位 + 十位/个位）
    const convert = n => {
        const parts = [];
        if (n >= 100) {
            parts.push(below20[Math.floor(n / 100)], 'Hundred');
            n %= 100;
        }
        if (n >= 20) {
            parts.push(tens[Math.floor(n / 10)]);
            n %= 10;
        }
        if (n > 0) parts.push(below20[n]);
        return parts;
    };
    const res = [];
    let unit = 0;
    while (num > 0) {
        const chunk = num % 1000;
        if (chunk > 0) {
            // 循环自低位向高位；先 unshift 单位词再 unshift 段，保证段在前单位在后
            if (unit > 0) res.unshift(units[unit]);
            res.unshift(...convert(chunk));
        }
        num = Math.floor(num / 1000);
        unit++;
    }
    return res.join(' ');
};
// @lc code=end

// TEST:
console.log(numberToWords(123) === 'One Hundred Twenty Three');
console.log(numberToWords(12345) === 'Twelve Thousand Three Hundred Forty Five');
console.log(numberToWords(1234567) === 'One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven');
console.log(numberToWords(1234567891) === 'One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One');
console.log(numberToWords(0) === 'Zero');
console.log(numberToWords(100030000) === 'One Hundred Million Thirty Thousand'); // 空段跳过
console.log(numberToWords(1000000) === 'One Million');
